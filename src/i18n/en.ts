export default {
  hero: { eyebrow: "Research · Computing · Engineering" },
  ui: { home: "Home", navigation: "Main navigation", theme: "Toggle dark mode", menu: "Toggle menu", all: "All projects", source: "Source code", visit: "View project", unavailable: "Project overview", results: "Projects shown", download: "Download CV", viewAll: "View all projects", contactTitle: "Let's work on something meaningful.", contactBody: "For research, opportunities, or a conversation about computing.", back: "Back to blog", toc: "On this page" },
  title: "CV",
  name: "LI Yihai",
  bio: "Hi! I'm focusing on parallel & distributed computing, GPU acceleration, and physics-informed PDE solvers. Previously a TA for Engineering Mathematics and Discrete Mathematics at Trinity College Dublin.",
  avatar: "/images/avatar.png",
  tagline: "High-Performance Computing & Scientific ML",
  open_to: "Open to PhD & Roles",
  nav: { experience: "Experience", projects: "Projects", skills: "Skills", blog: "Blog", contact: "Contact", hire: "Hire me" },
  sections: {
    experience: { title: "Experience", subtitle: "Where I've built and shipped." },
    projects: { title: "Selected Projects", subtitle: "A few favorites and proofs of work." },
    skills: { title: "Skills", subtitle: "Tooling I use daily." },
    contact: { title: "Get in touch", subtitle: "I read every email.", cta: "Email me" },
    blog: { title: "Blog", subtitle: "Notes, write-ups, and progress logs." }
  }
} as const;
