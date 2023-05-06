import { Box, Button, Flex, Heading, ResponsiveValue, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { colors } from '../../../constants/colors'
import CartItem from '../atoms/CartItem'

interface IProps {
  direction?: ResponsiveValue<'column' | 'row' | 'column-reverse' | 'row-reverse'>
}

const CartDetails = (props: IProps) => {
  const { direction } = props
  return (
    <Flex justifyContent={'space-between'} direction={direction}>
      <Stack>
        <CartItem />
        <CartItem />
        <CartItem />
      </Stack>
      <Stack gap={3}>
        <Box bg={'white'} minW={500} p={5}>
          <Heading as='h3' fontSize={20} mb={3}>
            Order Summary
          </Heading>
          <Flex justifyContent={'space-between'} mb={2}>
            <Text fontWeight={'thin'} color={'gray.600'}>
              SubTotal
            </Text>
            <Text fontWeight={'thin'} color={'gray.600'}>
              Rs.1,200
            </Text>
          </Flex>
          <Flex justifyContent={'space-between'} mb={2}>
            <Text fontWeight={'thin'} color={'gray.600'}>
              Shipping Charge
            </Text>
            <Text fontWeight={'thin'} color={'gray.600'}>
              Rs.1,200
            </Text>
          </Flex>
          <Flex justifyContent={'space-between'} mb={2}>
            <Text fontWeight={'thin'} color={'gray.600'}>
              Tax
            </Text>
            <Text fontWeight={'thin'} color={'gray.600'}>
              Rs.1,200
            </Text>
          </Flex>
          <Flex justifyContent={'space-between'} mt={7}>
            <Text fontWeight={'semibold'}>Order Total</Text>
            <Text fontWeight={'semibold'}>Rs.1,200</Text>
          </Flex>
          <Button
            w={'100%'}
            fontWeight={'normal'}
            bg={colors.blue}
            textColor={'white'}
            _hover={{ bg: colors.blue }}
            height={12}
            mt={7}
          >
            Proceed to Checkout
          </Button>
          <Text textAlign={'center'} mt={3}>
            {' '}
            Or <Link href={'/'}> Continue Shopping</Link>{' '}
          </Text>
        </Box>
      </Stack>
    </Flex>
  )
}

export default CartDetails
