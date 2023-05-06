import { Box } from '@chakra-ui/react'
import Menu from '../atoms/Menu'
const menu = {
  name: 'Programming',
  subMenu: [
    {
      name: 'Languages',
    },
    {
      name: 'Languages',
      subMenu: [
        {
          name: 'Javascript',
          subMenu: [
            {
              name: '2.7',
            },
            {
              name: '3+',
            },
          ],
        },
      ],
    },
  ],
}
const MenuBar = () => {
  return (
    <Box
      className='bg-astronaut-900'
      height={10}
      display={'flex'}
      gap={2}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Menu {...menu} />
      <Menu {...menu} />
      <Menu {...menu} />
      <Menu {...menu} />
      <Menu {...menu} />
      <Menu {...menu} />
      <Menu {...menu} />
    </Box>
  )
}

export default MenuBar
