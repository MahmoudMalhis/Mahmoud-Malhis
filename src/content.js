// All site text lives here, in English and Arabic. Components read from this file only.
// The interior studio's name is a placeholder brand: change STUDIO_NAME in one place.

export const STUDIO_NAME = { en: "Lumi Interiors", ar: "لومي للتصميم الداخلي" };

export const links = {
  cv: "Mahmoud-Malhis-CV.pdf",
  email: "mahmoudmalhis2015@gmail.com",
  whatsapp: "https://wa.me/970567330331",
  linkedin: "https://www.linkedin.com/in/mahmoud-malhis-a3348a164",
  github: "https://github.com/MahmoudMalhis",
  irtaq: "https://irtaq.net",
  sandy: "https://sandy-macrane-old.pages.dev",
};

export const content = {
  en: {
    dir: "ltr",
    langSwitch: "عربي",
    nav: { work: "Work", skills: "Skills", contact: "Contact" },
    hero: {
      eyebrow: "Nablus, Palestine · Open to work",
      name: "Mahmoud Malhis",
      title: "Web developer who builds and runs real platforms",
      lead: "Founder of Irtaq. I work across the stack with React, ASP.NET Core, Node.js and Docker, and I ship to real users.",
      cv: "Download CV",
      contact: "Contact me",
      avatarAlt: "Cartoon avatar of Mahmoud Malhis",
    },
    stats: [
      { value: "2,500+", label: "Irtaq users" },
      { value: "10+", label: "Memorization centers" },
      { value: "Nablus Awqaf", label: "Officially adopted by" },
    ],
    featured: {
      label: "Featured case study",
      name: "Irtaq — Quran memorization platform",
      role: "Founder & Lead Developer · 2025 – Present",
      problem: {
        title: "The problem",
        text: "Quran memorization centers tracked attendance, memorization and exams on paper and in chat groups. Managers had no clear view of each student's progress, and parents had none.",
      },
      built: {
        title: "What I built",
        items: [
          "A multi-tenant platform where each center manages its circles, teachers, students and parents.",
          "Dashboards for each role: platform admin, center manager, supervisor, teacher, student and parent.",
          "Attendance, exams and grading, memorization plans, and reports with charts.",
          "A certificate designer with QR verification.",
          "Arabic and English (RTL), installable PWA, real-time updates with SignalR, and push notifications.",
        ],
      },
      results: {
        title: "Results",
        items: [
          "2,500+ users across 10+ centers in the Arab world, including Al-Bukhari Center in Nablus.",
          "Officially adopted by the Nablus Directorate of Awqaf for rollout to its Quran circles.",
        ],
      },
      stack: ["React 19", "Vite", "Tailwind CSS", "TanStack Query", "ASP.NET Core", "SQL Server", "SignalR", "Cloudflare Workers"],
      visit: "Visit irtaq.net",
      shots: [
        { src: "irtaq-admin.jpg", alt: "Center manager dashboard in Irtaq" },
        { src: "irtaq-student.jpg", alt: "Student memorization map in Irtaq" },
        { src: "irtaq-teacher.jpg", alt: "Teacher's circles page in Irtaq" },
        { src: "irtaq-student-mobile.jpg", alt: "Irtaq student view on a phone", mobile: true },
      ],
    },
    projects: {
      label: "More projects",
      items: [
        {
          key: "sandy",
          name: "Sandy Macramé",
          text: "Catalog website for a handmade macramé business, with an admin panel, an AI chat assistant and a self-hosted API.",
          stack: ["React", "Express", "MySQL", "Docker", "Gemini API"],
          image: "sandy-gallery.jpg",
          imageAlt: "Sandy Macramé gallery page",
          link: "sandy",
          linkText: "Live site",
        },
        {
          key: "studio",
          name: "studio",
          text: "Portfolio website for an interior design studio, with an Arabic/English gallery by room and style, and an admin panel.",
          stack: ["React", "Tailwind CSS", "Express", "MongoDB", "i18n"],
          image: "studio-living.jpg",
          imageAlt: "Living room design from the studio gallery",
          link: null,
          linkText: "Client project",
        },
      ],
    },
    skills: {
      label: "Skills",
      groups: [
        { name: "Frontend", items: ["React", "JavaScript", "Tailwind CSS", "Material UI", "TanStack Query", "React Hook Form", "Zod", "i18n / RTL", "PWA"] },
        { name: "Backend and databases", items: ["ASP.NET Core", "Node.js / Express", "REST APIs", "SignalR", "JWT", "SQL Server", "MySQL", "MongoDB", "Firebase"] },
        { name: "Deployment and tools", items: ["Git and GitHub", "Docker", "Linux", "Cloudflare Workers, Pages and Tunnel"] },
        { name: "AI", items: ["AI-assisted development (Claude Code)", "LLM API integration (Gemini)"] },
      ],
    },
    contact: {
      label: "Contact",
      title: "Let's build something useful",
      text: "The fastest way to reach me is WhatsApp or email.",
      whatsapp: "WhatsApp",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: "© Mahmoud Malhis",
  },

  ar: {
    dir: "rtl",
    langSwitch: "English",
    nav: { work: "أعمالي", skills: "المهارات", contact: "تواصل" },
    hero: {
      eyebrow: "نابلس، فلسطين · متاح للعمل",
      name: "محمود ملحس",
      title: "مطوّر ويب يبني منصات حقيقية ويشغّلها",
      lead: "مؤسس منصة ارتق. أبني الواجهة بـ React، والخادم بـ ASP.NET Core أو Node.js، وأنشر بـ Docker، وأطلق أعمالي لمستخدمين حقيقيين.",
      cv: "تحميل السيرة الذاتية",
      contact: "تواصل معي",
      avatarAlt: "صورة كرتونية لمحمود ملحس",
    },
    stats: [
      { value: "+2,500", label: "مستخدم في ارتق" },
      { value: "+10", label: "مراكز تحفيظ" },
      { value: "أوقاف نابلس", label: "معتمدة رسمياً من" },
    ],
    featured: {
      label: "مشروع مميز",
      name: "ارتق — منصة تحفيظ القرآن الكريم",
      role: "المؤسس والمطوّر الرئيسي · 2025 – الآن",
      problem: {
        title: "المشكلة",
        text: "كانت مراكز التحفيظ تتابع الحضور والحفظ والاختبارات على الورق وفي مجموعات المحادثة. لم يكن للإدارة تصوّر واضح لتقدّم كل طالب، ولم يكن لأولياء الأمور أي تصوّر.",
      },
      built: {
        title: "ما بنيته",
        items: [
          "منصة متعددة المراكز، يدير فيها كل مركز حلقاته ومحفّظيه وطلابه وأولياء الأمور.",
          "لوحة لكل دور: مدير المنصة، ومدير المركز، والمشرف، والمحفّظ، والطالب، وولي الأمر.",
          "الحضور، والاختبارات والعلامات، وخطط الحفظ، وتقارير برسوم بيانية.",
          "مصمّم شهادات مع التحقق برمز QR.",
          "واجهة عربية وإنجليزية، وتطبيق قابل للتثبيت (PWA)، وتحديثات فورية عبر SignalR، وإشعارات.",
        ],
      },
      results: {
        title: "النتائج",
        items: [
          "أكثر من 2,500 مستخدم في أكثر من 10 مراكز في الوطن العربي، منها مركز البخاري في نابلس.",
          "اعتمدتها مديرية أوقاف نابلس رسمياً لتعميمها على حلقات القرآن التابعة لها.",
        ],
      },
      stack: ["React 19", "Vite", "Tailwind CSS", "TanStack Query", "ASP.NET Core", "SQL Server", "SignalR", "Cloudflare Workers"],
      visit: "زيارة irtaq.net",
      shots: [
        { src: "irtaq-admin.jpg", alt: "لوحة مدير المركز في ارتق" },
        { src: "irtaq-student.jpg", alt: "خريطة الحفظ للطالب في ارتق" },
        { src: "irtaq-teacher.jpg", alt: "صفحة حلقات المحفّظ في ارتق" },
        { src: "irtaq-student-mobile.jpg", alt: "واجهة الطالب في ارتق على الجوال", mobile: true },
      ],
    },
    projects: {
      label: "مشاريع أخرى",
      items: [
        {
          key: "sandy",
          name: "ساندي مكرمية",
          text: "موقع لعرض منتجات مشروع مكرمية يدوية، مع لوحة تحكم ومساعد ذكي للمحادثة وخادم مستضاف ذاتياً.",
          stack: ["React", "Express", "MySQL", "Docker", "Gemini API"],
          image: "sandy-gallery.jpg",
          imageAlt: "صفحة المعرض في موقع ساندي مكرمية",
          link: "sandy",
          linkText: "الموقع",
        },
        {
          key: "studio",
          name: "studio",
          text: "موقع لمكتب تصميم داخلي، فيه معرض بالعربية والإنجليزية مقسّم حسب الغرف والأنماط، ولوحة تحكم.",
          stack: ["React", "Tailwind CSS", "Express", "MongoDB", "i18n"],
          image: "studio-living.jpg",
          imageAlt: "تصميم غرفة جلوس من معرض المكتب",
          link: null,
          linkText: "مشروع لعميل",
        },
      ],
    },
    skills: {
      label: "المهارات",
      groups: [
        { name: "الواجهة الأمامية", items: ["React", "JavaScript", "Tailwind CSS", "Material UI", "TanStack Query", "React Hook Form", "Zod", "i18n / RTL", "PWA"] },
        { name: "الخادم وقواعد البيانات", items: ["ASP.NET Core", "Node.js / Express", "REST APIs", "SignalR", "JWT", "SQL Server", "MySQL", "MongoDB", "Firebase"] },
        { name: "النشر والأدوات", items: ["Git و GitHub", "Docker", "Linux", "Cloudflare Workers وPages وTunnel"] },
        { name: "الذكاء الاصطناعي", items: ["التطوير بمساعدة الذكاء الاصطناعي (Claude Code)", "ربط واجهات نماذج اللغة (Gemini)"] },
      ],
    },
    contact: {
      label: "تواصل",
      title: "لنبنِ شيئاً مفيداً معاً",
      text: "أسرع طريقة للتواصل معي عبر واتساب أو البريد الإلكتروني.",
      whatsapp: "واتساب",
      email: "البريد الإلكتروني",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: "© محمود ملحس",
  },
};
