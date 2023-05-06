import { Box, IconButton } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Slider from 'react-slick'
import { ProductSchema } from '../../../__generated__/graphql'
import { productCarouselSettings } from '../../../configs/corousel'
import ProductCard from '../atoms/ProductCard'

interface IProps {
  products: ProductSchema[]
}

const ProductCarousel = (props: IProps) => {
  const { products } = props
  const [slider, setSlider] = React.useState<Slider | null>(null)
  return (
    <Box position={'relative'} width={'full'} overflow={'hidden'}>
      <IconButton
        aria-label='left-arrow'
        borderRadius='full'
        background={'transparent'}
        position='absolute'
        top={'40%'}
        left={'-5px'}
        transform={'translateY(-50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
        sx={{ '&:hover': { background: 'none' } }}
      >
        <MdOutlineKeyboardArrowLeft size={40} className='text-punch-500' />
      </IconButton>
      <IconButton
        aria-label='right-arrow'
        background={'transparent'}
        borderRadius='full'
        position='absolute'
        top={'40%'}
        right={'-5px'}
        transform={'translateY(-50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
        sx={{ '&:hover': { background: 'none' } }}
      >
        <MdOutlineKeyboardArrowRight size={40} className='text-punch-500' />
      </IconButton>
      <Slider {...productCarouselSettings} ref={(slider) => setSlider(slider)}>
        {new Array(20).fill(undefined).map((product, index) => (
          <ProductCard key={index} product={products[index]} />
        ))}
      </Slider>
    </Box>
  )
}

export default ProductCarousel
