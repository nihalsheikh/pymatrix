'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <div className="nav-logo">
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          PY<span className="nav-logo-span">MATRIX</span>
        </Link>
      </div>
      <div className="nav-links">
        <Link href="/" className={`nav-btn ${pathname === '/' ? 'active' : ''}`}>
          HOME
        </Link>
        <Link href="/about" className={`nav-btn ${pathname === '/about' ? 'active' : ''}`}>
          ABOUT
        </Link>
        <Link href="/docs" className={`nav-btn ${pathname === '/docs' ? 'active' : ''}`}>
          DOCS
        </Link>
        <Link href="/requirements" className={`nav-btn ${pathname === '/requirements' ? 'active' : ''}`}>
          REQUIREMENTS
        </Link>
      </div>
      <div className="nav-right">
        <div className="nav-version">v1.0.0</div>
        <a href="https://github.com/nihalsheikh/pymatrix" className="nav-gh" target="_blank" rel="noopener noreferrer">
          <span>GH</span>
        </a>
      </div>
    </nav>
  );
}
