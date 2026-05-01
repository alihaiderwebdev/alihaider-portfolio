export const personal = {
  name: "Ali Haider",
  title: "React.js Developer",
  subtitle: "MERN Stack Developer",
  tagline: "Building Fast, Scalable & Responsive Web Applications",
  description:
    "React.js Developer focused on building scalable, responsive web applications using the MERN stack. I specialize in crafting clean, user-friendly frontends and integrating them with robust backends.",
  email: "alihaidersinfo@gmail.com",
  phone: "+92 304 825 8141",
  location: "Lahore, Pakistan",
  available: true,
  links: {
    github: "https://github.com/alihaiderwebdev",
    linkedin: "https://linkedin.com/in/alihaiderjs",
    portfolio: "https://alihaiderwebdev.github.io",
  },
};

export const stats = [
  { value: "2+", label: "Internships" },
  { value: "25+", label: "Bugs Resolved" },
  { value: "10+", label: "Pages Built" },
  { value: "12+", label: "API Endpoints" },
];

export const skills = [
  {
    category: "Frontend",
    icon: "⚛️",
    items: ["React.js", "JavaScript ES6+", "HTML5", "CSS3", "Bootstrap", "React Hooks", "Flexbox/Grid", "Responsive Design"],
  },
  {
    category: "Backend",
    icon: "🖥️",
    items: ["Node.js", "Express.js", "REST API Design", "JWT Authentication", "MVC Architecture", "RBAC"],
  },
  {
    category: "Database",
    icon: "🗄️",
    items: ["MongoDB", "Mongoose ODM", "Schema Design", "Query Optimization"],
  },
  {
    category: "Tools",
    icon: "🛠️",
    items: ["Git", "GitHub", "Postman", "Jira", "VS Code", "Sitecore", "npm", "Figma to Code"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Healthcare Appointment System",
    badge: "Featured Project",
    featured: true,
    description:
      "Multi-role healthcare platform with Patient, Doctor & Admin dashboards. Real-time appointment scheduling, patient record management, and secure role-based access control.",
    metrics: [
      { value: "3", label: "Role Dashboards" },
      { value: "12+", label: "API Endpoints" },
      { value: "0", label: "Auth Breaches" },
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs", "RBAC"],
    github: "https://github.com/alihaiderwebdev",
    live: "https://alihaiderwebdev.github.io",
    color: "#639922",
  },
  {
    id: 2,
    title: "Alura Reset",
    badge: "Live Production",
    featured: false,
    description:
      "Worked as React Developer in a cross-functional team. Converted Figma designs to pixel-perfect responsive React components. Resolved UI/UX issues ensuring cross-device consistency.",
    metrics: [
      { value: "Live", label: "Production" },
      { value: "Figma", label: "To Code" },
      { value: "Team", label: "Project" },
    ],
    stack: ["React.js", "Figma to Code", "CSS3", "Responsive Design", "Team Collaboration"],
    live: "https://www.alurareset.com",
    color: "#3B6D11",
  },
  {
    id: 3,
    title: "CMS Page Builder",
    badge: "Sitecore · React",
    featured: false,
    description:
      "Built 10+ responsive pages in Sitecore Page Builder with drag-and-drop layouts. Cut manual page-assembly time by ~40% enabling non-technical editors to publish independently.",
    metrics: [
      { value: "10+", label: "Pages Built" },
      { value: "40%", label: "Time Saved" },
      { value: "100%", label: "Cross-Device" },
    ],
    stack: ["React.js", "Sitecore", "Bootstrap", "Agile", "Jira"],
    color: "#27500A",
  },
];

export const experience = [
  {
    role: "Frontend Developer Intern",
    company: "7 Kings Code",
    location: "Lahore, Pakistan",
    period: "Jan 2026 – April 2026",
    type: "On-site",
    bullets: [
      "Built 10+ responsive pages in Sitecore Page Builder with React component architecture, cutting manual page-assembly time by ~40%.",
      "Implemented drag-and-drop dynamic layouts enabling non-technical editors to publish pages without developer intervention.",
      "Resolved 25+ UI/UX bugs via Jira in sprint cycles, achieving zero-defect handoffs with QA and 100% cross-device consistency.",
      "Collaborated in sprint reviews with senior developers and product leads in Agile delivery workflows.",
    ],
  },
  {
    role: "MERN Stack Developer Intern",
    company: "U Devs",
    location: "Remote",
    period: "Jan 2025 – April 2026",
    type: "Remote",
    bullets: [
      "Developed 5+ full-stack application modules (auth, CRUD, API integration) using the complete MERN stack.",
      "Delivered pixel-perfect, mobile-first UIs with React Hooks, Flexbox/Grid, and Bootstrap across all major browsers.",
      "Applied Git branching strategies and clean code standards across every deliverable.",
    ],
  },
];

export const education = [
  {
    degree: "BS English",
    institution: "University of Science & Technology, Lahore",
    year: "Graduated 2024",
  },
  {
    degree: "Full Stack Web Development",
    institution: "Isttaa Institute · Arfa Software Technology Park",
    year: "Aug 2025 – Feb 2026",
  },
];