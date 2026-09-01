// Translations. Proper nouns — the name, employers, brands, and tech
// terms — stay in Latin script in every language by design.
const I18N = {
    en: {
        skip: 'Skip to content',
        nav_about: 'about', nav_skills: 'skills', nav_experience: 'experience',
        nav_education: 'education', nav_projects: 'projects',
        role: 'Full-stack developer building web and mobile applications with React, TypeScript, Node.js, and Python.',
        about_p1: 'Four years of experience designing and building scalable, high-performance web and mobile applications.',
        about_p2: 'Front end in React and React Native. Back end in Node.js, Python, and PHP. Infrastructure on AWS, Azure, and Google Cloud, with Terraform and CI/CD pipelines in GitHub Actions.',
        skills_front: 'Front end', skills_back: 'Back end', skills_infra: 'Infrastructure',
        job1_title: 'Data center engineer',
        job1_meta: 'Amazon Web Services, Columbus, January 2026',
        job1_b1: 'Performs hands-on work with servers and data center hardware, including installation, monitoring, and maintenance to ensure system reliability and uptime.',
        job1_b2: 'Troubleshoots hardware and infrastructure issues, diagnosing failures, documenting resolutions, and escalating complex issues in accordance with AWS operational procedures.',
        job2_title: 'Full-stack software engineer',
        job2_meta: 'Think Outside The Valley, remote, September 2023',
        job2_b1: 'Developed client-side web UI and back-end account logic, aggregating complex user and prospect data from multiple sources with SQL, Excel, and Firebase while ensuring accuracy, consistency, and documentation.',
        job2_b2: 'Analyzed datasets to identify trends, patterns, and business insights, producing KPI-focused performance reports and supporting ad-hoc decision-making.',
        job2_b3: 'Partnered with business, product, and technical teams to translate data requirements into clear analyses and present actionable insights to stakeholders.',
        job3_title: 'Consultant, full-stack engineer',
        job3_meta: 'Cube Seed, Columbus, July 2022',
        job3_b1: 'Designed and deployed a scalable microservices architecture with Node.js and AWS, reducing application latency by 35%.',
        edu1_title: 'Meta Elevate, full-stack development',
        edu1_meta: 'Coursera, December 2022',
        edu1_summary: 'Back-end development, API design, CI/CD, database management, and Agile practice.',
        certs_title: 'Certifications',
        cert_meta: 'React, JavaScript, Python, front-end and back-end development',
        cert_google: 'Cybersecurity, AI and machine learning',
        cert_linkedin: 'AWS',
        p1_desc: 'A compiled programming language engineered from the ground up for machine learning and AI, combining the execution speed of Rust with high readability: AI-first primitives, robust tooling, and syntax optimized for high-performance training loops.',
        p2_desc: 'A terminal UI for real-time system health monitoring: a custom scoring engine turns CPU, memory, GPU, storage, and battery metrics into per-component health scores, with automated maintenance for disk checks, file repairs, and cache clearing.',
        p3_desc: 'A console script that finds and clears caches on macOS.',
        back_top: 'back to top',
        copy_idle: 'copy address', copied: 'copied', copy_failed: 'copy failed',
        theme_dark: 'dark', theme_light: 'light',
        aria_sections: 'Sections', aria_lang: 'Language',
        meta_desc: 'Full-stack developer building web and mobile applications with React, TypeScript, Node.js, and Python.'
    },
    es: {
        skip: 'Saltar al contenido',
        nav_about: 'sobre mí', nav_skills: 'habilidades', nav_experience: 'experiencia',
        nav_education: 'formación', nav_projects: 'proyectos',
        role: 'Desarrollador full-stack que crea aplicaciones web y móviles con React, TypeScript, Node.js y Python.',
        about_p1: 'Cuatro años de experiencia diseñando y construyendo aplicaciones web y móviles escalables y de alto rendimiento.',
        about_p2: 'Front-end con React y React Native. Back-end con Node.js, Python y PHP. Infraestructura en AWS, Azure y Google Cloud, con Terraform y pipelines de CI/CD en GitHub Actions.',
        skills_front: 'Front-end', skills_back: 'Back-end', skills_infra: 'Infraestructura',
        job1_title: 'Ingeniero de centro de datos',
        job1_meta: 'Amazon Web Services, Columbus, enero de 2026',
        job1_b1: 'Realiza trabajo práctico con servidores y hardware de centro de datos, incluida la instalación, la supervisión y el mantenimiento para garantizar la fiabilidad y disponibilidad de los sistemas.',
        job1_b2: 'Resuelve problemas de hardware e infraestructura: diagnostica fallos, documenta soluciones y escala incidencias complejas conforme a los procedimientos operativos de AWS.',
        job2_title: 'Ingeniero de software full-stack',
        job2_meta: 'Think Outside The Valley, en remoto, septiembre de 2023',
        job2_b1: 'Desarrolló la interfaz web y la lógica de cuentas del back-end, agregando datos complejos de usuarios y prospectos desde múltiples fuentes con SQL, Excel y Firebase, garantizando exactitud, coherencia y documentación.',
        job2_b2: 'Analizó conjuntos de datos para identificar tendencias, patrones e información de negocio, elaborando informes de rendimiento centrados en KPI y apoyando decisiones puntuales.',
        job2_b3: 'Colaboró con equipos de negocio, producto y tecnología para traducir requisitos de datos en análisis claros y presentar conclusiones accionables a las partes interesadas.',
        job3_title: 'Consultor, ingeniero full-stack',
        job3_meta: 'Cube Seed, Columbus, julio de 2022',
        job3_b1: 'Diseñó y desplegó una arquitectura de microservicios escalable con Node.js y AWS, reduciendo la latencia de la aplicación en un 35 %.',
        edu1_title: 'Meta Elevate, desarrollo full-stack',
        edu1_meta: 'Coursera, diciembre de 2022',
        edu1_summary: 'Desarrollo back-end, diseño de API, CI/CD, gestión de bases de datos y práctica Agile.',
        certs_title: 'Certificaciones',
        cert_meta: 'React, JavaScript, Python, desarrollo front-end y back-end',
        cert_google: 'Ciberseguridad, IA y aprendizaje automático',
        cert_linkedin: 'AWS',
        p1_desc: 'Un lenguaje de programación compilado, diseñado desde cero para el aprendizaje automático y la IA, que combina la velocidad de Rust con alta legibilidad: primitivas orientadas a IA, herramientas sólidas y una sintaxis optimizada para bucles de entrenamiento de alto rendimiento.',
        p2_desc: 'Una interfaz de terminal para monitorizar la salud del sistema en tiempo real: un motor de puntuación convierte métricas de CPU, memoria, GPU, almacenamiento y batería en puntuaciones por componente, con mantenimiento automatizado de discos, archivos y caché.',
        p3_desc: 'Un script de consola que encuentra y limpia cachés en macOS.',
        back_top: 'volver arriba',
        copy_idle: 'copiar dirección', copied: 'copiado', copy_failed: 'error al copiar',
        theme_dark: 'oscuro', theme_light: 'claro',
        aria_sections: 'Secciones', aria_lang: 'Idioma',
        meta_desc: 'Desarrollador full-stack que crea aplicaciones web y móviles con React, TypeScript, Node.js y Python.'
    },
    fr: {
        skip: 'Aller au contenu',
        nav_about: 'à propos', nav_skills: 'compétences', nav_experience: 'expérience',
        nav_education: 'formation', nav_projects: 'projets',
        role: 'Développeur full-stack, je conçois des applications web et mobiles avec React, TypeScript, Node.js et Python.',
        about_p1: "Quatre ans d'expérience dans la conception et le développement d'applications web et mobiles évolutives et performantes.",
        about_p2: 'Front-end en React et React Native. Back-end en Node.js, Python et PHP. Infrastructure sur AWS, Azure et Google Cloud, avec Terraform et des pipelines CI/CD sous GitHub Actions.',
        skills_front: 'Front-end', skills_back: 'Back-end', skills_infra: 'Infrastructure',
        job1_title: 'Ingénieur data center',
        job1_meta: 'Amazon Web Services, Columbus, janvier 2026',
        job1_b1: 'Travail pratique sur les serveurs et le matériel de data center : installation, supervision et maintenance pour garantir la fiabilité et la disponibilité des systèmes.',
        job1_b2: "Dépannage du matériel et de l'infrastructure : diagnostic des pannes, documentation des résolutions et escalade des incidents complexes conformément aux procédures opérationnelles d'AWS.",
        job2_title: 'Ingénieur logiciel full-stack',
        job2_meta: 'Think Outside The Valley, à distance, septembre 2023',
        job2_b1: "Développement de l'interface web et de la logique de comptes côté serveur, avec agrégation de données complexes d'utilisateurs et de prospects depuis plusieurs sources via SQL, Excel et Firebase, en garantissant exactitude, cohérence et documentation.",
        job2_b2: "Analyse de jeux de données pour dégager tendances, motifs et enseignements métier, avec production de rapports de performance axés KPI et appui à la prise de décision ponctuelle.",
        job2_b3: 'Collaboration avec les équipes métier, produit et techniques pour traduire les besoins en données en analyses claires et présenter des conclusions exploitables aux parties prenantes.',
        job3_title: 'Consultant, ingénieur full-stack',
        job3_meta: 'Cube Seed, Columbus, juillet 2022',
        job3_b1: "Conception et déploiement d'une architecture de microservices évolutive avec Node.js et AWS, réduisant la latence de l'application de 35 %.",
        edu1_title: 'Meta Elevate, développement full-stack',
        edu1_meta: 'Coursera, décembre 2022',
        edu1_summary: "Développement back-end, conception d'API, CI/CD, gestion de bases de données et pratique Agile.",
        certs_title: 'Certifications',
        cert_meta: 'React, JavaScript, Python, développement front-end et back-end',
        cert_google: 'Cybersécurité, IA et apprentissage automatique',
        cert_linkedin: 'AWS',
        p1_desc: "Un langage de programmation compilé, conçu de zéro pour l'apprentissage automatique et l'IA, qui allie la vitesse d'exécution de Rust à une grande lisibilité : primitives orientées IA, outillage solide et syntaxe optimisée pour les boucles d'entraînement haute performance.",
        p2_desc: "Une interface de terminal pour surveiller l'état du système en temps réel : un moteur de notation convertit les métriques CPU, mémoire, GPU, stockage et batterie en scores par composant, avec maintenance automatisée des disques, fichiers et caches.",
        p3_desc: 'Un script de console qui détecte et vide les caches sous macOS.',
        back_top: 'haut de page',
        copy_idle: "copier l'adresse", copied: 'copié', copy_failed: 'échec de la copie',
        theme_dark: 'sombre', theme_light: 'clair',
        aria_sections: 'Sections', aria_lang: 'Langue',
        meta_desc: 'Développeur full-stack : applications web et mobiles avec React, TypeScript, Node.js et Python.'
    },
    ar: {
        skip: 'تخطّ إلى المحتوى',
        nav_about: 'نبذة', nav_skills: 'المهارات', nav_experience: 'الخبرة',
        nav_education: 'التعليم', nav_projects: 'المشاريع',
        role: 'مطوّر برمجيات متكامل يبني تطبيقات ويب وجوّال باستخدام React وTypeScript وNode.js وPython.',
        about_p1: 'أربع سنوات من الخبرة في تصميم وبناء تطبيقات ويب وجوّال عالية الأداء وقابلة للتوسّع.',
        about_p2: 'الواجهات الأمامية بـReact وReact Native. الأنظمة الخلفية بـNode.js وPython وPHP. البنية التحتية على AWS وAzure وGoogle Cloud، مع Terraform وخطوط CI/CD في GitHub Actions.',
        skills_front: 'الواجهات الأمامية', skills_back: 'الأنظمة الخلفية', skills_infra: 'البنية التحتية',
        job1_title: 'مهندس مركز بيانات',
        job1_meta: 'Amazon Web Services، كولومبوس، يناير 2026',
        job1_b1: 'أعمال عملية على الخوادم وعتاد مركز البيانات، تشمل التركيب والمراقبة والصيانة لضمان موثوقية الأنظمة واستمرارية عملها.',
        job1_b2: 'استكشاف أعطال العتاد والبنية التحتية وإصلاحها: تشخيص الأعطال وتوثيق الحلول وتصعيد الحالات المعقّدة وفق إجراءات التشغيل في AWS.',
        job2_title: 'مهندس برمجيات متكامل',
        job2_meta: 'Think Outside The Valley، عن بُعد، سبتمبر 2023',
        job2_b1: 'تطوير واجهة الويب ومنطق الحسابات في الخلفية، مع تجميع بيانات معقّدة للمستخدمين والعملاء المحتملين من مصادر متعددة عبر SQL وExcel وFirebase، وضمان الدقة والاتساق والتوثيق.',
        job2_b2: 'تحليل مجموعات البيانات لاستخلاص الاتجاهات والأنماط ورؤى الأعمال، وإعداد تقارير أداء تركّز على مؤشرات الأداء الرئيسية ودعم القرارات الطارئة.',
        job2_b3: 'التعاون مع فرق الأعمال والمنتج والتقنية لترجمة متطلبات البيانات إلى تحليلات واضحة وعرض خلاصات قابلة للتنفيذ على أصحاب المصلحة.',
        job3_title: 'استشاري، مهندس برمجيات متكامل',
        job3_meta: 'Cube Seed، كولومبوس، يوليو 2022',
        job3_b1: 'تصميم ونشر بنية خدمات مصغّرة قابلة للتوسّع باستخدام Node.js وAWS، ما خفّض زمن استجابة التطبيق بنسبة 35%.',
        edu1_title: 'Meta Elevate، تطوير برمجيات متكامل',
        edu1_meta: 'Coursera، ديسمبر 2022',
        edu1_summary: 'تطوير الأنظمة الخلفية، تصميم واجهات API، CI/CD، إدارة قواعد البيانات، ومنهجية أجايل.',
        certs_title: 'الشهادات',
        cert_meta: 'React وJavaScript وPython وتطوير الواجهات الأمامية والخلفية',
        cert_google: 'الأمن السيبراني والذكاء الاصطناعي وتعلّم الآلة',
        cert_linkedin: 'AWS',
        p1_desc: 'لغة برمجة مُصرَّفة صُمّمت من الصفر لتعلّم الآلة والذكاء الاصطناعي، تجمع بين سرعة Rust وسهولة القراءة: أساسيات موجّهة للذكاء الاصطناعي وأدوات متينة وصياغة محسّنة لحلقات التدريب عالية الأداء.',
        p2_desc: 'واجهة طرفية لمراقبة صحة النظام لحظيًا: محرّك تقييم يحوّل قياسات المعالج والذاكرة وبطاقة الرسوميات والتخزين والبطارية إلى درجات لكل مكوّن، مع صيانة آلية لفحص الأقراص وإصلاح الملفات وتنظيف الذاكرة المؤقتة.',
        p3_desc: 'سكربت طرفية يعثر على الذواكر المؤقتة في macOS وينظّفها.',
        back_top: 'العودة إلى الأعلى',
        copy_idle: 'نسخ العنوان', copied: 'تم النسخ', copy_failed: 'تعذّر النسخ',
        theme_dark: 'داكن', theme_light: 'فاتح',
        aria_sections: 'الأقسام', aria_lang: 'اللغة',
        meta_desc: 'مطوّر برمجيات متكامل يبني تطبيقات ويب وجوّال باستخدام React وTypeScript وNode.js وPython.'
    },
    zh: {
        skip: '跳转到正文',
        nav_about: '关于', nav_skills: '技能', nav_experience: '经历',
        nav_education: '教育', nav_projects: '项目',
        role: '全栈开发者，使用 React、TypeScript、Node.js 和 Python 构建 Web 与移动应用。',
        about_p1: '四年经验，专注于设计与构建可扩展的高性能 Web 与移动应用。',
        about_p2: '前端使用 React 与 React Native；后端使用 Node.js、Python 与 PHP；基础设施基于 AWS、Azure 与 Google Cloud，配合 Terraform 与 GitHub Actions 的 CI/CD 流水线。',
        skills_front: '前端', skills_back: '后端', skills_infra: '基础设施',
        job1_title: '数据中心工程师',
        job1_meta: 'Amazon Web Services，哥伦布，2026 年 1 月',
        job1_b1: '负责服务器与数据中心硬件的实操工作，包括安装、监控与维护，保障系统的可靠性与正常运行时间。',
        job1_b2: '排查硬件与基础设施故障：诊断故障、记录解决方案，并按照 AWS 运维流程上报复杂问题。',
        job2_title: '全栈软件工程师',
        job2_meta: 'Think Outside The Valley，远程，2023 年 9 月',
        job2_b1: '开发客户端 Web 界面与后端账户逻辑，通过 SQL、Excel 与 Firebase 汇聚多来源的用户与潜在客户数据，确保数据准确、一致且有完善文档。',
        job2_b2: '分析数据集以发现趋势、模式与业务洞察，产出以 KPI 为核心的绩效报告，支持临时决策。',
        job2_b3: '与业务、产品和技术团队协作，将数据需求转化为清晰的分析，并向相关方呈现可执行的结论。',
        job3_title: '顾问，全栈工程师',
        job3_meta: 'Cube Seed，哥伦布，2022 年 7 月',
        job3_b1: '使用 Node.js 与 AWS 设计并部署可扩展的微服务架构，将应用延迟降低了 35%。',
        edu1_title: 'Meta Elevate，全栈开发',
        edu1_meta: 'Coursera，2022 年 12 月',
        edu1_summary: '后端开发、API 设计、CI/CD、数据库管理与敏捷实践。',
        certs_title: '证书',
        cert_meta: 'React、JavaScript、Python，前端与后端开发',
        cert_google: '网络安全、人工智能与机器学习',
        cert_linkedin: 'AWS',
        p1_desc: '一门为机器学习与 AI 从零打造的编译型编程语言，兼具 Rust 的执行速度与高可读性：面向 AI 的原语、扎实的工具链，以及为高性能训练循环优化的语法。',
        p2_desc: '一个实时监控系统健康状况的终端界面：自研评分引擎将 CPU、内存、GPU、存储与电池指标转化为各组件的健康评分，并内置磁盘检查、文件修复与缓存清理等自动维护。',
        p3_desc: '一个在 macOS 上查找并清理缓存的命令行脚本。',
        back_top: '回到顶部',
        copy_idle: '复制地址', copied: '已复制', copy_failed: '复制失败',
        theme_dark: '深色', theme_light: '浅色',
        aria_sections: '栏目', aria_lang: '语言',
        meta_desc: '全栈开发者，使用 React、TypeScript、Node.js 和 Python 构建 Web 与移动应用。'
    },
    hi: {
        skip: 'सीधे सामग्री पर जाएँ',
        nav_about: 'परिचय', nav_skills: 'कौशल', nav_experience: 'अनुभव',
        nav_education: 'शिक्षा', nav_projects: 'प्रोजेक्ट',
        role: 'फ़ुल-स्टैक डेवलपर, React, TypeScript, Node.js और Python से वेब और मोबाइल ऐप्लिकेशन बनाता हूँ।',
        about_p1: 'स्केलेबल और उच्च-प्रदर्शन वेब व मोबाइल ऐप्लिकेशन डिज़ाइन और निर्माण का चार वर्षों का अनुभव।',
        about_p2: 'फ़्रंट-एंड React और React Native में। बैक-एंड Node.js, Python और PHP में। इन्फ्रास्ट्रक्चर AWS, Azure और Google Cloud पर, साथ में Terraform और GitHub Actions की CI/CD पाइपलाइनें।',
        skills_front: 'फ़्रंट-एंड', skills_back: 'बैक-एंड', skills_infra: 'इन्फ्रास्ट्रक्चर',
        job1_title: 'डेटा सेंटर इंजीनियर',
        job1_meta: 'Amazon Web Services, कोलंबस, जनवरी 2026',
        job1_b1: 'सर्वर और डेटा सेंटर हार्डवेयर पर व्यावहारिक कार्य: इंस्टॉलेशन, निगरानी और रखरखाव, ताकि सिस्टम की विश्वसनीयता और अपटाइम सुनिश्चित रहे।',
        job1_b2: 'हार्डवेयर और इन्फ्रास्ट्रक्चर की समस्याओं का निवारण: खराबियों की पहचान, समाधानों का दस्तावेज़ीकरण, और AWS की परिचालन प्रक्रियाओं के अनुसार जटिल मामलों का एस्केलेशन।',
        job2_title: 'फ़ुल-स्टैक सॉफ़्टवेयर इंजीनियर',
        job2_meta: 'Think Outside The Valley, रिमोट, सितंबर 2023',
        job2_b1: 'क्लाइंट-साइड वेब UI और बैक-एंड खाता लॉजिक विकसित किया; SQL, Excel और Firebase के ज़रिए कई स्रोतों से जटिल उपयोगकर्ता व संभावित-ग्राहक डेटा एकत्र किया, और सटीकता, एकरूपता व दस्तावेज़ीकरण सुनिश्चित किया।',
        job2_b2: 'रुझान, पैटर्न और व्यावसायिक अंतर्दृष्टि पहचानने के लिए डेटासेट का विश्लेषण; KPI-केंद्रित प्रदर्शन रिपोर्टें बनाईं और तात्कालिक निर्णयों में सहयोग दिया।',
        job2_b3: 'डेटा आवश्यकताओं को स्पष्ट विश्लेषणों में बदलने और हितधारकों के सामने कार्रवाई-योग्य निष्कर्ष रखने के लिए व्यवसाय, प्रोडक्ट और तकनीकी टीमों के साथ काम किया।',
        job3_title: 'कंसल्टेंट, फ़ुल-स्टैक इंजीनियर',
        job3_meta: 'Cube Seed, कोलंबस, जुलाई 2022',
        job3_b1: 'Node.js और AWS से स्केलेबल माइक्रोसर्विस आर्किटेक्चर डिज़ाइन और तैनात किया, जिससे ऐप्लिकेशन की लेटेंसी 35% घटी।',
        edu1_title: 'Meta Elevate, फ़ुल-स्टैक डेवलपमेंट',
        edu1_meta: 'Coursera, दिसंबर 2022',
        edu1_summary: 'बैक-एंड डेवलपमेंट, API डिज़ाइन, CI/CD, डेटाबेस प्रबंधन और एजाइल अभ्यास।',
        certs_title: 'प्रमाणपत्र',
        cert_meta: 'React, JavaScript, Python, फ़्रंट-एंड और बैक-एंड डेवलपमेंट',
        cert_google: 'साइबर सुरक्षा, AI और मशीन लर्निंग',
        cert_linkedin: 'AWS',
        p1_desc: 'मशीन लर्निंग और AI के लिए शून्य से बनाई गई एक कंपाइल्ड प्रोग्रामिंग भाषा, जो Rust की गति और उच्च पठनीयता को जोड़ती है: AI-प्रथम प्रिमिटिव, मज़बूत टूलिंग, और उच्च-प्रदर्शन ट्रेनिंग लूप के लिए अनुकूलित सिंटैक्स।',
        p2_desc: 'सिस्टम की सेहत की रियल-टाइम निगरानी के लिए एक टर्मिनल इंटरफ़ेस: एक स्कोरिंग इंजन CPU, मेमोरी, GPU, स्टोरेज और बैटरी के मेट्रिक को हर घटक के स्कोर में बदलता है, साथ में डिस्क जाँच, फ़ाइल मरम्मत और कैश सफ़ाई का स्वचालित रखरखाव।',
        p3_desc: 'एक कंसोल स्क्रिप्ट जो macOS पर कैश खोजकर साफ़ करती है।',
        back_top: 'ऊपर जाएँ',
        copy_idle: 'पता कॉपी करें', copied: 'कॉपी हो गया', copy_failed: 'कॉपी नहीं हो सका',
        theme_dark: 'डार्क', theme_light: 'लाइट',
        aria_sections: 'अनुभाग', aria_lang: 'भाषा',
        meta_desc: 'फ़ुल-स्टैक डेवलपर: React, TypeScript, Node.js और Python से वेब और मोबाइल ऐप्लिकेशन।'
    }
};

const RTL_LANGS = new Set(['ar']);
let currentLang = 'en';

function i18nGet(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || '';
}

function setLang(code) {
    if (!I18N[code]) code = 'en';
    currentLang = code;
    document.documentElement.lang = code;
    document.documentElement.dir = RTL_LANGS.has(code) ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const text = i18nGet(el.dataset.i18n);
        if (text) el.textContent = text;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
        const text = i18nGet(el.dataset.i18nAria);
        if (text) el.setAttribute('aria-label', text);
    });
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', i18nGet('meta_desc'));
    document.querySelectorAll('.lang-select').forEach((sel) => { sel.value = code; });
    try { localStorage.setItem('lang', code); } catch {}
}

window.i18nGet = i18nGet;
window.setLang = setLang;

// Apply the saved language (the pre-paint snippet already set lang/dir).
(() => {
    let saved = 'en';
    try { saved = localStorage.getItem('lang') || 'en'; } catch {}
    setLang(saved);
})();
