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

    if (!('IntersectionObserver' in window) || byTarget.size === 0) return;

    let activeAnchorLink = null;
    let activeTarget = null;
    // While a nav click is smooth-scrolling, the observer would drag the
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
        links.forEach((link) => link.removeAttribute('aria-current'));
        byTarget.get(target).forEach((link) => {
            link.setAttribute('aria-current', 'location');
            if (link.closest('.anchor-nav')) activeAnchorLink = link;
        });
        moveMarker();
    };

    window.addEventListener('load', moveMarker);
    if (document.fonts) document.fonts.ready.then(moveMarker);
    // Reposition whenever layout actually changes size — covers late
    // window sizing, breakpoint flips, and font reflow.
    if ('ResizeObserver' in window) {
        new ResizeObserver(moveMarker).observe(document.documentElement);
    }

    byTarget.forEach((navLinks, target) => {
        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                setActive(target);
                suppressUntil = performance.now() + 1000;
            });
        });
    });

    window.addEventListener('scrollend', () => {
        suppressUntil = 0;
    });

    const observer = new IntersectionObserver(
        (entries) => {
            if (performance.now() < suppressUntil) return;
            entries.forEach((entry) => {
                if (entry.isIntersecting) setActive(entry.target);
            });
        },
        // A band near the top of the viewport decides which section is "current".
        { rootMargin: '-15% 0px -65% 0px' }
    );

    byTarget.forEach((_, target) => observer.observe(target));

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

// Copy email: the anchor column's featured state change.
(() => {
    const button = document.querySelector('.copy-email');
    if (!button) return;

    const idleLabel = button.textContent;
    let revert;

    const settle = (label, copied) => {
        button.classList.toggle('is-copied', copied);
        button.textContent = label;
        clearTimeout(revert);
        revert = setTimeout(() => {
            button.classList.remove('is-copied');
            button.textContent = idleLabel;
        }, 1800);
    };

    button.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(button.dataset.email);
            settle('copied', true);
        } catch {
            // Clipboard needs a secure context; the mailto link still works.
            settle('copy failed', false);
        }
    });
})();
