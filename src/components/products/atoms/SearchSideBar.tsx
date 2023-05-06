import { Box, Heading } from '@chakra-ui/react'
import RangeSlider from '../../common/atoms/RangeSlider'

const SearchSideBar = () => {
  return (
    <Box width={'30%'} bg={'white'} px={4} py={4}>
      <Box>
        <Heading as={'h3'} fontSize={16} my={3}>
          Price Range
        </Heading>
        <RangeSlider />
      </Box>
    </Box>
  )
}

export default SearchSideBar
