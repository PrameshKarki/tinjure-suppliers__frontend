import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import CartList from "../../carts/molecules/CartList";
import CartButtonWithBadge from "../atoms/CartButtonWithBadge";

const NavigationBar = () => {
  const router = useRouter();
  // TODO: Replace with actual type
  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      router.push(`/products/search/${e.target.value}`);
    }
  };

  return (
    <Box className="px-40 py-1" bg={"white"}>
      <Flex alignItems={"center"}>
        <Link href={"/"}>
          <Box width={300}>
            <Image src={"/logo.png"} width={50} height={50} alt="Logo" />
          </Box>
        </Link>
        <Box className="flex items-center">
          <InputGroup width={500}>
            <Input
              placeholder="Search Product"
              size="md"
              onKeyPress={handleKeyPress}
            />
            <InputRightElement className="bg-punch-500" color={"white"}>
              <AiOutlineSearch size={25} cursor={"pointer"} />
            </InputRightElement>
          </InputGroup>

          <Box
            className="flex items-center ml-3"
            color={"gray.600"}
            _hover={{ color: "black" }}
            cursor={"pointer"}
            onClick={() => router.push("/wishlists")}
          >
            <AiOutlineHeart size={20} />
            <Text ml={2} fontSize={15}>
              Wishlists
            </Text>
          </Box>
          <CartList triggerElement={<CartButtonWithBadge count={5} />} />
        </Box>
      </Flex>
    </Box>
  );
};

export default NavigationBar;
