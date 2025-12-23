import { getContentByType, getContentById } from '@/lib/content';
import Hero from '@/components/sections/Hero';
import Timeline from '@/components/sections/Timeline';
import ImpactShowcase from '@/components/sections/ImpactShowcase';
import Toolkit from '@/components/sections/Toolkit';
import ScrollProgressIndicator from '@/components/common/ScrollProgressIndicator';
import CTASection from '@/components/sections/CTASection';

export const metadata = {
  title: 'Vedd Kuknur | Software Developer & CS Student',
  description: 'Software Developer & Computer Science Student specializing in full-stack development, cloud infrastructure, and machine learning. Building scalable systems and impactful applications.',
  openGraph: {
    title: 'Vedd Kuknur | Software Developer & CS Student',
    description: 'Software Developer & Computer Science Student. Building scalable systems and impactful applications.',
    url: 'https://veddkuknur.github.io',
    images: ['/images/vedd.jpeg'],
  },
};

// Section definitions for scroll progress indicator
const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'impact-showcase', label: 'Projects' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'toolkit', label: 'Skills' },
  { id: 'cta', label: 'Contact' },
];

// Career start year for calculating years of experience
const CAREER_START_YEAR = 2023;

export default async function HomePage() {
  const heroContent = await getContentById('hero', 'hero');
  const projects = await getContentByType('projects');
  const toolkitContent = await getContentById('toolkit', 'skills');

  // Calculate dynamic stats
  const projectCount = projects.length;
  const skillsCount = toolkitContent?.metadata?.skills?.length || 0;
  const yearsExperience = new Date().getFullYear() - CAREER_START_YEAR;

  return (
    <>
      {/* Scroll Progress Indicator */}
      <ScrollProgressIndicator sections={sections} />

      {/* Hero Section - Full viewport introduction */}
      <Hero content={heroContent} />

      {/* Impact Showcase - Featured projects with storytelling */}
      <ImpactShowcase projects={projects} />

      {/* Timeline - Career journey */}
      <Timeline />

      {/* Toolkit - Skills and technologies */}
      <Toolkit content={toolkitContent} />

      {/* Call to Action - Closing section */}
      <CTASection />
    </>
  );
}
