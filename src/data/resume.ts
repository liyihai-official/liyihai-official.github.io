export const heroCtas = (lang: 'en' | 'zh') => [
  { label: lang === 'en' ? 'Download CV (PDF)' : '下载简历（PDF）', href: '/cv.pdf', primary: true },
  { label: lang === 'en' ? 'Email me' : '给我发邮件', href: 'mailto:you@example.com' }
];

export const experiences = [
  {
    role: "HPC Research Engineer",
    company: "Trinity College Dublin",
    period: "2023 — 2025",
    location: "Dublin, Ireland",
    bullets: [
      "Implemented hybrid MPI/OpenMP PDE solvers with domain decomposition.",
      "Integrated physics-informed loss (PINN) using LibTorch; accelerated training on multi-GPU."
    ]
  },
  {
    role: "Teaching Assistant",
    company: "TCD",
    period: "2024 — 2025",
    location: "Dublin, Ireland",
    bullets: [
      "Led lab sessions for C++ and parallel programming; designed reproducible HPC exercises."
    ]
  }
];

export const skills = [
  "C/C++20", "Python", "CUDA", "MPI", "OpenMP", "LibTorch", "PyTorch",
  "CMake", "Slurm", "HDF5", "NumPy", "MATLAB"
];
