'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav className={`navbar ${menuOpen ? 'menu-open' : ''}`} id="main-nav">
      <Link href="/" className="logo-placeholder">
        <img src="/Studio Stuff/MainIcon.png" alt="Steel Root Logo" style={{ height: '85px', filter: 'brightness(0) invert(1)' }} />
        STEELROOT
      </Link>
      
      <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={`bar ${menuOpen ? 'bar1' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'bar2' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'bar3' : ''}`}></span>
      </button>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
        <Link href="/projects" className={pathname === '/projects' ? 'active' : ''}>Projects</Link>
        <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
        <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
      </div>
    </nav>
  );
}
