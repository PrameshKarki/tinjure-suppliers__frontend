import ProductOverviews from '@components/products/ProductOverviews'
import Breadcrumb from '@components/utils/Breadcrumb'

const page = () => {
  return (
    <div className='px-6 py-6 mx-auto'>
      <Breadcrumb />
      <ProductOverviews />
    </div>
  )
}

export default page
