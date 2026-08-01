import { getAllProjects } from '@/lib/projects';
import ProjectsClient from '@/components/ProjectsClient';

export const metadata = {
  title: 'Our Projects - Steel Root Studios',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main>
      <header className="page-header fade-in visible">
        <h1 className="page-title">OUR TITLES 🤩</h1>
        <p className="page-subtitle">Check out our most popular experiences on Roblox.</p>
      </header>

      <ProjectsClient initialProjects={projects} />
    </main>
  );
}
