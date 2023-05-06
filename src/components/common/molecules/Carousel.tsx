import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Slider from 'react-slick'
import { settings } from '../../../configs/corousel'

interface IProps {
  images: string[]
}

const Carousel = (props: IProps) => {
  const { images } = props
  const [slider, setSlider] = React.useState<Slider | null>(null)
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '10px' })

  return (
    <Box position={'relative'} height={350} width={'full'} overflow={'hidden'}>
      <IconButton
        aria-label='left-arrow'
        borderRadius='full'
        background={'transparent'}
        position='absolute'
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
        sx={{ '&:hover': { background: 'none' } }}
      >
        <MdOutlineKeyboardArrowLeft size={50} className='text-punch-600' />
      </IconButton>
      <IconButton
        aria-label='right-arrow'
        background={'none'}
        borderRadius='full'
        position='absolute'
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
        sx={{ '&:hover': { background: 'none' } }}
      >
        <MdOutlineKeyboardArrowRight size={50} className='text-punch-600' />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {images.map((url, index) => (
          <Box
            key={index}
            height={'2xl'}
            position='relative'
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  )
}

export default Carousel
