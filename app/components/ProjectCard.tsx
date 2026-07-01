import type { Project } from '@/data/projects';

const iconMap: Record<string, string> = {
  RAG: '\u2699',
  Agent: '\u2328',
  Unity: '\u{1F3AE}',
  ComfyUI: '\u{1F3A8}',
  'Max/MSP': '\u{1F3B5}',
  NLP: '\u{1F4DD}',
};

export default function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick?: () => void;
}) {
  const icon = iconMap[project.tags[0]] || '\u{1F4BB}';
  const isPink = project.tags[0] === 'Max/MSP' || project.tags[0] === 'NLP';

  return (
    <div className="project-card" onClick={onClick}>
      <div
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.1rem',
          marginBottom: '0.75rem',
          background: isPink ? 'var(--pink-50)' : 'var(--blue-50)',
          color: isPink ? 'var(--pink-400)' : 'var(--blue-600)',
        }}
      >
        {icon}
      </div>
      <h4 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.35rem' }}>{project.title}</h4>
      <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', lineHeight: '1.55' }}>{project.description}</p>
      <div style={{ marginTop: '0.65rem', display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: '0.68rem',
              padding: '0.1rem 0.45rem',
              borderRadius: '8px',
              background: 'var(--blue-50)',
              color: 'var(--blue-600)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
