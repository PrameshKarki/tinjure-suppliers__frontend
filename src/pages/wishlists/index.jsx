import ProductsSection from '../../components/common/organisms/ProductsSection'

const Wishlists = () => {
  return (
    <section className='cart-section px-20 mt-5'>
      <ProductsSection heading='My Wishlists' hasActionButton={false} />
    </section>
  )
}

export default Wishlists
