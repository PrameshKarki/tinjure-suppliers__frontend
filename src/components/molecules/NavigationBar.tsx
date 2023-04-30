import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import CartButtonWithBadge from "../atoms/CartButtonWithBadge";
import CartList from "./CartList";

const NavigationBar = () => {
  return (
    <Box className="px-40 py-1" bg={"white"}>
      <Flex alignItems={"center"}>
        <Box width={300}>
          <Image src={"/logo.png"} width={50} height={50} alt="Logo" />
        </Box>
        <Box className="flex items-center">
          <InputGroup width={500}>
            <Input placeholder="Search Product" size="md" />
            <InputRightElement className="bg-punch-500" color={"white"}>
              <AiOutlineSearch size={25} cursor={"pointer"} />
            </InputRightElement>
          </InputGroup>

          <Box
            className="flex items-center ml-3"
            color={"gray.600"}
            _hover={{ color: "black" }}
          >
            <AiOutlineHeart size={20} />
            <Text ml={2} fontSize={15}>
              Wishlist
            </Text>
          </Box>
          <CartList triggerElement={<CartButtonWithBadge count={5} />} />
        </Box>
      </Flex>
    </Box>
  );
};

export default NavigationBar;
