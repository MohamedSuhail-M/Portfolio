import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans, Oswald } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

const siteUrl = 'https://mohamedsuhailm.dev';
const ogImage = `${siteUrl}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Mohamed Suhail M | Data Scientist & Machine Learning Engineer Portfolio',
  description:
    'Portfolio of Mohamed Suhail M — a Computer Science student specializing in Artificial Intelligence. Hands-on experience in Data Science, Machine Learning, Power BI, Python, and SQL. Building AI-powered, data-driven solutions.',
  keywords: [
    'Mohamed Suhail M',
    'Data Scientist',
    'Machine Learning Engineer',
    'AI Engineer',
    'Data Analyst',
    'Power BI',
    'Python',
    'SQL',
    'Data Science',
    'Portfolio',
  ],
  authors: [{ name: 'Mohamed Suhail M' }],
  creator: 'Mohamed Suhail M',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Mohamed Suhail M | Data Scientist & Machine Learning Engineer Portfolio',
    description:
      'Computer Science student specializing in Artificial Intelligence. Hands-on experience in Data Science, Machine Learning, Power BI, Python, and SQL.',
    siteName: 'Mohamed Suhail M Portfolio',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Mohamed Suhail M — Data Scientist & Machine Learning Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohamed Suhail M | Data Scientist & Machine Learning Engineer Portfolio',
    description:
      'Computer Science student specializing in Artificial Intelligence. Data Science, Machine Learning, Power BI, Python, and SQL.',
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mohamed Suhail M',
  jobTitle: 'Data Scientist & Machine Learning Engineer',
  url: siteUrl,
  email: 'mailto:suhi6462@gmail.com',
  telephone: '+91 7397223767',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'India',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'S.I.V.E.T College',
  },
  knowsAbout: [
    'Data Science',
    'Machine Learning',
    'Artificial Intelligence',
    'Power BI',
    'Python',
    'SQL',
    'Data Visualization',
    'Predictive Analytics',
  ],
  sameAs: [
    'https://github.com/MohamedSuhail-M',
    'https://www.linkedin.com/in/mohamedsuhail2101/',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${oswald.variable}`}>
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
