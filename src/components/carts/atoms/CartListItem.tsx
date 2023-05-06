import { Box, Flex, IconButton, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { AiOutlineDelete } from 'react-icons/ai'

const CartListItem = () => {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'}>
      <Flex alignItems={'center'}>
        <Box width={100} height={100} pos={'relative'}>
          <Image src={'/product.jpeg'} fill alt='Product' style={{ objectFit: 'contain' }} />
        </Box>
        <Box>
          <Text fontWeight={'semibold'} textColor={'gray.600'} fontSize={15}>
            Apple Macbook Air 2
          </Text>
          <Text fontWeight={'thin'} textColor={'gray.600'} fontSize={14}>
            4 * Rs.200
          </Text>
        </Box>
      </Flex>
      <IconButton icon={<AiOutlineDelete />} aria-label='Delete' background={'none'} />
    </Flex>
  )
}

export default CartListItem
