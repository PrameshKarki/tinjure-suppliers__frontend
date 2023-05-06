import { Flex } from '@chakra-ui/react'
import BannerItem from '../atoms/BannerItem'

const Banners = () => {
  return (
    <Flex gap={4}>
      <BannerItem />
      <BannerItem />
      <BannerItem />
    </Flex>
  )
}

export default Banners
