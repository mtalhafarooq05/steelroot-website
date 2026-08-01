'use client';
import { useEffect } from 'react';

export default function ContactPage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }, []);

  return (
    <>
      <style>{`
        .page-header {
            padding: 180px 5% 60px 5%;
            text-align: center;
        }
        .page-title {
            font-size: 5rem;
            margin: 0;
            color: var(--hero-bg);
            text-shadow: 4px 0px 0 #000, 3.7px 1.5px 0 #000, 2.8px 2.8px 0 #000, 1.5px 3.7px 0 #000, 0px 4px 0 #000, -1.5px 3.7px 0 #000, -2.8px 2.8px 0 #000, -3.7px 1.5px 0 #000, -4px 0px 0 #000, -3.7px -1.5px 0 #000, -2.8px -2.8px 0 #000, -1.5px -3.7px 0 #000, 0px -4px 0 #000, 1.5px -3.7px 0 #000, 2.8px -2.8px 0 #000, 3.7px -1.5px 0 #000; font-weight: 900;
        }
        .contact-card {
            background: var(--panel-bg);
            border: 8px solid var(--border-color);
            border-radius: 30px;
            padding: 4rem;
            box-shadow: 16px 16px 0 var(--border-color);
            margin-bottom: 8rem;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .contact-btn {
            background: #5865F2; /* Discord Color */
            color: white;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 1.2rem 2rem;
            font-family: 'Fredoka One', cursive;
            font-size: 1.2rem;
            border: 6px solid var(--border-color);
            border-radius: 16px;
            box-shadow: 6px 6px 0 var(--border-color);
            text-decoration: none;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        .contact-btn:hover {
            transform: translateY(-5px);
            box-shadow: 8px 8px 0 var(--border-color);
        }
        .contact-btn.roblox-btn {
            background: var(--hero-bg);
        }
      `}</style>
      
      <main>
        <div className="container page-header fade-in" style={{ paddingBottom: '2rem' }}>
            <h1 className="page-title">GET IN TOUCH <img src="/Emoji Icon Pack/256px/Outline/Beaming face with smiling eyes 256.png" style={{ height: '1em', verticalAlign: 'middle', marginLeft: '10px', filter: 'drop-shadow(4px 4px 0 var(--border-color))', transform: 'rotate(15deg)' }} /></h1>
        </div>

        <div className="container fade-in visible" style={{ maxWidth: '900px', textAlign: 'center' }}>
            <div className="contact-card">
                <img src="/Studio Stuff/MainIcon.png" alt="Mascot" style={{ height: '140px', marginBottom: '2rem', filter: 'drop-shadow(6px 6px 0 var(--border-color))' }} className="float-anim" />
                
                <p style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '3rem', lineHeight: 1.6 }}>Whether you are looking to report a bug, appeal a moderation action, or just want to hang out with our community, you're in the right place!</p>
                
                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="https://discord.com/invite/acuskPh3Cb" target="_blank" className="contact-btn">
                        <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg" alt="Discord" style={{ height: '30px', filter: 'brightness(0) invert(1)' }} />
                        Join Our Discord
                    </a>
                    
                    <a href="https://www.roblox.com/communities/15587611/SteelRoot-Studios#!/about" target="_blank" className="contact-btn roblox-btn">
                        <img src="/Studio Stuff/MainIcon.png" alt="Roblox" style={{ height: '30px', filter: 'brightness(0) invert(1)' }} />
                        Join Roblox Group
                    </a>
                </div>
            </div>
        </div>
      </main>
    </>
  );
}
