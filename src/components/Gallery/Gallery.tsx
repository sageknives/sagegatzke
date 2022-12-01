import { Box, useMediaQuery, Theme } from '@mui/material'
import { FunctionComponent } from 'react'
import { Gallery as GalleryType } from '../../types'

export interface GalleryProps {
  gallery: GalleryType
}

const sizes = ['50%', '100%']
export const Gallery: FunctionComponent<GalleryProps> = ({ gallery: { images } }) => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const size = isMobile ? 1 : 0
  const direction = isMobile ? 'column' : 'row'
  return (
    <Box display="flex" justifyContent="center" gap="var(--space100)" flexDirection={direction}>
      {images.map(({ src, alt }) => (
        <img key={src} src={src} alt={alt} width={sizes[size]} height={sizes[size]} />
      ))}
    </Box>
  )
}
