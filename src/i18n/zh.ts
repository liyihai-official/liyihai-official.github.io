export default {
  title: "简历",
  name: "李艺海",
  bio: "你好！我专注于并行与分布式计算、GPU加速以及物理信息PDE求解器。曾担任工程数学与离散数学的助教。",
  avatar: "/images/avatar.png",  
  tagline: "高性能计算 & 科学机器学习",
  open_to: "开放博士与合作机会",
  nav: { experience: "经历", projects: "项目", skills: "技能", blog: "博客", contact: "联系", hire: "联系我" },
  sections: {
    experience: { title: "经历", subtitle: "这些年做过与交付过的事情。" },
    projects: { title: "精选项目", subtitle: "部分代表作与工作样例。" },
    skills: { title: "技能", subtitle: "我日常使用的工具栈。" },
    contact: { title: "联系我", subtitle: "我会阅读每一封来信。", cta: "发送邮件" },
    blog: { title: "博客", subtitle: "随笔、记录与研究进展。" }
  }
} as const;
