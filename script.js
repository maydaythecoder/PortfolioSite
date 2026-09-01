// Wayfinding: mark the section in view in both navs; in the anchor
// column a rule glides between labels as the reader moves.
(() => {
    const links = document.querySelectorAll('nav a[href^="#"]');
    const marker = document.querySelector('.nav-marker');
    const byTarget = new Map();
    links.forEach((link) => {
        const target = document.getElementById(link.hash.slice(1));
        if (!target) return;
        if (!byTarget.has(target)) byTarget.set(target, []);
        byTarget.get(target).push(link);
    });

    if (byTarget.size === 0) return;

    const sections = [...byTarget.keys()];
    let activeAnchorLink = null;
    let activeTarget = null;
    // While a nav click is smooth-scrolling, scroll updates would drag the
    // marker through every section it passes; hold it on the destination.
    let suppressUntil = 0;

    const moveMarker = () => {
        // offsetParent is null while the anchor nav is display: none
        // (narrow viewports) or before layout settles — don't show a
        // marker positioned against a stale layout.
        if (!marker || !activeAnchorLink || activeAnchorLink.offsetParent === null) return;
        const y = activeAnchorLink.offsetTop + activeAnchorLink.offsetHeight / 2 - 1;
        marker.style.transform = `translateY(${y}px)`;
        marker.classList.add('ready');
    };

    const setActive = (target) => {
        if (target === activeTarget) return;
        activeTarget = target;
        sections.forEach((section) => {
            section.classList.toggle('is-current', section === target);
        });
        links.forEach((link) => link.removeAttribute('aria-current'));
        byTarget.get(target).forEach((link) => {
            link.setAttribute('aria-current', 'location');
            if (link.closest('.anchor-nav')) activeAnchorLink = link;
        });
        moveMarker();
    };

    // Inside a timeline section, the entry passing the reading line
    // highlights too.
    const jobs = [...document.querySelectorAll('.job')];
    const sectionOf = new Map(jobs.map((job) => [job, job.closest('.doc-section')]));

    const highlightJob = () => {
        const readingLine = window.innerHeight * 0.3;
        const candidates = jobs.filter((job) => sectionOf.get(job) === activeTarget);
        let current = null;
        if (candidates.length > 0) {
            current = candidates[0];
            for (const job of candidates) {
                if (job.getBoundingClientRect().top > readingLine) break;
                current = job;
            }
        }
        jobs.forEach((job) => job.classList.toggle('job-active', job === current));
    };

    // The current section is a pure function of scroll position: the
    // last section whose top has crossed a reading line at 30% of the
    // viewport. Computed, not event-driven, so fast scrolling can never
    // skip a section and there is exactly one answer at any position.
    const pickCurrent = () => {
        const readingLine = window.innerHeight * 0.3;
        let current = sections[0];
        for (const section of sections) {
            if (section.getBoundingClientRect().top > readingLine) break;
            current = section;
        }
        return current;
    };

    const refresh = () => {
        if (performance.now() >= suppressUntil) {
            setActive(pickCurrent());
            highlightJob();
        }
        moveMarker();
    };

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            ticking = false;
            refresh();
        });
    }, { passive: true });

    window.addEventListener('load', refresh);
    if (document.fonts) document.fonts.ready.then(refresh);
    // Recompute whenever layout actually changes size — covers late
    // window sizing, breakpoint flips, and font reflow.
    if ('ResizeObserver' in window) {
        new ResizeObserver(refresh).observe(document.documentElement);
    }

    byTarget.forEach((navLinks, target) => {
        navLinks.forEach((link) => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                // A selected section lands centered when it fits the
                // viewport; taller sections align to the top instead.
                const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                const fits = target.getBoundingClientRect().height <= window.innerHeight * 0.85;
                target.scrollIntoView({
                    behavior: reduced ? 'auto' : 'smooth',
                    block: fits ? 'center' : 'start'
                });
                history.pushState(null, '', link.hash);
                setActive(target);
                suppressUntil = performance.now() + 1000;
                // If scrollend never fires, settle once the hold expires.
                setTimeout(refresh, 1100);
            });
        });
    });

    window.addEventListener('scrollend', () => {
        suppressUntil = 0;
        refresh();
    });

    // Language switches reflow the text; recompute against the new layout.
    window.addEventListener('i18n:changed', refresh);

    refresh();

    if (marker) {
        // Functional bloom: a brief pulse as the marker settles.
        marker.addEventListener('transitionend', (e) => {
            if (e.propertyName !== 'transform') return;
            marker.classList.add('bloom');
        });
        marker.addEventListener('animationend', () => marker.classList.remove('bloom'));

        let resizeWait;
        window.addEventListener('resize', () => {
            clearTimeout(resizeWait);
            resizeWait = setTimeout(moveMarker, 150);
        });
    }
})();

// Theme toggle and language switcher.
(() => {
    const toggles = document.querySelectorAll('.theme-toggle');
    const selects = document.querySelectorAll('.lang-select');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

    const effectiveTheme = () =>
        document.documentElement.dataset.theme || (systemDark.matches ? 'dark' : 'light');

    // The button shows the theme it switches to: moon offers dark,
    // sun offers light.
    const updateToggles = () => {
        const dark = effectiveTheme() === 'dark';
        const key = dark ? 'theme_light' : 'theme_dark';
        toggles.forEach((btn) => {
            btn.dataset.i18nAria = key;
            btn.setAttribute('aria-label', window.i18nGet(key));
            const moon = btn.querySelector('.icon-moon');
            const sun = btn.querySelector('.icon-sun');
            if (moon) moon.hidden = dark;
            if (sun) sun.hidden = !dark;
        });
    };

    toggles.forEach((btn) => {
        btn.addEventListener('click', () => {
            const next = effectiveTheme() === 'dark' ? 'light' : 'dark';
            document.documentElement.dataset.theme = next;
            try { localStorage.setItem('theme', next); } catch {}
            updateToggles();
        });
    });

    // System theme changes only matter while no explicit choice is stored.
    systemDark.addEventListener('change', () => {
        if (!document.documentElement.dataset.theme) updateToggles();
    });

    selects.forEach((sel) => {
        sel.addEventListener('change', () => {
            window.setLang(sel.value);
            updateToggles();
            window.dispatchEvent(new Event('i18n:changed'));
        });
    });

    updateToggles();
})();

// Copy email: the anchor column's featured state change.
(() => {
    const button = document.querySelector('.copy-email');
    if (!button) return;

    const status = document.getElementById('copy-status');
    const icons = {
        copy: button.querySelector('.icon-copy'),
        check: button.querySelector('.icon-check'),
        fail: button.querySelector('.icon-fail')
    };
    let revert;

    const show = (name) => {
        Object.entries(icons).forEach(([key, el]) => {
            if (el) el.hidden = key !== name;
        });
    };

    const settle = (labelKey, copied) => {
        button.classList.toggle('is-copied', copied);
        show(copied ? 'check' : 'fail');
        if (status) status.textContent = window.i18nGet(labelKey);
        clearTimeout(revert);
        revert = setTimeout(() => {
            button.classList.remove('is-copied');
            show('copy');
            if (status) status.textContent = '';
        }, 1800);
    };

    button.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(button.dataset.email);
            settle('copied', true);
        } catch {
            // Clipboard needs a secure context; the mailto link still works.
            settle('copy_failed', false);
        }
    });
})();
