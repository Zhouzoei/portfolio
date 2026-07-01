import Link from 'next/link';

const links = [
  { href: '/', label: '关于' },
  { href: '/projects', label: '项目' },
];

export default function Navbar() {
  return (
    <header
      style={{
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
        padding: '0 2rem',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <Link href="/" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--blue-600)', letterSpacing: '-0.5px', textDecoration: 'none' }}>
        Zhouzoei<span style={{ color: 'var(--pink-400)' }}>'s</span> Space
      </Link>
      <nav>
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="nav-link">
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
