import {
  Box,
  Center,
  chakra,
  Flex,
  Grid,
  GridItem,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'600'} fontSize='16px' mb={1} color={'white'}>
      {children}
    </Text>
  )
}

const SocialButton = ({ children, label, href }: { children: ReactNode; label: string; href: string }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box
      px='5'
      py='10'
      bg='#103755'
      color='#f1f1f1'
      sx={{
        a: {
          fontSize: '15px',
        },
      }}
    >
      <Grid
        templateColumns={{
          xl: 'repeat(7, 1fr)',
          md: 'repeat(2, 1fr)',
          base: '1fr',
        }}
        gap={6}
      >
        <GridItem
          colSpan={{
            lg: 3,
            md: 2,
            base: 'auto',
          }}
        >
          <Stack>
            <Flex gap='4' alignItems={'center'}>
              <Image src={'/logo.png'} alt='Google Play Badge' width={50} />
              <Box color='white'>
                <Text fontWeight={'600'} fontSize='17px'>
                  Tinjure Suppliers
                </Text>
                <Text fontWeight={'600'} fontSize='15px'>
                  Itahari-06, Sangit-Chowk near Sanima Bank, Sunsari
                </Text>
              </Box>
            </Flex>
            <Text pt='1' fontSize={'15px'}>
              Fashion at its Finest: Discover curated collections, timeless designs, and trendy essentials for your
              ultimate style statement.
              <br />
              Discover curated collections that inspire, empower, and embrace your unique individuality. From chic
              classics to cutting-edge trends, find garments crafted with passion and attention to detail. Express your
              confidence, capture your identity, and create a wardrobe that tells your story.
            </Text>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack>
            <ListHeader> Quick Links</ListHeader>
            <Link href={'#'}>Home</Link>
            <Link href={'#'}>About us</Link>
            <Link href={'#'}>Contact us</Link>
            <Link href={'#'}> Privacy Policy</Link>
            <Link href={'#'}> Terms and conditions</Link>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Payments</Link>
            <Link href={'#'}>Shipping</Link>
            <Link href={'#'}>Cancellation & Returns</Link>
            <Link href={'#'}>Report Infringement</Link>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack>
            <ListHeader>Contact us</ListHeader>
            <Link href={'#'}>
              Call :
              <a href='tel:9842473580' target='_blank'>
                9849016737 /
              </a>
              <a href='tel:9862012561'> 9862012561</a>
            </Link>
            <Link href={'#'}>
              Email :
              <a href='mailto:info@tinjere.con' target='_blank'>
                info@Tinjure.com
              </a>
            </Link>
            <Link href={'#'}>
              Email :
              <a href='mailto:support@tinjere.con' target='_blank'>
                support@Tinjure.com
              </a>
            </Link>
            <Link href={'#'}>
              <a href='https://goo.gl/maps/EESWR781pmdNsbL56?coh=178573&entry=tt' target='_blank'>
                Itahari-06, Sangit-Chowk near Sanima Bank, Sunsari
              </a>
            </Link>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack
            sx={{
              img: {
                border: '1px solid #f1f1f1',
                borderRadius: 2,
              },
            }}
          >
            <ListHeader>Install App</ListHeader>
            <a href='https://play.google.com/store/apps/details?id=np.com.tinjuresuppliers' target='_blank'>
              <Image p='0' src={'/google-play-badge.png'} alt='Google Play Badge' width='165px' objectFit='cover' />
            </a>
            <Image p='0' src={'/app-store-badge.png'} alt='Google Play Badge' width='165px' objectFit='cover' />
          </Stack>
        </GridItem>
      </Grid>
      <Box pt='10'>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Text fontSize={'sm'} textAlign={'center'}>
            Developed by
            <a href='https://github.com/PrameshKarki' target='_blank'>
              &nbsp;Pramesh Karki&nbsp;
            </a>
            and
            <a href='https://github.com/ibijayashah' target='_blank'>
              &nbsp;Bijaya Shah
            </a>
          </Text>
        </Flex>
        <Center pt='5'>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={'tiktok'} href={'#'}>
              <FaTiktok />
            </SocialButton>
          </Stack>
        </Center>

        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2023 Tinjure Suppliers. All rights reserved
        </Text>
      </Box> 
    </Box>
  )
}
