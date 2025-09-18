export default {
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
