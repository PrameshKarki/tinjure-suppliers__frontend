import Image from 'next/image'
import Link from 'next/link'

const Menu = () => {
  return (
    <div className='text-slate-300 grid lg:grid-cols-7 md:grid-cols-2 grid-cols-1 gap-10 border-b pb-7 border-b-gray-600 '>
      <div className='lg:col-span-3 md:col-span-2 col-span-1'>
        <div className='flex gap-3'>
          <Image src='/assets/icons/logo.png' alt='Google Play Badge' width={50} height={50} />
          <div>
            <h2 className='text-slate-100 text-[19px] font-[600] pb-1'>Tinjure Suppliers</h2>
            <p className='text-slate-100'>Itahari-06, Sangit-Chowk near Sanima Bank, Sunsari</p>
          </div>
        </div>
        <p className='pt-5 text-[15px] text-justify   '>
          Fashion at its Finest: Discover curated collections, timeless designs, and trendy essentials for your ultimate
          style statement.
          <br />
          Discover curated collections that inspire, empower, and embrace your unique individuality. From chic classics
          to cutting-edge trends, find garments crafted with passion and attention to detail. Express your confidence,
          capture your identity, and create a wardrobe that tells your story.
        </p>
      </div>
      <div className='text-[15px]'>
        <h2 className='text-slate-100 text-[17px] font-[600] pb-3'>Quick links</h2>
        <div className='flex flex-col gap-2'>
          <Link href={'#'} className='hover:text-slate-50'>
            Home
          </Link>
          <Link href={'#'} className='hover:text-slate-50'>
            About us
          </Link>
          <Link href={'#'} className='hover:text-slate-50'>
            Contact us
          </Link>
          <Link href={'#'} className='hover:text-slate-50'>
            Privacy Policy
          </Link>
          <Link href={'#'} className='hover:text-slate-50'>
            Terms and conditions
          </Link>
        </div>
      </div>
      <div className='text-[15px]'>
        <h2 className='text-slate-100 text-[17px] font-[600] pb-3'>Support</h2>
        <div className='flex flex-col gap-2'>
          <Link href={'#'} className='hover:text-slate-50'>
            Payments
          </Link>
          <Link href={'#'} className='hover:text-slate-50'>
            Shipping
          </Link>
          <Link href={'#'} className='hover:text-slate-50'>
            Cancellation & Returns
          </Link>
          <Link href={'#'} className='hover:text-slate-50'>
            Report Infringement
          </Link>
        </div>
      </div>
      <div className='text-[15px] '>
        <h2 className='text-slate-100 text-[17px] font-[600] pb-3'>Contact us</h2>
        <div className='flex flex-col gap-2'>
          <div className='hover:text-slate-50'>
            Call :&nbsp;
            <Link href='tel:9842473580' target='_blank'>
              9849016737 /
            </Link>
            <a href='tel:9862012561' target='_blank'>
              9862012561
            </a>
          </div>
          <div className='hover:text-slate-50'>
            Email :&nbsp;
            <Link href='mailto:info@tinjere.con' target='_blank'>
              info@Tinjure.com
            </Link>
          </div>
          <div className='hover:text-slate-50'>
            Email :&nbsp;
            <Link href='mailto:support@tinjere.con' target='_blank'>
              support@Tinjure.com
            </Link>
          </div>
          <div className='hover:text-slate-50'>
            <Link href='https://goo.gl/maps/EESWR781pmdNsbL56?coh=178573&entry=tt' target='_blank'>
              Itahari-06, Sangit-Chowk near Sanima Bank, Sunsari
            </Link>
          </div>
        </div>
      </div>
      <div className='text-[15px] '>
        <h2 className='text-slate-100 text-[17px] font-[600] pb-3'>Install App</h2>
        <div className='flex flex-col gap-2'>
          <div className='hover:text-slate-50'>
            <Image
              className='cursor-pointer border border-red-50 rounded-sm opacity-75 hover:opacity-100 transition ease-in-out delay-75'
              src='/assets/icons/google-play-badge.png'
              width={150}
              height={100}
              alt='google_play_badge'
            />
          </div>
          <div className='hover:text-slate-50 '>
            <Image
              className='cursor-pointer border border-red-50 rounded-sm opacity-75 hover:opacity-100 transition ease-in-out delay-75'
              src='/assets/icons/app-store-badge.png'
              width={150}
              height={100}
              alt='app-store-badge'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
