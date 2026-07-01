import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { articles } from '@/data/articles';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '3rem 1.5rem 4rem' }}>
      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.35rem',
          fontSize: '0.82rem',
          color: 'var(--blue-600)',
          textDecoration: 'none',
          marginBottom: '2rem',
          opacity: 0.7,
        }}
      >
        &larr; 返回首页
      </Link>

      <div style={{ marginBottom: '2rem' }}>
        <div style={{ fontSize: '0.78rem', color: 'var(--text-lighter)', marginBottom: '0.5rem' }}>
          {article.date}
        </div>
        <h1 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.75rem', lineHeight: '1.3' }}>
          {article.title}
        </h1>
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {article.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '0.7rem',
                padding: '0.15rem 0.55rem',
                borderRadius: '10px',
                background: article.pink ? 'var(--pink-50)' : 'var(--blue-50)',
                color: article.pink ? 'var(--pink-400)' : 'var(--blue-600)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <article
        style={{
          background: 'var(--white)',
          borderRadius: '12px',
          padding: '2rem',
          border: '1px solid var(--border)',
          lineHeight: '1.9',
          fontSize: '0.92rem',
          color: 'var(--text-light)',
        }}
      >
        <ReactMarkdown
          components={{
            h2: ({ children }) => (
              <h2
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  marginTop: '1.5rem',
                  marginBottom: '0.75rem',
                  color: 'var(--text)',
                }}
              >
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  marginTop: '1.25rem',
                  marginBottom: '0.5rem',
                  color: 'var(--text)',
                }}
              >
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p style={{ marginBottom: '0.75rem' }}>{children}</p>
            ),
            ul: ({ children }) => (
              <ul style={{ marginBottom: '0.75rem', paddingLeft: '1.25rem' }}>{children}</ul>
            ),
            ol: ({ children }) => (
              <ol style={{ marginBottom: '0.75rem', paddingLeft: '1.25rem' }}>{children}</ol>
            ),
            li: ({ children }) => (
              <li style={{ marginBottom: '0.25rem' }}>{children}</li>
            ),
            strong: ({ children }) => (
              <strong style={{ color: 'var(--text)', fontWeight: 600 }}>{children}</strong>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--blue-600)', textDecoration: 'underline' }}
              >
                {children}
              </a>
            ),
            code: ({ children }) => (
              <code
                style={{
                  background: 'var(--blue-50)',
                  padding: '0.15rem 0.4rem',
                  borderRadius: '4px',
                  fontSize: '0.85em',
                  color: 'var(--blue-600)',
                }}
              >
                {children}
              </code>
            ),
            blockquote: ({ children }) => (
              <blockquote
                style={{
                  borderLeft: '3px solid var(--blue-200)',
                  paddingLeft: '1rem',
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: '0.75rem',
                  color: 'var(--text-lighter)',
                  fontStyle: 'italic',
                }}
              >
                {children}
              </blockquote>
            ),
          }}
        >
          {article.content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
