export type Project = {
    id: string
    name: string
    tags?: string[]
    feature?: string
    description?: string
    img: string
    link?: string
  }
  
  export const projects: Project[] = [
    {
      id: 'binbrain',
      name: 'BinBrain',
      tags: ['Flutter', 'TensorFlow', 'MLKit', 'Google Cloud Storage', 'Firebase'],
      description:
        "Mobile app performing real time object detection and waste classification built for KitaHack 2023",
      feature: '',
      img: '/assets/binbrain_logo.png',
      link: 'https://github.com/noelleon2001/Googol-1e100'
    },
    {
      id: 'cleanchain',
      name: 'CleanChain',
      tags: ['PyTeal', 'Docker', 'AlgoSDK', 'JavaScript'],
      feature: '',
      description:
        'Environmentalist bounty website developed on the Algorand Blockchain to connect donors to interested NGOs to clean lakes and rivers nearby for monetary reward',
      img: '/assets/cleanchain_logo.png',
      link: 'https://github.com/danielyuenhx/cleanchain-backend'
    },
    {
        id: 'spaceinvaders',
        name: 'SpaceInvaders',
        tags: ['TypeScript', 'RxJS'],
        feature: '',
        description:
          'Classical Space Invaders game using the Functional Programming Paradigm',
        img: '/assets/space_invaders.png',
        link: 'https://github.com/Sadeeptha-B/SpaceInvaders'
      }
  ]