import { getContentByType } from '@/lib/content';
import ProjectsClient from './ProjectsClient';

export const metadata = {
  title: 'Projects',
  description: 'Browse my portfolio of full-stack web applications, mobile apps, ML projects, and cloud infrastructure work.',
  keywords: ['portfolio', 'projects', 'web applications', 'React', 'Vue.js', 'Python', 'Kotlin', 'Flutter', 'machine learning', 'full stack'],
  openGraph: {
    title: 'Projects | Vedd Kuknur',
    description: 'Browse my portfolio of full-stack web applications and development work.',
    url: 'https://veddkuknur.github.io/projects',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Vedd Kuknur',
    description: 'Browse my portfolio of full-stack web applications and development work.',
  },
  alternates: {
    canonical: 'https://veddkuknur.github.io/projects',
  },
};

export default async function ProjectsPage() {
  const projects = await getContentByType('projects');

  return <ProjectsClient projects={projects} />;
}
