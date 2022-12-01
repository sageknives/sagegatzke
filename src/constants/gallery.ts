import { Gallery } from '../types'

const isLocal = window.location.hostname.includes('local')
const path = isLocal ? '/images/' : 'https://sageknives.github.io/sagegatzke/images/'
export const gallery: Gallery = {
  images: [
    {
      src: `${path}sageandbishop.jpeg`,
      alt: 'sage and bishop',
    },
    {
      src: `${path}sageandwhiteboard.jpeg`,
      alt: 'sage',
    },
  ],
}
