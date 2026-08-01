'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const FEATURED_GAMES = [
  {
    title: "🎮 Lock & Launch – Open Beta! 🚀",
    link: "/projects",
    image: "https://tr.rbxcdn.com/180DAY-95cad273751f059fcf5d9820c14bb49a/500/280/Image/Jpeg/noFilter",
    color: "#6a7985",
    description: "Jump into chaotic, cartoon-style missile battles where the goal is simple: hover, lock, and launch!"
  },
  {
    title: "🎵 Choose A Song 🎵",
    link: "/projects",
    image: "https://tr.rbxcdn.com/180DAY-61976bdce1ddc5d265be77f1ed7cd433/500/280/Image/Jpeg/noFilter",
    color: "#f57f17",
    description: "Join the ultimate music showdown! Battle against other players to decide which song is better."
  },
  {
    title: "Better Music",
    link: "/projects",
    image: "https://tr.rbxcdn.com/180DAY-2cf83c4be47fff668ee9b719908ad473/500/280/Image/Jpeg/noFilter",
    color: "var(--secondary-green)",
    description: "Fight for your favorite song in this musical brawler!"
  },
  {
    title: "[🗿] Be a Warrior for Brainrot!",
    link: "/projects",
    image: "https://tr.rbxcdn.com/180DAY-649fa2ee7317bc92ff2f08eaa7c4d075/500/280/Image/Jpeg/noFilter",
    color: "var(--secondary-green)",
    description: "Crash through massive pillars with your Giga-Hammer! Collect the legendary Brainrots for massive multipliers."
  },
  {
    title: "BloxBlast",
    link: "/projects",
    image: "https://tr.rbxcdn.com/180DAY-016b56bca8f7935cb4860dcf4ba3f5d4/500/280/Image/Jpeg/noFilter",
    color: "var(--primary-orange)",
    description: "THE most relaxing puzzle game on Roblox! Drag blocks, clear rows, and chain combos."
  },
  {
    title: "🍕 My Pizza Shop",
    link: "/projects",
    image: "https://tr.rbxcdn.com/180DAY-02e3d0421fe9a64be34b56a13ff7d8d2/500/280/Image/Jpeg/noFilter",
    color: "#6a7985",
    description: "Build the pizza shop of your dreams! Make delicious pizzas, serve hungry customers, and hire workers."
  }
];

export default function Home() {
  const heroRef = useRef(null);
  const windContainerRef = useRef(null);

  useEffect(() => {
    // 1. Transparent Navbar on Scroll
    const nav = document.getElementById('main-nav');
    const handleScroll = () => {
      if (nav) {
        if (window.scrollY > 50) {
          nav.classList.remove('transparent');
        } else {
          nav.classList.add('transparent');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // 2. Fade In Elements on Scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // 3. Floating Particles Background
    if (heroRef.current && heroRef.current.children.length <= 4) { // Prevent duplicate spawning on re-renders
      for (let i = 0; i < 25; i++) {
        let particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 40 + 10; 
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
        particle.style.animationDelay = (Math.random() * 5) + 's';
        if (Math.random() > 0.5) particle.style.borderRadius = '50%';
        else particle.style.borderRadius = '8px';
        heroRef.current.appendChild(particle);
      }
    }

    // 4. Cartoon Wind Swooshes
    let windInterval;
    const spawnWind = () => {
      if (document.hidden) return;
      const container = windContainerRef.current;
      if(!container) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const ns = "http://www.w3.org/2000/svg";
      const path = document.createElementNS(ns, "path");
      const startY = Math.random() * (h * 0.8) + 100; 
      let d = "";
      const type = Math.floor(Math.random() * 3);
      if (type === 0) {
          const lx = Math.random() * (w * 0.4) + (w * 0.2);
          d = `M -100 ${startY} L ${lx - 150} ${startY} C ${lx} ${startY}, ${lx + 100} ${startY - 200}, ${lx} ${startY - 100} C ${lx - 100} ${startY}, ${lx + 100} ${startY + 100}, ${lx + 150} ${startY} L ${w + 100} ${startY}`;
      } else if (type === 1) {
          d = `M -100 ${startY} Q ${w * 0.25} ${startY - 150} ${w * 0.5} ${startY} T ${w + 100} ${startY}`;
      } else {
          d = `M -100 ${startY} Q ${w * 0.5} ${startY + 150} ${w + 100} ${startY}`;
      }
      path.setAttribute("d", d);
      path.setAttribute("fill", "transparent");
      path.setAttribute("class", "wind-line");
      const duration = Math.random() * 4 + 4;
      path.style.animationDuration = duration + "s";
      const thickness = Math.random() * 6 + 2;
      path.setAttribute("stroke-width", thickness);
      container.appendChild(path);
      setTimeout(() => { if (container.contains(path)) container.removeChild(path); }, duration * 1000);
    };
    
    windInterval = setInterval(spawnWind, 1200);

    // 5. Carousel Logic
    const carousel = document.getElementById('games-carousel');
    const leftBtn = document.getElementById('scroll-left');
    const rightBtn = document.getElementById('scroll-right');
    const scrollAmount = 400;

    const scrollLeft = () => carousel && carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    const scrollRight = () => carousel && carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });

    if (leftBtn) leftBtn.addEventListener('click', scrollLeft);
    if (rightBtn) rightBtn.addEventListener('click', scrollRight);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(windInterval);
      if (leftBtn) leftBtn.removeEventListener('click', scrollLeft);
      if (rightBtn) rightBtn.removeEventListener('click', scrollRight);
    };
  }, []);

  return (
    <>
      <style>{`
        /* Local specific styles for the home page that need to be here */
        .navbar.transparent {
            background: transparent;
            border-bottom-color: transparent;
        }
        #wind-container {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            width: 100%; height: 100%;
            z-index: 1;
            pointer-events: none;
        }
        .wind-line {
            fill: none;
            stroke: rgba(255, 255, 255, 0.15);
            stroke-linecap: round;
            stroke-dasharray: 25 200;
            stroke-dashoffset: 25;
            animation: windBlow linear forwards;
        }
        @keyframes windBlow {
            0% { stroke-dashoffset: 25; }
            100% { stroke-dashoffset: -100; }
        }
        #hero-logo {
            z-index: 10;
            position: relative;
        }
      `}</style>
      
      <main>
        <header className="hero-full" id="hero-section" ref={heroRef}>
          <svg id="wind-container" ref={windContainerRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'hidden', opacity: 0.15, zIndex: 0 }}></svg>
          <img src="/Studio Stuff/MainLogo.png" alt="Steel Root Studios" id="hero-logo" style={{ position: 'relative', zIndex: 2 }} />
          <Link href="/projects" className="btn" style={{ zIndex: 10, position: 'relative', marginBottom: '80px' }}>PLAY RADISH RUMBLE</Link>
          <div className="scroll-indicator" style={{ zIndex: 10 }}>▼ SCROLL TO EXPLORE ▼</div>
        </header>

        <section className="games-section">
          <h2 className="section-title fade-in">OUR GAMES <img src="/Emoji Icon Pack/256px/Outline/Star-struck 256.png" style={{ height: '1em', verticalAlign: 'middle', marginLeft: '10px', filter: 'drop-shadow(2px 2px 0 var(--border-color))' }} /></h2>
          
          <div className="carousel-wrapper fade-in">
              <button id="scroll-left" className="carousel-arrow left-arrow">
                  <img src="/Free Icon Pack v3.1 (Basic)/Free Icon Pack v3.1 (Basic)/Main/Upgrade/64px/Upgrade White 64px.png" alt="Left" style={{ width: '32px', height: '32px', transform: 'rotate(-90deg)' }} />
              </button>
              <button id="scroll-right" className="carousel-arrow right-arrow">
                  <img src="/Free Icon Pack v3.1 (Basic)/Free Icon Pack v3.1 (Basic)/Main/Upgrade/64px/Upgrade White 64px.png" alt="Right" style={{ width: '32px', height: '32px', transform: 'rotate(90deg)' }} />
              </button>

              <div className="carousel-container" id="games-carousel">
              
              {FEATURED_GAMES.map((game, idx) => (
                  <Link href={game.link} className="carousel-card" key={idx}>
                      <div className="card-img">
                          <img src={game.image} alt={game.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                      </div>
                      <div className="card-content">
                          <h3 style={{ color: game.color }}>{game.title}</h3>
                          <p>{game.description}</p>
                      </div>
                  </Link>
              ))}

          </div>
          </div>
          
          <div className="fade-in" style={{ textAlign: 'center', marginTop: '4rem' }}>
              <Link href="/projects" className="btn">VIEW ALL PROJECTS</Link>
          </div>
        </section>
      </main>
    </>
  );
}
