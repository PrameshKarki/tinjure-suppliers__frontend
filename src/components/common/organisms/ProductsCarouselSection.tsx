import { ProductSchema } from '../../../__generated__/graphql'
import SectionHeader from '../atoms/SectionHeader'
import ProductCarousel from '../molecules/ProductsCarousel'

interface IProps {
  heading: string
  products: ProductSchema[]
}

const ProductsCarouselSection = (props: IProps) => {
  return (
    <section className='products__section'>
      <SectionHeader {...props} hasActionButton={false} />
      <ProductCarousel products={[]} />
    </section>
  )
}

export default ProductsCarouselSection
