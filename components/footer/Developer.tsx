import Link from 'next/link'

const Developer = () => {
  return (
    <div className='border-t border-t-gray-600   text-slate-300 py-4  flex justify-center'>
      <p className='text-[13px] flex gap-2'>
        Design and Develop by
        <Link href={'https://karkipramesh.com.np'} target='_blank' className='text-slate-100 hover:text-slate-50'>
          Pramesh Karki
        </Link>
        <Link href={'https://bijayashah.com.np'} target='_blank' className='text-slate-100 hover:text-slate-50'>
          Bijaya Shah
        </Link>
      </p>
    </div>
  )
}

export default Developer
