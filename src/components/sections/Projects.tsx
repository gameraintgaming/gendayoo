import { Project } from '@/lib/types';
import Card from '@/components/ui/Card';

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with cart functionality, payment integration, and admin dashboard. Built with Next.js and Stripe.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    imageUrl: '[picsum.photos](https://x.com/gameraintgaming/status/1999278150996623513/photo/1)',
    githubUrl: '[github.com](https://github.com)',
    liveUrl: '[example.com](https://example.com)',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, drag-and-drop functionality, and team features.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    imageUrl: '[picsum.photos](https://x.com/gameraintgaming/status/1953526318257058184/photo/1)',
    githubUrl: '[github.com](https://github.com)',
    liveUrl: '[example.com](https://example.com)',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description:
      'A beautiful weather dashboard that displays current conditions and forecasts using data from multiple weather APIs.',
    technologies: ['React', 'TypeScript', 'Chart.js', 'APIs'],
    imageUrl: '[picsum.photos](https://x.com/gameraintgaming/status/1990305860195914066/photo/1)',
    githubUrl: '[github.com](https://github.com)',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          My Projects
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each one represents a
          unique challenge and learning experience.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
