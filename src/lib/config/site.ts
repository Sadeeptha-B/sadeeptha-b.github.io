import type { SiteConfig } from '$lib/types/site'


const bio = ['Probably napping',
  'Software Engineer!',
  'Learning Data Engineering!',
  'Reading',
  'Writing...',
  'Doing cool stuff'
]

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
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
        link: 'https://github.com/Sadeeptha-B'
      }]
  },
  themeColor: '#252732'
}
