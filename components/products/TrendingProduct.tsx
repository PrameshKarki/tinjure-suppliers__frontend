import { product } from '@app/data/product'

import Product, { IProduct } from './Product'
const TrendingProduct = () => {
  return (
    <div className='px-6 py-6 mx-auto '>
      <h2 className='text-2xl font-bold mb-4'>Trending Products</h2>
      <div className='grid lg:grid-cols-7 md:grid-cols-4 grid-cols-2 gap-6'>
        {product?.length > 0 &&
          product.map((item: IProduct, index: number) => {
            return (
              <Product
                image={item?.image}
                name={item?.name}
                variants={item?.variants}
                description={item?.description}
                price={item?.price}
                originalPrice={item?.originalPrice}
                key={index}
              />
            )
          })}
      </div>
    </div>
  )
}

export default TrendingProduct
