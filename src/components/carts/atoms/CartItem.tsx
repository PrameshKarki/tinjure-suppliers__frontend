import { Box, Button, Divider, Flex, Heading, IconButton, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { AiOutlineClose } from 'react-icons/ai'

const CartItem = () => {
  return (
    <>
      <Divider />
      <Flex justifyContent={'space-between'} gap={3}>
        <Box pos={'relative'}>
          <Image
            src={'/product.jpeg'}
            width={200}
            height={200}
            alt='Product'
            style={{
              objectFit: 'contain',
            }}
          />
        </Box>
        <Box>
          <Stack>
            <Heading as={'h2'} fontSize={18}>
              Zip Tote Basket is a very good product -200 mm hh
            </Heading>
            <Text fontSize={16}>Red | Medium</Text>
            <Text fontSize={18}>Rs. 2000</Text>
            <Flex gap={2} ml={5} alignItems={'center'}>
              <Button variant={'outline'} cursor={'pointer'}>
                -
              </Button>
              <Text fontSize={18} fontWeight={'semibold'} mx={3}>
                1
              </Text>
              <Button variant={'outline'} cursor={'pointer'}>
                +
              </Button>
            </Flex>
          </Stack>
        </Box>
        <IconButton aria-label='left-arrow' background={'none'} ml={5}>
          <AiOutlineClose />
        </IconButton>
      </Flex>
    </>
  )
}

export default CartItem
