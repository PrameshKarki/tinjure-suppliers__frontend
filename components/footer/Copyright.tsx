import Link from 'next/link'
import { ReactNode } from 'react'
import { BsFacebook, BsInstagram, BsTiktok } from 'react-icons/bs'

const SocialLink = ({ icon, link }: { icon: ReactNode; link: string }) => {
  return (
    <div>
      <Link as={'a'} href={link} target='_blank' className='hover:text-white'>
        {icon}
      </Link>
    </div>
  )
}

const Copyright = () => {
  return (
    <div className='border-t border-t-gray-600 py-7     text-slate-300  flex md:gap-8 gap-3 md:flex-row justify-between items-center flex-col'>
      <p className='text-[13px] text-slate-300'>© 2023-24 All Rights Reserved, Tinjure suppliers</p>
      <div className='flex gap-5'>
        <SocialLink icon={<BsFacebook />} link='#' />
        <SocialLink icon={<BsInstagram />} link='#' />
        <SocialLink icon={<BsTiktok />} link='#' />
      </div>
    </div>
  )
}

export default Copyright