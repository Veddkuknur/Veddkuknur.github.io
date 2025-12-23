import { getContentById } from '@/lib/content';
import ContactClient from './ContactClient';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Vedd Kuknur. Send a message or connect via email or social media for collaboration opportunities.',
  keywords: ['contact', 'Vedd Kuknur', 'hire developer', 'freelance', 'collaboration', 'get in touch'],
  openGraph: {
    title: 'Contact | Vedd Kuknur',
    description: 'Get in touch with Vedd Kuknur for collaboration opportunities.',
    url: 'https://veddkuknur.github.io/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Vedd Kuknur',
    description: 'Get in touch with Vedd Kuknur for collaboration opportunities.',
  },
  alternates: {
    canonical: 'https://veddkuknur.github.io/contact',
  },
};

export default async function ContactPage() {
  const aboutContent = await getContentById('about', 'about');

  return <ContactClient aboutContent={aboutContent} />;
}
