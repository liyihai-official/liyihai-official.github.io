import { cubing } from './cubing';

// Structured data (schema.org) that tells search engines who this site is about,
// including every common spelling of the name.
export const personJsonLd = (lang: 'en' | 'zh', pageUrl: string, site: URL) => ({
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: pageUrl,
  inLanguage: lang === 'en' ? 'en' : 'zh-CN',
  mainEntity: {
    '@type': 'Person',
    '@id': new URL('/#person', site).href,
    name: 'Yihai Li',
    alternateName: ['LI Yihai', 'Li Yihai', '李艺海'],
    url: site.href,
    image: new URL('/images/avatar.png', site).href,
    jobTitle: 'Ph.D. Student',
    affiliation: {
      '@type': 'CollegeOrUniversity',
      name: 'Temple University',
      url: 'https://www.temple.edu/',
    },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Trinity College Dublin', url: 'https://www.tcd.ie/' },
      { '@type': 'CollegeOrUniversity', name: 'Shanxi University', alternateName: '山西大学', url: 'https://www.sxu.edu.cn/' },
    ],
    knowsAbout: [
      'High-performance computing',
      'Parallel and distributed computing',
      'GPU acceleration',
      'Physics-informed neural networks',
      'Scientific machine learning',
    ],
    sameAs: [
      'https://github.com/liyihai-official',
      'https://www.linkedin.com/in/liyihai',
      cubing.wcaUrl,
      cubing.cubingUrl,
    ],
  },
});
