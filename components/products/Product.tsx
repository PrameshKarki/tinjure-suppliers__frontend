import { IProduct } from '@interface/product'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineHeart } from 'react-icons/ai'

const Product = ({ id, image, name, originalPrice, variants, price }: IProduct) => {
  let discount
  if (originalPrice) {
    discount = Math.round(((originalPrice - price) / originalPrice) * 100)
  }

  return (
    <div className='border border-slate-100 bg-slate-50 h-100 relative'>
      <Link
        href={{
          pathname: '/product/overviews',
          query: {
            name: name?.replace(/[^\w\s]/gi, ''),
            id: id,
          },
        }}
      >
        <div className='relative overflow-hidden product_box'>
          <Image
            src={image}
            alt={name}
            className='h-full w-full object-cover  object-center hover:scale-105 transition ease-in-out delay-50'
            width={'200'}
            height={'300'}
          />
          {discount ? (
            <div className='absolute top-2 right-2 rounded-sm bg-violet-600 text-slate-100 text-[14px] font-[500] px-3'>
              {discount}%
            </div>
          ) : (
            ''
          )}
          <div className='absolute bottom-1 left-1 right-1 py-1 text-[13px] text-gray-800 bg-slate-100 text-center  gap-2 justify-center  items-center wishlist rounded-sm '>
            <AiOutlineHeart /> WISHLIST
          </div>
        </div>
        <div className='p-3'>
          <h3 className='text-[14px] font-[500] text-gray-700' title={name}>
            {name.substring(0, 45)} {name?.length > 45 && '...'}
          </h3>
          <div className='pt-3 flex gap-2  whitespace-nowrap flex-wrap text-[12px]'>
            {variants &&
              variants?.map((item, index: number) => {
                return (
                  <p key={index} className='bg-violet-50 px-2 rounded-sm hover:bg-violet-100'>
                    {item}
                  </p>
                )
              })}
          </div>
          <div className='pt-4 flex wrap gap-4 justify-between text-[14px] '>
            <div className='font-[500] flex whitespace-nowrap'>रु. {price}</div>
            {originalPrice ? (
              <div className='flex gap-1 flex-wrap'>
                <div className='flex whitespace-nowrap line-through'>रु. {originalPrice}</div>
                <span className='text-[13px] text-pink-500'> ({discount}% OFF)</span>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Product
