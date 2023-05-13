import Link from 'next/link'

const TopNav = () => {
  return (
    <div className='border-b border-slate-300 py-1 mb-1 px-6  flex flex-wrap justify-between gap-2 text-[13px]'>
      <div>Call Us at 9849016737 / 9862012561</div>
      <div className='sm:flex gap-5 hidden'>
        <Link href={'#'}>Sell on Tinjure</Link>
        <Link href={'#'}>Track Order</Link>
      </div>
    </div>
  )
}

export default TopNav
