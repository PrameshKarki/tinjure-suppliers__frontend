'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

const Breadcrumb = () => {
  const router = usePathname()
  const segments = router.split('/').slice(1)
  const searchParams = useSearchParams()
  const params = searchParams.get('name')
  const name = params && params.charAt(0).toUpperCase() + params.slice(1).toLowerCase()

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }

  const formatBreadcrumbLabel = (segment: string) => {
    return capitalize(segment).replaceAll('-', ' ')
  }
  return (
    <div className='md:flex hidden gap-2 items-start wrap  text-start text-[15px] pb-5'>
      <Link href={'/'}>
        <div className='text-gray-800'>Home</div>
      </Link>
      {segments?.slice(0)?.map((segment, index) => (
        <div key={index} className='text-gray-500 '>
          / {formatBreadcrumbLabel(segment)}
        </div>
      ))}{' '}
      {name && <div className='text-[15px] text-gray-500'> / {name?.replaceAll('-', ' ')}</div>}
    </div>
  )
}

export default Breadcrumb
