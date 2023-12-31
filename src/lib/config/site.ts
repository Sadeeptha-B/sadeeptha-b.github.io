import type { SiteConfig } from '$lib/types/site'


const bio = ['Browsing Reddit',
  'Software Engineer!',
  'Learning Data Engineering!',
  'Reading',
  'Writing...',
  'Doing cool stuff',
  'Thinking',
  'Sleeping'
]

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'sadeeptha-b.github.io',
  title: 'Sadeeptha-B',
  subtitle: 'Personal Portfolio and Blog',
  lang: 'en-US',
  author: {
    avatar: '/assets/maskable@512.png',
    name: 'Sadeeptha',
    status: '💻',
    bio: bio[~~(Math.random() * bio.length)],
    metadata: [
      {
        text: 'GitHub',
        // icon: 'i-simple-icons-github',
        link: 'https://github.com/Sadeeptha-B'
      },
      {
        text: 'LinkedIn',
        link: 'https://www.linkedin.com/in/sadeeptha-bandara-b135a2195/'
      }
    ]
  },
  themeColor: '#252732'
}
