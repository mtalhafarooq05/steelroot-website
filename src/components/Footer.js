'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '1.5rem', 
        borderTop: '8px solid var(--panel-bg)'
    }}>
      {/* Background Watermarks */}
      <div style={{ position: 'absolute', top: '-30px', left: '-20px', opacity: 0.05, transform: 'rotate(-20deg)', pointerEvents: 'none' }}>
        <img src="/Studio Stuff/MainIcon.png" style={{ height: '300px' }} alt="" />
      </div>
      <div style={{ position: 'absolute', bottom: '-50px', right: '-20px', opacity: 0.05, transform: 'rotate(20deg)', pointerEvents: 'none' }}>
        <img src="/Studio Stuff/MainIcon.png" style={{ height: '300px' }} alt="" />
      </div>

      <h2 style={{ 
          fontFamily: "'Fredoka One', cursive", 
          fontSize: '2.5rem', 
          color: 'var(--text-light)', 
          margin: 0, 
          textShadow: '4px 4px 0 rgba(0,0,0,0.4)', 
          zIndex: 1 
      }}>
          JOIN THE CREW!
      </h2>

      <div className="footer-buttons" style={{ display: 'flex', gap: '1.5rem', zIndex: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="https://discord.com/invite/acuskPh3Cb" target="_blank" rel="noreferrer" className="btn" style={{ background: '#5865F2', display: 'flex', alignItems: 'center', gap: '10px', padding: '15px 30px', fontSize: '1.2rem', textDecoration: 'none' }}>
          <img src="/Free Icon Pack v3.1 (Basic)/Free Icon Pack v3.1 (Basic)/Social/Discord/256w/Gamepad 2nd Outline 256px.png" alt="Discord" style={{ height: '28px' }} />
          Discord Server
        </a>
        <a href="https://www.roblox.com/communities/15587611/SteelRoot-Studios#!/about" target="_blank" rel="noreferrer" className="btn" style={{ background: 'var(--hero-bg)', display: 'flex', alignItems: 'center', gap: '10px', padding: '15px 30px', fontSize: '1.2rem', textDecoration: 'none' }}>
          <img src="/Studio Stuff/MainIcon.png" alt="Roblox" style={{ height: '28px', transform: 'scale(1.8)' }} />
          Roblox Group
        </a>
      </div>

      <p style={{ 
          fontWeight: 700, 
          fontSize: '1rem', 
          color: 'rgba(255,255,255,0.4)', 
          zIndex: 1, 
          marginTop: '1rem',
          fontFamily: "'Nunito', sans-serif"
      }}>
          &copy; {new Date().getFullYear()} Steel Root Studios. All rights reserved.
      </p>
    </footer>
  );
}
