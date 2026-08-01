import { getAllProjects } from '@/lib/projects';
import ProjectsClient from '@/components/ProjectsClient';

export const metadata = {
  title: 'Our Projects - Steel Root Studios',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main>
      <header className="page-header fade-in visible" style={{ textAlign: 'center', marginTop: '4rem', marginBottom: '3rem', padding: '0 1rem' }}>
        <h1 style={{ color: 'white', textShadow: '4px 4px 0 var(--border-color)', fontSize: 'clamp(2.5rem, 6vw, 4rem)', margin: '0' }}>OUR PORTFOLIO 🛠️</h1>
        <p style={{ color: 'white', textShadow: '2px 2px 0 var(--border-color)', fontSize: '1.2rem', marginTop: '1rem', fontWeight: 'bold' }}>A showcase of the games, systems, and mechanics we've built.</p>
      </header>

      <ProjectsClient initialProjects={projects} />
    </main>
  );
}
