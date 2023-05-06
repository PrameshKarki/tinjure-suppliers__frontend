import { Flex } from '@chakra-ui/react'
import CategoryItem from '../atoms/CategoryItem'

const Categories = () => {
  return (
    <Flex my={10} justifyContent={'center'} gap={4}>
      <CategoryItem src='/man.png' title="Men's Wear" />
      <CategoryItem src='/woman.png' title="Woman's Wear" />
      <CategoryItem src='/mobile.png' title='Mobile' />
      <CategoryItem src='/man.png' title="Men's Wear" />
      <CategoryItem src='/woman.png' title="Woman's Wear" />
      <CategoryItem src='/mobile.png' title='Mobile' />
    </Flex>
  )
}

export default Categories
