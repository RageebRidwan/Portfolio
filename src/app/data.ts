export const data = {
  name: "Rageeb Mohammad Ridwan",
  role: "Full-Stack Developer",
  roles: [
    "Full-Stack Developer",
    "Backend Engineer",
    "IEEE Researcher",
    "Open to Remote Roles",
  ],
  email: "rageeb.dev@gmail.com",
  phone: "+880 1779176098",
  linkedin: "https://www.linkedin.com/in/rageeb-md-ridwan/",
  github: "https://github.com/RageebRidwan",
  cv: "/cv.pdf",
  summary:
    "Full-stack engineer with expertise in TypeScript, React, and Node.js. Published IEEE researcher in deep learning for medical imaging. Passionate about building production-grade applications and solving real problems.",

  skills: [
    {
      category: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux Toolkit",
        "shadcn/ui",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "Django",
        "Django REST Framework",
        "RESTful APIs",
      ],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB", "Prisma ORM", "Mongoose"],
    },
    {
      category: "AI / ML",
      items: ["LangChain", "FAISS", "TensorFlow", "Keras", "RAG Systems"],
    },
    {
      category: "Tools",
      items: [
        "Git",
        "GitHub",
        "Postman",
        "Vercel",
        "Render",
        "Cloudinary",
        "Stripe API",
      ],
    },
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML/CSS"],
    },
  ],

  projects: [
    {
      name: "HypeHouse",
      description:
        "Full-stack event management platform with 25+ RESTful API endpoints, 3 user roles, Stripe payment processing, and real-time participant updates.",
      tags: [
        "TypeScript",
        "Next.js 15",
        "Express.js",
        "PostgreSQL",
        "Prisma",
        "Redux Toolkit",
        "Stripe",
      ],
      live: "https://hypehouse.vercel.app/",
      github: "https://github.com/RageebRidwan/HypeHouse-Event-Management-Sys", // update this
      highlights: [
        "25+ REST endpoints with JWT auth & role-based access control",
        "Stripe payment integration with secure checkout & payment intent handling",
        "Admin dashboard with analytics, host verification & user suspension",
      ],
    },
    {
      name: "Rydr",
      description:
        "Production-grade ride-sharing platform with geospatial driver queries, automated fare calculation, and a feature-rich driver/admin dashboard.",
      tags: [
        "TypeScript",
        "Express.js",
        "React",
        "MongoDB",
        "Redux Toolkit",
        "Tailwind CSS",
      ],
      live: "https://rydr-ride-sharing-system.vercel.app/",
      github: "https://github.com/RageebRidwan/Rydr-Ride-Sharing-System",
      highlights: [
        "31 REST endpoints with MongoDB 2dsphere geospatial indexing for sub-5km driver queries",
        "70% reduction in redundant API calls via RTK Query caching",
        "14 core features including driver approval, rating system & cancellation management",
      ],
    },
    {
      name: "Car Mart",
      description:
        "Django-based web app for managing vehicle listings and purchases.",
      tags: ["Django", "Python", "SQLite", "Bootstrap CSS"],
      live: "https://car-mart.onrender.com/",
      github: "https://github.com/RageebRidwan/Car-Mart",
      highlights: [
        "Engineered a car marketplace featuring user authentication, profile management, and integrated feedback.",

        "Enhanced product discovery by implementing brand-specific filtering and optimized browsing views.",

        "Streamlined purchase workflows with persistent order history and transaction tracking.",
      ],
    },
    {
      name: "Multi-Source Intelligence Assistant",
      description:
        "RAG-based content analysis system with multi-source comparison, smart summaries, sentiment analysis, and conversational memory.",
      tags: [
        "Python",
        "LangChain",
        "FAISS",
        "Ollama",
        "Streamlit",
        "BeautifulSoup",
      ],
      live: null,
      github: "https://github.com/RageebRidwan/News-Intelligence-Assistant",
      highlights: [
        "FAISS vector store with Ollama embeddings for semantic search across multiple web sources",
        "9 tone/length variations for smart summaries with automatic citation tracking",
        "Production-ready Streamlit interface with real-time web scraping",
      ],
    },
  ],

  research: {
    title:
      "Comparative Study of Deep Learning Models for Autism Diagnosis in Children Using Image Analysis",
    institution: "BRAC University — School of Data and Sciences",
    period: "October 2023 – June 2024",
    grade: "A- (3.7/4.0)",
    publication: "IEEE Xplore Digital Library",
    publicationUrl: "https://ieeexplore.ieee.org/document/10914940",
    models: ["VGG16", "VGG19", "EfficientNetB4", "MobileNet"],
    summary:
      "Conducted comparative analysis of 4 state-of-the-art deep learning architectures for automated detection of Autism Spectrum Disorder in children through facial pattern recognition using transfer learning on pretrained ImageNet models.",
  },

  experience: [
    {
      role: "Backend Developer Intern",
      company: "Lexaeon",
      location: "New York, United States (Remote)",
      period: "2024",
      highlights: [
        "Contributed to a Visual Regression Testing tool using Django and Python for webpage change detection",
        "Designed RESTful APIs with Django REST Framework using test-driven development methodology",
        "Collaborated with frontend team for seamless UI integration in an international remote environment",
      ],
    },
  ],

  education: [
    {
      degree: "Master of Engineering in Computer Science and Engineering",
      institution: "BRAC University",
      period: "May 2026 - Ongoing",
      grade: null,
      status: "ongoing",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "BRAC University",
      period: "January 2020 – June 2024",
      grade: null,
      status: "completed",
    },
  ],
};
