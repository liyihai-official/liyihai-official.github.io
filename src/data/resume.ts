export const heroCtas = (lang: 'en' | 'zh') => [
  { label: lang === 'en' ? 'Download CV (PDF)' : '下载简历（PDF）', href: '/cv.pdf', primary: true },
  { label: lang === 'en' ? 'Email me' : '给我发邮件', href: 'mailto:liy35@tcd.ie' }
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
};

export type ExperienceGroup = {
  key: 'research' | 'internship' | 'teaching' | string;
  title: string;      // 已做 i18n
  items: Experience[];
};

export const experienceGroups = (lang: 'en' | 'zh'): ExperienceGroup[] => [
  {
    key: 'research',
    title: lang === 'en' ? 'Research Experience' : '科研经历',
    items: [
      {
        role: "Researcher",
        company: "Supervised by Prof. Pavlos Protopapas",
        period: "Jan. 2021 — Mar. 2021",
        location: "Remote Project",
        bullets: [
          "Acquired algorithms of machine learning specifically in CNNs accelerated by CUDA.",
          "Built Proxy model for CNNs’ evaluation based on Bootstrap algorithm in Python using Tensorflow 2.x.",
          "Utilized of Grad-CAM Map, Saliency Map to check the internal learning process in Python and Matlab.",
          "Drafted and typeset a comprehensive final report in Latex, including detailed performance graphs."
        ]
      },
      {
        role: "Undergraduate Researcher",
        company: "Shanxi University",
        period: "Nov. 2017 — Nov. 2018",
        location: "Taiyuan, China",
        bullets: [
          "Authored 1-Good-Neighbor Diagnosability of Unidirectional K-ary N-Cubes under the PMC Model in Computer Engineering and Applications.",
          "Employed combinatorial proof techniques using mathematical induction and constructive labeling to derive the diagnosability bound for K-ary N-Cubes.",
          "Coordinated a 5-member team over a year, producing one journal submission on schedule.",
          "Cultivated advanced skills in formal proof techniques, MATLAB coding, and team project management.",
          "Formally derived 1-good-neighbor diagnosability bound $k(n-1)$, and $kn-1$."
        ]
      }
    ]
  },
  {
    key: 'internship',
    title: lang === 'en' ? 'Internship Experience' : '实习经历',
    items: [
      {
        role: "Software Engineer Intern",
        company: "Oracle",
        period: "Winter 2018",
        location: "Peking, China",
        bullets: [
          "Assembled X-shell client to control Ubuntu server remotely.",
          "Configured and managed encrypted Hadoop clusters on Ubuntu servers via X-shell for data processing.",
          "Setup Hadoop files system on Apache to optimize cluster performance and security."
        ]
      }
    ]
  },
  {
    key: 'leadership & teaching',
    title: lang === 'en' ? 'Leadership & Teaching' : '领导力与教学',
    items: [
      {
        role: "Teaching Assistant",
        company: "TCD",
        period: "2024 — 2024",
        location: "Dublin, Ireland",
        bullets: [
          "Led lab sessions for C++ and parallel programming; designed reproducible HPC exercises."
        ]
      },
      {
        role: "Teaching Assistant",
        company: "Oracle",
        period: "Winter 2018",
        location: "Peking, China",
        bullets: [
          "Supported instructors in course delivery and provided guidance to students during big data training sessions."
        ]
      }      
    ]
  }
];


export const skills = [
  "C/C++20", "Python", "CUDA", "MPI", "OpenMP", "LibTorch", "PyTorch",
  "CMake", "Slurm", "HDF5", "NumPy", "MATLAB"
];
