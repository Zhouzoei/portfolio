'use client';

import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { projects, type Project } from '@/data/projects';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 1.5rem 4rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.35rem' }}>
          全部<span style={{ color: 'var(--blue-600)' }}>项目</span>
        </h1>
        <p style={{ color: 'var(--text-light)', fontSize: '0.88rem' }}>
          每个项目都凝聚了思考与实践。
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} onClick={() => setSelectedProject(p)} />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}
