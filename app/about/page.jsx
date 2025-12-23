import { getContentById } from '@/lib/content';
import AboutClient from './AboutClient';

export const metadata = {
  title: 'About',
  description: 'Learn more about Vedd Kuknur - Software Developer & Computer Science Student with expertise in React, Vue.js, Python, Kotlin, AWS, and machine learning. Background, skills, and professional journey.',
  keywords: ['about', 'Vedd Kuknur', 'software developer', 'computer science student', 'full stack developer', 'React developer', 'biography', 'skills'],
  openGraph: {
    title: 'About | Vedd Kuknur',
    description: 'Learn more about Vedd Kuknur - Software Developer & Computer Science Student with expertise in modern web technologies and cloud infrastructure.',
    url: 'https://veddkuknur.github.io/about',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Vedd Kuknur',
    description: 'Learn more about Vedd Kuknur - Software Developer & Computer Science Student.',
  },
  alternates: {
    canonical: 'https://veddkuknur.github.io/about',
  },
};

export default async function AboutPage() {
  const content = await getContentById('about', 'about');

  return <AboutClient content={content} />;
}
