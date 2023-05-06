import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { acceptedPaymentMethods } from '../../../constants/acceptedPaymentMethods'

const AcceptedPaymentMethods = () => {
  return (
    <Flex background={'white'} justifyContent={'center'} alignItems={'center'} py={2} gap={20}>
      <Text>We Accept</Text>
      <Flex>
        {acceptedPaymentMethods.map((el, index) => {
          return (
            <Box key={index} width={20} height={5} position={'relative'}>
              <Image src={el.image} alt={el.name} fill style={{ objectFit: 'contain' }} />
            </Box>
          )
        })}
      </Flex>
    </Flex>
  )
}

export default AcceptedPaymentMethods
