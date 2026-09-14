export default {
  hero: { eyebrow: "研究 · 计算 · 工程" },
  ui: { home: "首页", navigation: "主导航", theme: "切换深色模式", menu: "展开或收起菜单", all: "全部项目", source: "源代码", visit: "查看项目", unavailable: "项目概览", results: "显示项目", download: "下载简历", viewAll: "查看全部项目", contactTitle: "让想法成为下一次合作的起点。", contactBody: "欢迎交流科研、工作机会，以及关于计算的想法。", back: "返回博客", toc: "本文目录" },
  title: "简历",
  name: "李艺海",
  bio: "你好！我专注于并行与分布式计算、GPU加速以及物理信息PDE求解器。曾在都柏林圣三一大学担任工程数学与离散数学的助教。",
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
