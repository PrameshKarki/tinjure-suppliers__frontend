import BannerImage from '../components/common/atoms/Banner'
import Banners from '../components/common/molecules/Banners'
import Carousel from '../components/common/molecules/Carousel'
import Categories from '../components/common/molecules/Categories'
import ProductsCarouselSection from '../components/common/organisms/ProductsCarouselSection'
import ProductsSection from '../components/common/organisms/ProductsSection'

// *Temporary data
const images = [
  'https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  'https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  'https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
]

const HomePage = () => {
  return (
    <>
      <Carousel images={images} />
      <section className='px-20 home-page'>
        <ProductsSection
          heading='Trending Products'
          hasActionButton
          actionButtonText='Show More'
          actionButtonOnClick={() => {}}
        />
        <BannerImage src='/banner.jpg' />
        <Categories />
        <ProductsSection
          heading='New Arrivals'
          hasActionButton
          actionButtonText='Show More'
          actionButtonOnClick={() => {}}
        />
        <BannerImage src='/banner.jpg' />
        <ProductsCarouselSection heading='Holi Special' products={[]} />
        <ProductsCarouselSection heading="Mother's day Special" products={[]} />
        <Banners />
        <ProductsSection
          heading='Just For You'
          hasActionButton
          actionButtonText='Show More'
          actionButtonOnClick={() => {}}
        />
      </section>
    </>
  )
}

export default HomePage
