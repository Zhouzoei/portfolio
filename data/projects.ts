export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  gif?: string;
  /** 多张图片，弹窗中可轮播查看 */
  images?: string[];
  link?: string;
  featured: boolean;
  details?: string;
}

export const projects: Project[] = [
  {
    slug: 'rag-learning-assistant',
    title: 'RAG AI 学习助手',
    description: '基于 RAG + SM2 算法的智能学习系统，三层分块架构实现高效知识检索与自适应复习计划。',
    tags: ['RAG', 'LLM', 'Python', 'SM2', 'Qdrant'],
    image: '/projects/rag-assistant.png',
    link: 'https://github.com/Zhouzoei/QAsystem',
    featured: true,
    details: '核心亮点：三层分块架构（文档级/段落级/句子级），结合 SM2 间隔重复算法，实现千人千面的自适应学习路径。后端采用双架构设计（Qdrant+ReAct+GraphRAG / ChromaDB+AgentService），支持复杂查询推理。',
  },
  {
    slug: 'code-agent',
    title: 'Code Agent',
    description: 'LLM 驱动的代码智能助手，支持代码生成、审查、重构与自动化工作流。',
    tags: ['Agent', 'LLM', 'Python'],
    image: '/projects/code-agent.png',
    link: 'https://github.com/Zhouzoei/code_agent',
    featured: false,
    details: '代码智能 Agent，集成代码理解、自动生成、智能审查等能力。支持多轮对话式编程辅助与自动化工作流编排。',
  },
  {
    slug: 'team-diary-tool',
    title: '随手记',
    description: '碎片化记录，AI智能整理，将碎片记录变成连贯的日记，数据可视化。',
    tags: ['NLP', 'Python', '自动化', 'Android studio', 'kotlin'],
    image: '/projects/diary-tool-1.png',
    images: ['/projects/diary-tool-1.png', '/projects/diary-tool-2.png'],
    featured: true,
    details: '支持文字、图片、语音等多种记录形式，支持 AI 智能整理与分析，生成连贯日记。数据可视化展示。',
  },
  {
    slug: 'comfyui-sketch-3d',
    title: 'ComfyUI Sketch 转 2D/3D',
    description: '基于 ComfyUI 的手绘草图转 2D 插画 / 3D 模型的 AI 创作管线。',
    tags: ['ComfyUI', 'AI', 'Stable Diffusion', '3D'],
    image: '/projects/comfyui-sketch.png',
    images: ['/projects/comfyui-sketch.png'],
    featured: true,
    details: '设计并实现完整的 AI 创作管线：手绘草图 → ControlNet 预处理 → SD 生成 2D 成品 → 深度估计 → 3D 重建。结合 5 年美术功底，实现高质量风格迁移。',
  },
  {
    slug: 'unity-sex-edu-app',
    title: 'Unity 性教育互动 App',
    description: '基于 Unity 的青少年性教育互动应用，融合游戏化学习与知识科普。',
    tags: ['Unity', 'C#', 'UX', '教育'],
    image: '/projects/unity-edu-1.png',
    images: ['/projects/unity-edu-1.png', '/projects/unity-edu-2.png'],
    featured: false,
    details: '使用 Unity 引擎开发，通过互动叙事与游戏化机制传递性教育知识。注重用户体验设计，适配移动端。',
  },
  {
    slug: 'max-msp-music-box',
    title: 'Max/MSP 音乐盒交互装置',
    description: '基于 Max/MSP + Arduino 的物理交互音乐装置，探索声音与触觉的结合。',
    tags: ['Max/MSP', 'Arduino', '交互装置', '声音设计'],
    image: '/projects/music-box-1.png',
    images: ['/projects/music-box-1.png', '/projects/music-box-2.png'],
    featured: false,
    details: '结合 Arduino 传感器与 Max/MSP 音频处理，打造可触摸的物理音乐盒。硬件触发实时声音合成，探索声音-触觉-视觉的跨模态交互。',
  },
  {
    slug: 'unity-2d-rpg',
    title: 'Unity 2D RPG 猫猫山谷',
    description: '对话驱动的探索 RPG，与不同猫猫交谈、收集地图宝箱完成任务，逐步揭开山谷的故事。',
    tags: ['Unity', 'C#', 'Game Design', '叙事'],
    image: '/projects/unity-rpg-1.png',
    images: ['/projects/unity-rpg-1.png', '/projects/unity-rpg-2.png'],
    featured: false,
    details: '多场景地图设计，包含丰富的猫猫 NPC 对话系统；宝箱收集 + 钻石任务驱动探索；解锁角色逐步了解山谷故事。',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
