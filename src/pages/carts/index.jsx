import { Heading } from '@chakra-ui/react'
import CartDetails from '../../components/carts/molecules/CartDetails'

const Carts = () => {
  return (
    <>
      <section className='cart-section px-20 mt-5'>
        <Heading as={'h1'} fontSize={20} my={10}>
          Shopping Cart
        </Heading>
        <CartDetails />
      </section>
    </>
  )
}

export default Carts
