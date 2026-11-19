export const heroCtas = (lang: 'en' | 'zh') => [
  { label: lang === 'en' ? 'Download CV (PDF)' : '下载简历（PDF）', href: '/CV.pdf', primary: true },
  { label: lang === 'en' ? 'Email me' : '给我发邮件', href: 'mailto:yihai.li@temple.edu' }
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  link?: { href: string; label: string };
};

export type ExperienceGroup = {
  key: 'research' | 'internship' | 'teaching' | string;
  title: string;      // 已做 i18n
  items: Experience[];
};

export const education = (lang: 'en' | 'zh'): Experience[] => lang === 'en' ? [
  {
    role: "Ph.D., Computer and Information Science",
    company: "Temple University",
    period: "Fall 2026 — Present",
    location: "Philadelphia, PA, USA",
    bullets: []
  },
  {
    role: "M.Sc., High Performance Computing",
    company: "Trinity College Dublin",
    period: "Sept. 2023 — Nov. 2024",
    location: "Dublin, Ireland",
    bullets: [
      "GPA 3.98/4.00, Award and Distinction; supervised by Michael Pearson.",
      "Key modules: C/C++, HPC hardware & software, numerical & stochastic methods, machine learning, artificial intelligence."
    ]
  },
  {
    role: "B.S., Theoretical and Applied Mathematics",
    company: "Shanxi University",
    period: "Sept. 2016 — Jun. 2020",
    location: "Taiyuan, China",
    bullets: [
      "GPA 86.07/100.",
      "Key modules: analysis, algebra & topology, real/complex/functional analysis, ODE/PDE, probability & statistics, differential geometry."
    ]
  }
] : [
  {
    role: "计算机与信息科学 博士",
    company: "天普大学",
    period: "2026 年秋 — 至今",
    location: "美国 宾夕法尼亚州 费城",
    bullets: []
  },
  {
    role: "高性能计算 理学硕士",
    company: "都柏林圣三一大学",
    period: "2023.09 — 2024.11",
    location: "爱尔兰 都柏林",
    bullets: [
      "GPA 3.98/4.00，获奖学金并以优异成绩（Distinction）毕业；导师 Michael Pearson。",
      "核心课程：C/C++、高性能计算软硬件、数值与随机方法、机器学习、人工智能。"
    ]
  },
  {
    role: "理论与应用数学 理学学士",
    company: "山西大学",
    period: "2016.09 — 2020.06",
    location: "中国 太原",
    bullets: [
      "GPA 86.07/100。",
      "核心课程：数学分析、代数与拓扑、实/复/泛函分析、常微分与偏微分方程、概率论与数理统计、微分几何。"
    ]
  }
];

export const experienceGroups = (lang: 'en' | 'zh'): ExperienceGroup[] => {
  const L = (en: string, zh: string) => (lang === 'en' ? en : zh);
  const LL = (en: string[], zh: string[]) => (lang === 'en' ? en : zh);
  return [
    {
      key: 'research',
      title: L('Research Experience', '科研经历'),
      items: [
        {
          role: L('Researcher & Team Leader', '研究员 · 团队负责人'),
          company: L('Supervised by Prof. Pavlos Protopapas, Harvard University', '指导教师：Pavlos Protopapas 教授（哈佛大学）'),
          period: L('Jan. 2021 — Mar. 2021', '2021.01 — 2021.03'),
          location: L('Remote', '远程'),
          bullets: LL([
            "Acquired algorithms of machine learning specifically in CNNs accelerated by CUDA.",
            "Built Proxy model for CNNs’ evaluation based on Bootstrap algorithm in Python using Tensorflow 2.x.",
            "Utilized Grad-CAM and saliency maps to check the internal learning process in Python and Matlab.",
            "Drafted and typeset a comprehensive final report in LaTeX, including detailed performance graphs."
          ], [
            "系统学习机器学习算法，重点为基于 CUDA 加速的卷积神经网络（CNN）。",
            "使用 Python 与 TensorFlow 2.x，基于 Bootstrap 算法构建 CNN 评估的代理模型。",
            "使用 Python 与 MATLAB，借助 Grad-CAM 与显著性图分析网络内部的学习过程。",
            "使用 LaTeX 撰写并排版完整的结题报告，包含详细的性能图表。"
          ])
        },
        {
          role: L('Undergraduate Researcher & Team Leader', '本科生研究员 · 团队负责人'),
          company: L('Shanxi University', '山西大学'),
          period: L('Nov. 2017 — Nov. 2018', '2017.11 — 2018.11'),
          location: L('Taiyuan, China', '中国 太原'),
          bullets: LL([
            "Authored 1-Good-Neighbor Diagnosability of Unidirectional K-ary N-Cubes under the PMC Model in Computer Engineering and Applications.",
            "Employed combinatorial proof techniques using mathematical induction and constructive labeling to derive the diagnosability bound for K-ary N-Cubes.",
            "Coordinated a 5-member team over a year, producing one journal submission on schedule.",
            "Cultivated advanced skills in formal proof techniques, MATLAB coding, and team project management.",
            "Formally derived 1-good-neighbor diagnosability bound $k(n-1)$, and $kn-1$."
          ], [
            "在《计算机工程与应用》发表论文《PMC 模型下单向 K 元 N 立方体的 1-好邻诊断度》。",
            "运用数学归纳法与构造性标记等组合证明技巧，推导 K 元 N 立方体的诊断度界。",
            "带领 5 人团队历时一年，按期完成一篇期刊投稿。",
            "系统提升形式化证明、MATLAB 编程与团队项目管理能力。",
            "严格推导出 1-好邻诊断度界 $k(n-1)$ 与 $kn-1$。"
          ])
        }
      ]
    },
    {
      key: 'internship',
      title: L('Internship Experience', '实习经历'),
      items: [
        {
          role: L('Software Engineer Intern', '软件工程师实习生'),
          company: 'Oracle',
          period: L('Winter 2018', '2018 年冬'),
          location: L('Beijing, China', '中国 北京'),
          bullets: LL([
            "Assembled X-shell client to control Ubuntu server remotely.",
            "Configured and managed encrypted Hadoop clusters on Ubuntu servers via X-shell for data processing.",
            "Set up the Hadoop file system on Apache to optimize cluster performance and security."
          ], [
            "搭建 Xshell 客户端，远程管理 Ubuntu 服务器。",
            "通过 Xshell 在 Ubuntu 服务器上配置并管理加密的 Hadoop 集群，用于数据处理。",
            "在 Apache 上部署 Hadoop 文件系统，优化集群性能与安全性。"
          ])
        }
      ]
    },
    {
      key: 'leadership & teaching',
      title: L('Leadership & Teaching', '领导力与教学'),
      items: [
        {
          role: L('Teaching Assistant', '助教'),
          company: L('Temple University · CIS 4398 Projects in Computer Science', '天普大学 · CIS 4398 Projects in Computer Science'),
          period: L('Fall 2026 — Present', '2026 年秋 — 至今'),
          location: L('Philadelphia, PA, USA', '美国 宾夕法尼亚州 费城'),
          bullets: LL([
            "TA for the senior capstone course of the Computer Science major, taught by Prof. Ian Tyler Applebaum, across two sections.",
            "Support student teams building software for real-world stakeholders in an agile, project-driven setting.",
            "Guide teams through industry-standard workflows: Jira for project management, GitHub pull requests and code review, and Docusaurus documentation."
          ], [
            "担任计算机科学专业本科毕业设计（Capstone）课程助教，授课教师为 Ian Tyler Applebaum 教授，覆盖两个教学班。",
            "在敏捷、以项目为驱动的环境中，支持学生团队为真实的利益相关方开发软件。",
            "指导团队使用业界标准工作流：Jira 项目管理、GitHub Pull Request 与代码评审，以及 Docusaurus 项目文档。"
          ]),
          link: { href: 'https://capstone.ianapplebaum.com/', label: L('Course website', '课程网站') }
        },
        {
          role: L('Teaching Assistant', '助教'),
          company: L('Trinity College Dublin', '都柏林圣三一大学'),
          period: '2024',
          location: L('Dublin, Ireland', '爱尔兰 都柏林'),
          bullets: LL([
            "Led lab sessions for C++ and parallel programming; designed reproducible HPC exercises."
          ], [
            "主讲 C++ 与并行编程实验课，设计可复现的高性能计算练习。"
          ])
        },
        {
          role: L('Teaching Assistant', '助教'),
          company: 'Oracle',
          period: L('Winter 2018', '2018 年冬'),
          location: L('Beijing, China', '中国 北京'),
          bullets: LL([
            "Supported instructors in course delivery and provided guidance to students during big data training sessions."
          ], [
            "协助讲师授课，并在大数据培训课程中为学员提供指导。"
          ])
        }
      ]
    }
  ];
};


export const skills = [
  "C/C++20", "Python", "CUDA", "MPI", "OpenMP", "LibTorch", "PyTorch",
  "CMake", "Slurm", "HDF5", "NumPy", "MATLAB"
];
