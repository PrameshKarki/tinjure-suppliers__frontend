import { Box, BreadcrumbItem, BreadcrumbLink, Breadcrumb as ChakraBreadcrumb } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiOutlineHome } from 'react-icons/ai'

const Breadcrumb = () => {
  const router = useRouter()
  const pathSegments = router.asPath.split('/').filter((segment) => segment !== '')

  return (
    <Box bg={'white'} px={20} py={1}>
      <ChakraBreadcrumb>
        <BreadcrumbItem>
          <Link href='/'>
            <AiOutlineHome size={20} />
          </Link>
        </BreadcrumbItem>
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join('/')}`
          return (
            <BreadcrumbItem key={path}>
              <BreadcrumbLink href={path}>{segment}</BreadcrumbLink>
            </BreadcrumbItem>
          )
        })}
      </ChakraBreadcrumb>
    </Box>
  )
}

export default Breadcrumb
