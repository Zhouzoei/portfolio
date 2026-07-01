export default function AboutPage() {
  const skillGroups = [
    { title: '核心技术', color: 'var(--blue-600)', bg: 'var(--blue-50)', items: ['Python', 'TypeScript', 'Java', 'C#', 'React/Next.js', 'LangChain', 'RAG', 'LLM'] },
    { title: '创意工具', color: 'var(--pink-400)', bg: 'var(--pink-50)', items: ['Unity', 'ComfyUI', 'Max/MSP', 'Arduino', 'Blender', 'OpenCV', 'Stable Diffusion'] },
    { title: 'AI & Agent', color: '#10B981', bg: '#ECFDF5', items: ['Agent 设计', 'RAG 架构', 'GraphRAG', 'Prompt Engineering', 'SM2 算法', 'Qdrant', 'ChromaDB', 'ReAct'] },
    { title: '工程能力', color: '#F59E0B', bg: '#FFFBEB', items: ['Git/GitHub', 'Linux', 'Docker', 'RESTful API', 'CI/CD', 'Agile/Scrum'] },
  ];

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 1.5rem 4rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.35rem' }}>
          关于<span style={{ color: 'var(--blue-600)' }}>我</span>
        </h1>
        <p style={{ color: 'var(--text-light)', fontSize: '0.88rem' }}>AI Developer & Digital Media Creator</p>
      </div>

      {/* Bio */}
      <div style={{
        background: 'var(--white)',
        borderRadius: '12px',
        padding: '1.5rem',
        border: '1px solid var(--border)',
        marginBottom: '1.5rem',
      }}>
        <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>背景</h2>
        <div style={{ color: 'var(--text)', fontSize: '0.9rem', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '0.75rem' }}>
            北京邮电大学数字媒体技术专业 2023 级（预计 2027 年毕业）。
            拥有 <span style={{ color: 'var(--blue-600)', fontWeight: 500 }}>5 年美术功底</span>，
            擅长将设计思维融入技术开发。
          </p>
          <p>
            当前专注于 <span style={{ color: 'var(--pink-400)', fontWeight: 500 }}>AI Agent / LLM 应用开发</span>，
            具备完整的 RAG 系统设计与实现经验。
            正在积极寻找 AI 应用开发相关岗位。
          </p>
        </div>
      </div>

      {/* Skills Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
        {skillGroups.map((group) => (
          <div
            key={group.title}
            style={{
              background: 'var(--white)',
              borderRadius: '12px',
              padding: '1.25rem',
              border: '1px solid var(--border)',
            }}
          >
            <h3 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.75rem', color: group.color }}>
              {group.title}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {group.items.map((item) => (
                <span
                  key={item}
                  style={{
                    fontSize: '0.72rem',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '10px',
                    background: group.bg,
                    color: group.color,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
