'use client'

import Image from 'next/image'
import { product as productDetails } from '@app/data/product'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { IProduct } from '@interface/product'
import PaymentOptions from "@components/utils/PaymentOptions"

const ProductOverviews = () => {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  const [product, setProduct] = useState<null | IProduct>(null)
  const [discount, setDiscount] = useState<number | null>(null)

  const fetchProductDetails = async (id: number) => {
    const product = productDetails.find((p) => p.id === id) as IProduct
    product && setProduct(product)
  }

  useEffect(() => {
    if (id) {
      void fetchProductDetails(+id)
    }
  }, [id])

  const getDiscount = () => {
    if (product?.originalPrice) {
      setDiscount(Math.round(((product?.originalPrice - product?.price) / product?.originalPrice) * 100))
    }
  }

  useEffect(() => {
    if (product) {
      getDiscount()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product])

  return (
    <div className='lg:px-20 grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 lg:gap-10 gap-5'>
      <div className=' bg-slate-200'>
        <Image
          src={product?.image ?? ''}
          height='1000'
          width='500'
          alt='product image'
          className='object-cover h-full w-full'
        />
      </div>
      <div className='lg:col-span-2 col-spans-1 '>
        <div className='flex   lg:flex-row flex-col gap-5 wrap lg:justify-between'>
          <h4 className='text-[19px] text-gray-800 font-[500]'>{product?.name ?? ''}</h4>
          <h4 className='flex gap-4  aligns-center'>
            <span className='text-[20px]  text-gray-800 font-[700] '>
              रु. {product?.price ?? ''} <span className='text-[17px] font-[400]'>only</span>
            </span>
            <span className='line-through pt-1'>रु. {product?.originalPrice ?? ''}</span>
            <span className='pt-1 text-[17px] font-[400] text-pink-500'> {discount ? `${discount}% OFF` : ''}</span>
          </h4>
        </div>
        <div className="pt-5"> 
        <div className="">
            <h2 className="text-gray-700 font-medium">Select your variants</h2>
            <ul className="mt-4 flex gap-5">
                {
                    product?.variants && product?.variants?.map((item, idx) => (
                        <li key={idx} className="">
                            <label htmlFor={item} className="block relative w-[100]">
                                <input id={item} type="radio" defaultChecked={idx == 1 ? true : false} name="payment" className="sr-only peer" />
                                <div className="w-full flex gap-x-3 items-start px-4 pb-1 cursor-pointer rounded-sm border bg-white shado w-sm ring-purple-600 peer-checked:ring-1 duration-200">                                     
                                    <div> 
                                        <p className="mt-1 pr-6 text-sm text-gray-600">
                                            {item}
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute top-2 right-4 flex-none flex items-center justify-center w-4 h-4 rounded-full border peer-checked:bg-purple-600 text-white peer-checked:text-white duration-200">
                                    <svg className="w-2.5 h-2.5" viewBox="0 0 12 10"><polyline fill="none" stroke-width="2px" stroke="currentColor" stroke-dasharray="16px" points="1.5 6 4.5 9 10.5 1"></polyline></svg>
                                </div>
                            </label>
                        </li>
                    ))
                }
            </ul>
        </div>
        </div>
        <div className='pt-10  '>
        <h2 className="text-gray-700 font-medium">Description</h2>
            <p className='text-gray-500 pt-2 text-[15px]' dangerouslySetInnerHTML={{ __html: product?.description ?? '' }} />  
        </div> 
        <div className='pt-10  '>
          <h2 className="text-gray-700 font-medium">Promo code</h2>
          <div className="pt-2 ">
            <div className="lg:w-[20rem] md:w-[20rem] w-[100]"> 
              <div className="flex  border rounded-sm border-slate-300 ">
                  <input className="px-4 h-[32px]  text-[15px] w-full outline-none focus:outline-none active:outline-none placeholder:text-[13px]" type="text"  placeholder="Enter promo code" aria-label="Enter promo code" />
                  <button className=" pr-4 text-purple-600 text-[14px]">Check</button>
              </div>
            </div>
          </div>
        </div> 
        <div className='pt-10  '>
          <h2 className="text-gray-700 font-medium">Select your payment method</h2>
          <div className="pt-2 ">
            <PaymentOptions/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductOverviews
