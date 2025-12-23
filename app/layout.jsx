import './globals.css';
import Script from 'next/script';
import { ThemeProvider } from '@/context/ThemeContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const GA_MEASUREMENT_ID = 'G-9KKL3BNRNY';

const siteUrl = 'https://veddkuknur.github.io';
const siteName = 'Vedd Kuknur';
const siteDescription = 'Software Developer & Computer Science Student specializing in full-stack development, cloud infrastructure, and machine learning. Building scalable systems and impactful applications.';
const siteImage = '/images/vedd.jpeg';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Vedd Kuknur | Software Developer & CS Student',
    template: '%s | Vedd Kuknur',
  },
  description: siteDescription,
  keywords: [
    'Vedd Kuknur',
    'Software Developer',
    'Computer Science Student',
    'Full Stack Developer',
    'React Developer',
    'Python Developer',
    'Kotlin Developer',
    'AWS Developer',
    'Portfolio',
    'Machine Learning',
    'Cloud Infrastructure',
  ],
  authors: [{ name: 'Vedd Kuknur', url: siteUrl }],
  creator: 'Vedd Kuknur',
  publisher: 'Vedd Kuknur',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: siteName,
    title: 'Vedd Kuknur | Software Developer & CS Student',
    description: siteDescription,
    images: [
      {
        url: siteImage,
        width: 1200,
        height: 630,
        alt: 'Vedd Kuknur - Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vedd Kuknur | Software Developer & CS Student',
    description: siteDescription,
    images: [siteImage],
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Vedd Kuknur',
    url: siteUrl,
    image: siteImage,
    jobTitle: 'Software Developer',
    description: siteDescription,
    sameAs: [
      'https://github.com/Veddkuknur',
      'https://linkedin.com/in/veddkuknur',
    ],
    knowsAbout: [
      'React',
      'Vue.js',
      'Python',
      'Kotlin',
      'JavaScript',
      'TypeScript',
      'AWS',
      'Kubernetes',
      'Docker',
      'Machine Learning',
      'Software Engineering',
    ],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    author: {
      '@type': 'Person',
      name: 'Vedd Kuknur',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/projects?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/android-chrome-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3B82F6" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <ThemeProvider>
          <Header />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
