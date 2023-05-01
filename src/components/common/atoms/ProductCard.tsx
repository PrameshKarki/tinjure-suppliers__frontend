import { Badge, Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { ProductSchema } from "../../__generated__/graphql";

interface IProps {
  product?: ProductSchema;
}

export const ProductCard = (props: IProps) => {
  const { product } = props;
  return (
    <Link href={"/products/test"}>
      <Box
        py={3}
        px={2}
        mx={1}
        textAlign={"center"}
        position={"relative"}
        background={"white"}
        shadow={"sm"}
        cursor={"pointer"}
      >
        <Badge
          colorScheme="green"
          position={"absolute"}
          zIndex={5}
          px={2}
          top={2}
          right={2}
        >
          10% Off
        </Badge>

        <Image
          src={"/product.jpeg"}
          width={500}
          height={100}
          alt="Product Image"
          className="hover:scale-110 transform transition-all duration-500"
        />
        <Text
          fontWeight={"light"}
          fontSize={16}
          color={"gray.600"}
          _hover={{ color: "black" }}
        >
          Apple Macbook Air2 very good laptop
        </Text>
        <Text fontWeight={"semibold"} fontSize={20} my={2}>
          Rs. 2,000
        </Text>
      </Box>
    </Link>
  );
};

export default ProductCard;
