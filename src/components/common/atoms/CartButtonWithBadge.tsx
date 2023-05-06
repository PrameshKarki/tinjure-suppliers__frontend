import { Badge, Box, Text } from '@chakra-ui/react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

interface IProps {
  count: number
}

const CartButtonWithBadge = (props: IProps) => {
  const { count } = props
  return (
    <Box className='flex items-center ml-3 relative' color={'gray.600'} _hover={{ color: 'black' }} cursor={'pointer'}>
      {count > 0 && (
        <Badge
          variant='subtle'
          p={1}
          colorScheme='orange'
          fontSize={16}
          position={'absolute'}
          borderRadius={'full'}
          top={-3}
          right={-5}
        >
          {count}
        </Badge>
      )}
      <AiOutlineShoppingCart size={20} />
      <Text ml={2} fontSize={15}>
        Cart
      </Text>
    </Box>
  )
}

export default CartButtonWithBadge
