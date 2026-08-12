export const personalInfo = {
  name: "SRAVYA DANNANA",

  title: "Full Stack Developer | AI & ML Student",

  tagline:
    "Passionate about building modern web applications and AI-powered solutions.",

  about:
    "I am a B.Tech Computer Science (AI & ML) student at KIET Group of Institutions, Kakinada. I enjoy developing web applications using Python, HTML, CSS, JavaScript, and FastAPI. I am continuously improving my Full Stack Development and AI skills through real-world projects and hackathons.",

  education: {
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering (AI & ML)",
    institution: "KIET Group of Institutions, Kakinada",
    graduation: "Expected Graduation: 2028",
    cgpa: "7.56",

    highlights: [
      "Artificial Intelligence & Machine Learning Student",
      "Interested in Full Stack Development",
      "Learning Generative AI and RAG Architecture",
      "Active participant in technical workshops and hackathons",
    ],
  },

  contact: {
    email: "sravyadannana.dev@gmail.com",
    phone: "+91 XXXXX XXXXX",
    location: "Kakinada, Andhra Pradesh, India",
    linkedin: "https://linkedin.com/in/sravya-dannana",
    github: "https://github.com/sravs-sravya10",
  },
};


export const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      {
        name: "Python",
        level: 85,
        icon: "FileCode",
        color: "from-yellow-400 to-yellow-600",
      },
      {
        name: "JavaScript",
        level: 70,
        icon: "Code2",
        color: "from-yellow-300 to-amber-500",
      },
    ],
  },

  {
    category: "Frontend",
    skills: [
      {
        name: "HTML",
        level: 90,
        icon: "Layout",
        color: "from-orange-500 to-red-500",
      },
      {
        name: "CSS",
        level: 85,
        icon: "Palette",
        color: "from-blue-500 to-indigo-600",
      },
    ],
  },

  {
    category: "Backend",
    skills: [
      {
        name: "FastAPI",
        level: 75,
        icon: "Server",
        color: "from-green-500 to-emerald-600",
      },
    ],
  },

  {
    category: "AI Technologies",
    skills: [
      {
        name: "RAG Architecture",
        level: 70,
        icon: "BrainCircuit",
        color: "from-cyan-400 to-purple-600",
      },
      {
        name: "Apify",
        level: 65,
        icon: "Bot",
        color: "from-green-400 to-teal-600",
      },
    ],
  },

  {
    category: "Tools",
    skills: [
      {
        name: "Git & GitHub",
        level: 80,
        icon: "GitBranch",
        color: "from-orange-500 to-red-600",
      },
      {
        name: "VS Code",
        level: 95,
        icon: "Terminal",
        color: "from-blue-500 to-cyan-600",
      },
      {
        name: "Postman",
        level: 75,
        icon: "Network",
        color: "from-orange-500 to-red-500",
      },
    ],
  },

  {
    category: "Soft Skills",
    skills: [
      {
        name: "Problem Solving",
        level: 90,
        icon: "Lightbulb",
        color: "from-yellow-400 to-orange-500",
      },
      {
        name: "Communication",
        level: 85,
        icon: "MessageSquare",
        color: "from-blue-400 to-indigo-500",
      },
      {
        name: "Teamwork",
        level: 90,
        icon: "Users",
        color: "from-teal-400 to-emerald-500",
      },
      {
        name: "Quick Learner",
        level: 95,
        icon: "Flame",
        color: "from-red-400 to-pink-600",
      },
    ],
  },
];


export const projectsData = [
  {
    id: "cieverse",
    title: "CIEverse",
    subtitle: "AI Powered Knowledge Assistant",
    category: "AI & ML",
    featured: true,

    description:
      "Developed an AI-powered knowledge assistant using Retrieval-Augmented Generation (RAG) with FastAPI. The application helps users search and retrieve information from documents efficiently.",

    details: {
      architecture:
        "FastAPI + RAG Architecture + Document Processing",

      keyFeatures: [
        "Document-based question answering",
        "FastAPI backend development",
        "Semantic search using RAG concepts",
        "Simple and user-friendly interface",
      ],

      impact:
        "Improved information retrieval and reduced manual document searching.",
    },

    technologies: [
      "Python",
      "FastAPI",
      "RAG Architecture",
      "Apify",
    ],

    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",

    github: "https://github.com/sravs-sravya10/CIEverse",

    liveDemo: "#",
  },

  {
    id: "environment-architect",

    title: "Habit Environment Kit",

    subtitle: "Habit Tracking Website",

    category: "Web Development",

    featured: true,

    description:
      "A responsive habit tracking website that helps users build positive habits and monitor their daily progress.",

    details: {
      architecture:
        "HTML + CSS + JavaScript",

      keyFeatures: [
        "Add and manage daily habits",
        "Responsive UI",
        "Local storage support",
        "Simple and clean dashboard",
      ],

      impact:
        "Helps users stay consistent with their daily routines.",
    },

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "GitHub",
    ],

    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",

    github:
      "https://github.com/reddikoushik16/environment-architect",

    liveDemo:
      "https://environment-architect.vercel.app/",
  },
];


export const certificationsData = [
  {
    title: "NVIDIA - AI & Generative AI",
    issuer: "NVIDIA",
    date: "2024",
    badgeColor: "from-green-500 to-emerald-700",
    iconName: "Cpu",
    description:
      "Completed certification in AI and Generative AI fundamentals.",
    image: "/certificates/NVIDIA_page_1.jpg",
  },

  {
    title: "Python Programming",
    issuer: "Infosys Springboard",
    date: "2024",
    badgeColor: "from-blue-500 to-indigo-600",
    iconName: "FileCode",
    description:
      "Completed Python programming certification.",
  },

  {
    title: "Web Development Internship",
    issuer: "CodSoft",
    date: "2024",
    badgeColor: "from-purple-500 to-pink-600",
    iconName: "Briefcase",
    description:
      "Completed Web Development Internship.",
    image: "/certificates/CodSoft_Certificate_page_1.jpg",
  },

  {
    title: "AI Skills Passport",
    issuer: "EY & Microsoft",
    date: "2024",
    badgeColor: "from-cyan-500 to-blue-600",
    iconName: "ShieldCheck",
    description:
      "Completed AI Skills Passport Program.",
    image: "/certificates/EY_AI_Skills_Passport.jpg",
  },

  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    date: "2024",
    badgeColor: "from-red-500 to-yellow-500",
    iconName: "Cloud",
    description:
      "Completed Google Cloud Generative AI course.",
    image: "/certificates/Google_Generative_AI.jpg",
  },
];


export const timelineData = [
  {
    year: "2024",
    title: "Started Learning Python",
    description:
      "Built a strong foundation in Python programming.",
    icon: "Code",
  },

  {
    year: "2024",
    title: "Frontend Development",
    description:
      "Learned HTML, CSS, and JavaScript to build responsive websites.",
    icon: "Layout",
  },

  {
    year: "2025",
    title: "Backend Development",
    description:
      "Started developing REST APIs using FastAPI.",
    icon: "Server",
  },

  {
    year: "2025",
    title: "AI Projects",
    description:
      "Worked on RAG Architecture and AI-powered applications.",
    icon: "BrainCircuit",
  },

  {
    year: "2026",
    title: "Hackathons & Projects",
    description:
      "Built real-world Full Stack and AI projects while participating in hackathons.",
    icon: "Sparkles",
  },
];


export const achievementsData = [
  {
    label: "Projects",
    count: 5,
    suffix: "+",
    icon: "CheckCircle2",
  },

  {
    label: "Certifications",
    count: 5,
    suffix: "+",
    icon: "Award",
  },

  {
    label: "Technologies",
    count: 9,
    suffix: "+",
    icon: "Boxes",
  },

  {
    label: "Hackathons",
    count: 2,
    suffix: "+",
    icon: "Trophy",
  },
];