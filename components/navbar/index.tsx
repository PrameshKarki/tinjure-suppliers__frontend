'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import TopNav from './TopNav'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <TopNav />
      <nav x-data='{ isOpen: false }' className='relative bg-text-slate-100 shadow  '>
        <div className='px-6 py-3 mx-auto'>
          <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center'>
            <div className='flex items-center justify-between  '>
              <div className='flex items-center aligns-center justify-between'>
                <Link href='/'>
                  <div className='flex gap-2 justify-start   align-bottom'>
                    <Image width={30} height={50} src='/assets/icons/logo.png' alt='logo' />
                    <h3 className='text-[20px] font-[700] text-[#c24a04]'>Tinjure Suppliers</h3>
                  </div>
                </Link>

                <div className='hidden mx-10 lg:block'>
                  <div className='relative'>
                    <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                      <svg className='w-5 h-5 text-gray-400' viewBox='0 0 24 24' fill='none' width={50}>
                        <path
                          d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        ></path>
                      </svg>
                    </span>

                    <input
                      type='text'
                      className='lg:w-[40rem] w-full py-auto h-[38px] pl-10 pr-4 text-gray-700  border-solid border border-blue-600 rounded bg-slate-100
                      hover:border-dark-midnight-blue focus:border-dark-midnight-blue active:border-dark-midnight-blue focus:outline-none placeholder:text-[14px] '
                      placeholder='Search for product, brands and name'
                    />
                  </div>
                </div>
              </div>
              <div className='flex lg:hidden'>
                <button
                  type='button'
                  className='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
                  aria-label='toggle menu'
                  onClick={toggleNavbar}
                >
                  {isOpen ? <IoMdMenu size='28' /> : <IoMdClose size='28' />}
                </button>
              </div>
            </div>

            <div className={`${isOpen ? 'lg:block hidden' : 'block'}`}>
              <div className='lg:pt-0 pt-5'>
                <div className='flex flex-col lg:flex-row '>
                  <Link
                    href={'#'}
                    className='flex gap-2  items-center my-2 text-sm leading-5 text-gray-800 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline lg:mx-4 lg:my-0'
                  >
                    <AiOutlineHeart /> Wishlists
                  </Link>
                  <Link
                    href={'#'}
                    className='flex gap-2  items-center my-2 text-sm leading-5 text-gray-800 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline lg:mx-4 lg:my-0'
                  >
                    <AiOutlineShoppingCart /> Cart
                  </Link>
                  <Link
                    href={'#'}
                    className='flex gap-2  items-center my-2 text-sm leading-5 text-gray-800 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline lg:mx-4 lg:my-0'
                  >
                    <AiOutlineUser /> Profile
                  </Link>
                </div>

                <div className='my-4 lg:hidden'>
                  <div className='relative'>
                    <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                      <svg className='w-5 h-5 text-gray-400' viewBox='0 0 24 24' fill='none'>
                        <path
                          d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        ></path>
                      </svg>
                    </span>

                    <input
                      type='text'
                      className='lg:w-[40rem] w-full py-auto h-[38px] pl-10 pr-4 text-gray-700   border-solid border border-blue-600 rounded 
                      bg-slate-100 hover:border-dark-midnight-blue focus:border-dark-midnight-blue active:border-dark-midnight-blue focus:outline-none placeholder:text-[14px] '
                      placeholder='Search for product, brands and name'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${isOpen ? 'lg:block hidden' : 'block'}`}>
            <div className='mt-3 lg:pt-2 flex lg:gap-3 gap-5 whitespace-nowrap overflow-y-auto lg:flex-row flex-col lg:pl-3 pl-0'>
              {menu?.map((item, index: number) => {
                return (
                  <Link
                    className='mr-4 text-sm leading-5 capitalize font-[500] text-gray-800 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline lg:my-0'
                    href={item?.href}
                    key={index}
                  >
                    {item?.name}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

const menu = [
  {
    name: 'Men',
    href: '#',
  },
  {
    name: 'Women',
    href: '#',
  },
  {
    name: 'Kids',
    href: '#',
  },
  {
    name: 'Home & Living',
    href: '#',
  },
  {
    name: 'Beauty',
    href: '#',
  },
  {
    name: 'Ethnic wear',
    href: '#',
  },
  {
    name: 'Innerwear',
    href: '#',
  },
  {
    name: 'Watches',
    href: '#',
  },
  {
    name: 'Grooming essentials',
    href: '#',
  },
  {
    name: 'Footwear',
    href: '#',
  },
  {
    name: 'Bags, belts & wallets',
    href: '#',
  },
  {
    name: 'Work wear',
    href: '#',
  },
  {
    name: 'Handbags',
    href: '#',
  },
  {
    name: 'Home furnishings',
    href: '#',
  },
]
