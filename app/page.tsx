'use client';

import Link from 'next/link';
import { useState } from 'react';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import Heatmap from './components/Heatmap';
import { featuredProjects, type Project } from '@/data/projects';
import { articles } from '@/data/articles';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const skills = [
    { name: 'Python', desc: 'AI/LLM 主力语言' },
    { name: 'TypeScript', desc: '全栈开发' },
    { name: 'C# / Unity', desc: '游戏与交互' },
    { name: 'RAG / Qdrant', desc: '检索增强生成' },
    { name: 'ComfyUI', desc: 'AI 图像管线' },
    { name: 'Max/MSP', desc: '声音交互设计' },
  ];

  const photos = [
    { label: '校园 · 秋', bg: 'linear-gradient(135deg, #BBDEFB, #90CAF9)', icon: '\u{1F3F5}', top: '10px', left: '5%', w: '220px', h: '150px', rotate: '-3deg', z: 3 },
    { label: '玉渊潭 · 春', bg: 'linear-gradient(135deg, #E8D5F5, #D1C4E9)', icon: '\u{1F338}', top: '20px', left: '30%', w: '200px', h: '210px', rotate: '2deg', z: 4 },
    { label: '奥森 · 骑行', bg: 'linear-gradient(135deg, #A1C4FD, #C2E9FB)', icon: '\u{1F6B4}', top: '15px', left: '52%', w: '230px', h: '155px', rotate: '-1.5deg', z: 2 },
    { label: '咖啡与代码', bg: 'linear-gradient(135deg, #F8BBD0, #E1BEE7)', icon: '\u2615', top: '10px', left: '72%', w: '190px', h: '200px', rotate: '3deg', z: 5 },
  ];

  return (
    <>
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
      {/* ══════ Hero ══════ */}
      <section style={{ display: 'flex', gap: '2.5rem', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
        <div
          style={{
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            flexShrink: 0,
            background: 'linear-gradient(135deg, var(--blue-200) 0%, var(--pink-200) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.2rem',
            color: 'var(--white)',
            fontWeight: 600,
          }}
        >
          Z
        </div>
        <div>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.35rem' }}>Zhouzoei</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '0.6rem' }}>
            数媒大三 · 求职 AI 应用 &amp; 产品岗
          </p>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-light)', lineHeight: '1.75', marginBottom: '0.75rem', maxWidth: '520px' }}>
            正在学习 LLM / RAG / Agent 方向的应用开发，做过几个练手项目，希望能找到一份实习把学到的东西用起来。
          </p>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-light)', lineHeight: '1.75', marginBottom: '0.75rem', maxWidth: '520px' }}>
            对 AI 应用开发和产品设计都感兴趣，正在从技术项目出发摸索产品感。
          </p>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a
              href="https://github.com/Zhouzoei"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.82rem', color: 'var(--blue-600)', textDecoration: 'none', padding: '0.2rem 0.65rem', borderRadius: '12px', background: 'var(--blue-50)' }}
            >
              GitHub
            </a>
            <a
              href="mailto:3469604620@qq.com"
              style={{ fontSize: '0.82rem', color: 'var(--pink-400)', textDecoration: 'none', padding: '0.2rem 0.65rem', borderRadius: '12px', background: 'var(--pink-50)' }}
            >
              Email
            </a>
          </div>
        </div>
      </section>

      {/* ══════ Heatmap ══════ */}
      <Heatmap />

      {/* ══════ Skills ══════ */}
      <div className="section-title">技术栈</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.65rem' }}>
        {skills.map((s) => (
          <div
            key={s.name}
            style={{
              background: 'var(--white)',
              borderRadius: '8px',
              padding: '0.45rem 0.75rem',
              border: '1px solid var(--border)',
              cursor: 'default',
            }}
          >
            <h4 style={{ color: 'var(--blue-600)', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.1rem' }}>{s.name}</h4>
            <p style={{ color: 'var(--text-lighter)', fontSize: '0.65rem', lineHeight: '1.3' }}>{s.desc}</p>
          </div>
        ))}
      </div>

      {/* ══════ Articles ══════ */}
      <div className="section-title">文章</div>
      <div style={{ marginBottom: '0.5rem' }}>
        {articles.map((a) => (
          <Link
            key={a.slug}
            href={`/articles/${a.slug}`}
            style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            className="card-hover card-slide"
          >
            <div style={{ borderRadius: '10px', padding: '1.1rem 1.35rem', marginBottom: '0.65rem' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-lighter)', marginBottom: '0.15rem' }}>{a.date}</div>
              <div style={{ fontSize: '0.92rem', fontWeight: 600, marginBottom: '0.3rem', color: 'var(--text)' }}>{a.title}</div>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {a.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.68rem',
                      padding: '0.12rem 0.5rem',
                      borderRadius: '8px',
                      background: a.pink ? 'var(--pink-50)' : 'var(--blue-50)',
                      color: a.pink ? 'var(--pink-400)' : 'var(--blue-600)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ══════ Projects ══════ */}
      <div className="section-title">项目</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        {featuredProjects.map((p) => (
          <ProjectCard key={p.slug} project={p} onClick={() => setSelectedProject(p)} />
        ))}
      </div>
      <div style={{ marginTop: '1rem', textAlign: 'right' }}>
        <Link href="/projects" style={{ fontSize: '0.78rem', color: 'var(--blue-600)', textDecoration: 'none', opacity: 0.7 }}>
          查看全部项目 →
        </Link>
      </div>

      {/* ══════ Photos ══════ */}
      <div className="section-title">相册</div>
      <div style={{ position: 'relative', height: '260px', marginTop: '0.5rem' }}>
        {photos.map((photo, i) => (
          <div
            key={i}
            className="photo-card"
            style={{
              top: photo.top,
              left: photo.left,
              width: photo.w,
              height: photo.h,
              transform: `rotate(${photo.rotate})`,
              zIndex: photo.z,
            }}
          >
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: 'rgba(255,255,255,0.8)', background: photo.bg }}>
              {photo.icon}
            </div>
            <div style={{
              position: 'absolute',
              bottom: '8px',
              left: '10px',
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.9)',
              background: 'rgba(0,0,0,0.35)',
              padding: '0.15rem 0.5rem',
              borderRadius: '6px',
            }}>
              {photo.label}
            </div>
          </div>
        ))}
      </div>
    </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}
