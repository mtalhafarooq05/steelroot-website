'use client';
import { useEffect } from 'react';

export default function AboutPage() {
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
      `}</style>
      
      <main>
        <div className="container page-header fade-in" style={{ paddingBottom: '2rem' }}>
            <h1 className="page-title">ABOUT US <img src="/Emoji Icon Pack/256px/Outline/Hot face 256.png" style={{ height: '1em', verticalAlign: 'middle', marginLeft: '10px', filter: 'drop-shadow(4px 4px 0 var(--border-color))', transform: 'rotate(-10deg)' }} /></h1>
        </div>

        <div className="container fade-in visible">
            <section className="about-grid fade-in">
                <div className="about-text">
                    <h1>OUR ROOTS</h1>
                    <p>Steel Root Studios was founded with a single mission: to craft games that we genuinely want to play. We blend high-quality visuals, tight mechanics, and a touch of absolute chaos.</p>
                    <p>From brawling vegetables to sprawling simulators, our team is dedicated to pushing what is possible on the platform.</p>
                </div>
                <div className="about-image">
                    <img src="/Studio Stuff/MainLogo.png" alt="Steel Root Mascot" className="float-anim" />
                </div>
            </section>

            <h2 className="section-title fade-in" style={{ marginTop: '4rem' }}>THE TEAM</h2>
            <div className="team-grid fade-in" style={{ marginBottom: '6rem' }}>
                <a href="https://www.roblox.com/users/110978061/profile" target="_blank" className="team-member">
                    <img src="/Studio Stuff/steelixion - PFP.webp" className="team-pfp" alt="Steelixion" />
                    <h3>Steelixion</h3>
                    <p style={{ color: '#5865F2', fontWeight: 400, fontFamily: "'Fredoka One', cursive", textShadow: '1.5px 1.5px 0 var(--border-color), -1.5px -1.5px 0 var(--border-color), 1.5px -1.5px 0 var(--border-color), -1.5px 1.5px 0 var(--border-color), 0px 1.5px 0 var(--border-color), 1.5px 0px 0 var(--border-color), 0px -1.5px 0 var(--border-color), -1.5px 0px 0 var(--border-color)', margin: '5px 0 0 0', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}><img src="/Free Icon Pack v3.1 (Basic)/Free Icon Pack v3.1 (Basic)/Social/Discord/256w/Gamepad 2nd Outline 256px.png" style={{height: '24px', filter: 'drop-shadow(1.5px 1.5px 0 var(--border-color))'}} />stlx_2.0</p>
                </a>
                <a href="https://www.roblox.com/users/8604261785/profile" target="_blank" className="team-member">
                    <img src="/Studio Stuff/Drexion - PFP.webp" className="team-pfp" alt="Drexion" />
                    <h3>Drexion</h3>
                    <p style={{ color: '#5865F2', fontWeight: 400, fontFamily: "'Fredoka One', cursive", textShadow: '1.5px 1.5px 0 var(--border-color), -1.5px -1.5px 0 var(--border-color), 1.5px -1.5px 0 var(--border-color), -1.5px 1.5px 0 var(--border-color), 0px 1.5px 0 var(--border-color), 1.5px 0px 0 var(--border-color), 0px -1.5px 0 var(--border-color), -1.5px 0px 0 var(--border-color)', margin: '5px 0 0 0', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}><img src="/Free Icon Pack v3.1 (Basic)/Free Icon Pack v3.1 (Basic)/Social/Discord/256w/Gamepad 2nd Outline 256px.png" style={{height: '24px', filter: 'drop-shadow(1.5px 1.5px 0 var(--border-color))'}} />drexion_placeholder</p>
                </a>
                <a href="https://www.roblox.com/users/6207816509/profile" target="_blank" className="team-member">
                    <img src="/Studio Stuff/Wisteria - PFP.webp" className="team-pfp" alt="Wisteria" />
                    <h3>Wisteria</h3>
                    <p style={{ color: '#5865F2', fontWeight: 400, fontFamily: "'Fredoka One', cursive", textShadow: '1.5px 1.5px 0 var(--border-color), -1.5px -1.5px 0 var(--border-color), 1.5px -1.5px 0 var(--border-color), -1.5px 1.5px 0 var(--border-color), 0px 1.5px 0 var(--border-color), 1.5px 0px 0 var(--border-color), 0px -1.5px 0 var(--border-color), -1.5px 0px 0 var(--border-color)', margin: '5px 0 0 0', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}><img src="/Free Icon Pack v3.1 (Basic)/Free Icon Pack v3.1 (Basic)/Social/Discord/256w/Gamepad 2nd Outline 256px.png" style={{height: '24px', filter: 'drop-shadow(1.5px 1.5px 0 var(--border-color))'}} />wisteria_placeholder</p>
                </a>
                <a href="https://www.roblox.com/users/8156496993/profile" target="_blank" className="team-member">
                    <img src="/Studio Stuff/SaadRizz - PFP.webp" className="team-pfp" alt="SaadRizz" />
                    <h3>SaadRizz</h3>
                    <p style={{ color: '#5865F2', fontWeight: 400, fontFamily: "'Fredoka One', cursive", textShadow: '1.5px 1.5px 0 var(--border-color), -1.5px -1.5px 0 var(--border-color), 1.5px -1.5px 0 var(--border-color), -1.5px 1.5px 0 var(--border-color), 0px 1.5px 0 var(--border-color), 1.5px 0px 0 var(--border-color), 0px -1.5px 0 var(--border-color), -1.5px 0px 0 var(--border-color)', margin: '5px 0 0 0', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}><img src="/Free Icon Pack v3.1 (Basic)/Free Icon Pack v3.1 (Basic)/Social/Discord/256w/Gamepad 2nd Outline 256px.png" style={{height: '24px', filter: 'drop-shadow(1.5px 1.5px 0 var(--border-color))'}} />saadrizz_placeholder</p>
                </a>
            </div>
        </div>
      </main>
    </>
  );
}
