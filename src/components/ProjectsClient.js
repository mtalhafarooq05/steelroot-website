'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProjectsClient({ initialProjects }) {
  const [filter, setFilter] = useState('all');
  const [lightboxProject, setLightboxProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'games', label: 'Games' },
    { id: 'systems', label: 'Systems' },
    { id: 'models', label: 'Models' },
    { id: 'ui', label: 'UI' },
  ];

  const filteredProjects = filter === 'all' 
    ? initialProjects 
    : initialProjects.filter(p => p.category === filter);

  return (
    <>
      <div className="container fade-in visible">
        <div className="project-filters">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <section className="projects-grid fade-in visible" id="projects-container" style={{ marginBottom: '8rem' }}>
        {filteredProjects.map((project) => (
          <div className="project-card visible" key={project.id} style={{ display: 'flex', opacity: 1, transform: 'scale(1)', filter: 'saturate(1)' }}>
            <div className="project-card-img">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.content}</p>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noreferrer" className="btn-play-card">
                  {project.category === 'games' ? 'PLAY NOW' : 'VIEW SYSTEM'}
                </a>
              ) : (
                <button onClick={() => setLightboxProject(project)} className="btn-play-card" style={{ border: 'none', fontFamily: 'inherit' }}>
                  {project.category === 'ui' ? 'VIEW UI' : 'VIEW MODEL'}
                </button>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxProject && (
        <div className="lightbox-overlay" onClick={() => setLightboxProject(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxProject(null)}>X</button>
            <img src={lightboxProject.image} alt={lightboxProject.title} className="lightbox-main-img" />
            <h2 style={{ color: 'var(--primary-orange)', marginTop: '2rem' }}>{lightboxProject.title}</h2>
            <p style={{ marginTop: '1rem', fontWeight: 700 }}>{lightboxProject.content}</p>
          </div>
        </div>
      )}

      {/* We need some quick CSS for the lightbox */}
      <style jsx>{`
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.8);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease;
        }
        .lightbox-content {
          background: var(--panel-bg);
          border: 6px solid var(--border-color);
          border-radius: 24px;
          padding: 2rem;
          max-width: 900px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 12px 12px 0 var(--border-color);
          animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .lightbox-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: var(--hero-bg);
          border: 4px solid var(--border-color);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          font-family: 'Fredoka One', cursive;
          font-size: 1.2rem;
          cursor: pointer;
          color: var(--text-main);
          box-shadow: 4px 4px 0 var(--border-color);
          transition: transform 0.2s;
        }
        .lightbox-close:hover {
          transform: translateY(-2px);
        }
        .lightbox-main-img {
          width: 100%;
          border-radius: 12px;
          border: 4px solid var(--border-color);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </>
  );
}
