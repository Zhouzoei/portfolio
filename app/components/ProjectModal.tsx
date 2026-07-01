'use client';

import { useState } from 'react';
import type { Project } from '@/data/projects';

const iconMap: Record<string, string> = {
  RAG: '\u2699',
  Agent: '\u2328',
  Unity: '\u{1F3AE}',
  ComfyUI: '\u{1F3A8}',
  'Max/MSP': '\u{1F3B5}',
  NLP: '\u{1F4DD}',
};

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const icon = iconMap[project.tags[0]] || '\u{1F4BB}';
  const isPink = project.tags[0] === 'Max/MSP' || project.tags[0] === 'NLP';

  // 合并所有可用图片：images > gif > image
  const allImages = project.images?.length
    ? project.images
    : project.gif
      ? [project.gif]
      : [project.image];

  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(0,0,0,0.45)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--white)',
          borderRadius: '16px',
          maxWidth: '560px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
        }}
      >
        {/* Image Carousel */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16 / 9',
            background: 'var(--blue-50)',
            borderRadius: '16px 16px 0 0',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Image */}
          <img
            src={allImages[imgIndex]}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />

          {/* Fallback if image fails */}
          <div
            id="img-fallback"
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              opacity: 0.4,
              pointerEvents: 'none' as any,
            }}
          >
            {icon}
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: 'none',
              background: 'rgba(0,0,0,0.4)',
              color: '#fff',
              fontSize: '1.1rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              lineHeight: 1,
              zIndex: 2,
            }}
          >
            &times;
          </button>

          {/* Prev/Next arrows */}
          {allImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setImgIndex((i) => (i === 0 ? allImages.length - 1 : i - 1));
                }}
                style={{
                  position: 'absolute',
                  left: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  border: 'none',
                  background: 'rgba(0,0,0,0.35)',
                  color: '#fff',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  lineHeight: 1,
                  zIndex: 2,
                }}
              >
                &lsaquo;
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setImgIndex((i) => (i === allImages.length - 1 ? 0 : i + 1));
                }}
                style={{
                  position: 'absolute',
                  right: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  border: 'none',
                  background: 'rgba(0,0,0,0.35)',
                  color: '#fff',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  lineHeight: 1,
                  zIndex: 2,
                }}
              >
                &rsaquo;
              </button>
              {/* Dots */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '5px',
                  zIndex: 2,
                }}
              >
                {allImages.map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: i === imgIndex ? '#fff' : 'rgba(255,255,255,0.4)',
                      transition: 'background 0.2s',
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
                background: isPink ? 'var(--pink-50)' : 'var(--blue-50)',
                color: isPink ? 'var(--pink-400)' : 'var(--blue-600)',
                flexShrink: 0,
              }}
            >
              {icon}
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>{project.title}</h3>
          </div>

          <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '0.68rem',
                  padding: '0.12rem 0.5rem',
                  borderRadius: '8px',
                  background: 'var(--blue-50)',
                  color: 'var(--blue-600)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {project.details && (
            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--text-light)',
                lineHeight: '1.8',
                marginBottom: '1rem',
              }}
            >
              {project.details}
            </p>
          )}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.82rem',
                color: 'var(--blue-600)',
                textDecoration: 'none',
                padding: '0.35rem 1rem',
                borderRadius: '20px',
                background: 'var(--blue-50)',
              }}
            >
              GitHub &nearr;
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
