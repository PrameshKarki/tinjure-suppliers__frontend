import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import ReactImageMagnify from "react-image-magnify";
import { colors } from "../../../constants/colors";
import RatingBar from "../atoms/RatingBar";

const ProductDetails = () => {
  return (
    <Flex my={6} px={20} gap={10}>
      <Stack>
        <Box width={500} height={500} position={"relative"}>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Product Image",
                src: "/product.jpeg",
                isFluidWidth: true,
              },
              largeImage: {
                src: "/product.jpeg",
                width: 1200,
                height: 900,
              },
            }}
          />
        </Box>
        <Flex justifyContent={"center"} gap={2}>
          {new Array(5).fill(0).map((_, index) => (
            <Box width={100} height={100} position={"relative"} key={index}>
              <Image
                src={"/product.jpeg"}
                fill
                alt="Product Image"
                style={{
                  objectFit: "contain",
                }}
              />
            </Box>
          ))}
        </Flex>
      </Stack>

      {/* *Details Section */}
      <Stack gap={1}>
        <Heading as={"h2"} fontSize={27}>
          Zip Tote Basket is a very good product -200 mm hh
        </Heading>
        <Text fontSize={22}>Rs. 2000</Text>
        <RatingBar totalStars={5} />
        <Box>
          <Heading as={"h3"} fontSize={18} my={4}>
            Colors
          </Heading>
          <Flex gap={2}>
            <Box
              width={7}
              height={7}
              bg={"red.500"}
              rounded={"full"}
              cursor={"pointer"}
            ></Box>
            <Box
              width={7}
              height={7}
              bg={"blue.500"}
              rounded={"full"}
              cursor={"pointer"}
            ></Box>
            <Box
              width={7}
              height={7}
              bg={"green.500"}
              rounded={"full"}
              cursor={"pointer"}
            ></Box>
          </Flex>
        </Box>
        <Box>
          <Heading as={"h3"} fontSize={18} my={4}>
            Sizes
          </Heading>
          <Flex gap={2}>
            <Button variant={"outline"} cursor={"pointer"}>
              S
            </Button>
            <Button variant={"outline"} cursor={"pointer"}>
              XXS
            </Button>
            <Button variant={"outline"} cursor={"pointer"}>
              M
            </Button>
          </Flex>
        </Box>
        <Flex>
          <Heading as={"h3"} fontSize={18} my={4}>
            Quantity
          </Heading>
          <Flex gap={2} ml={5} alignItems={"center"}>
            <Button variant={"outline"} cursor={"pointer"}>
              -
            </Button>
            <Text fontSize={20} fontWeight={"bold"} mx={3}>
              1
            </Text>
            <Button variant={"outline"} cursor={"pointer"}>
              +
            </Button>
          </Flex>
        </Flex>

        <Flex>
          <Button
            background={colors.blue}
            textColor={"white"}
            _hover={{ backgroundColor: "none" }}
            _active={{ backgroundColor: "none" }}
            width={"300px"}
            my={10}
          >
            Add to Bag
          </Button>
          <IconButton
            background={"none"}
            icon={<AiOutlineHeart size={20} />}
            aria-label="wishlist"
            ml={5}
            my={10}
          />
        </Flex>
        <Stack>
          <Heading as={"h3"} fontSize={18} my={4}>
            Description
          </Heading>
          <Text fontSize={16}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </Text>
        </Stack>
        <Stack>
          <Heading as={"h3"} fontSize={18} my={2}>
            Highlights
          </Heading>
          <List>
            <ListItem>Very Good Product</ListItem>
            <ListItem>Water Proof</ListItem>
          </List>
        </Stack>

        <Box>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Features
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Care
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Stack>
    </Flex>
  );
};

export default ProductDetails;
