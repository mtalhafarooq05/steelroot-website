'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar" id="main-nav">
      <Link href="/" className="logo-placeholder">
        <img src="/Studio Stuff/MainIcon.png" alt="Steel Root Logo" style={{ height: '85px', filter: 'brightness(0) invert(1)' }} />
        STEEL ROOT
      </Link>
      <div className="nav-links">
        <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
        <Link href="/projects" className={pathname === '/projects' ? 'active' : ''}>Projects</Link>
        <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
        <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
      </div>
    </nav>
  );
}
