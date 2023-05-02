import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { CategorySchema } from "../../../__generated__/graphql";

interface IProps {
  category?: CategorySchema;
  src: string;
  title: string;
}

const CategoryItem = (props: IProps) => {
  const { category, src, title } = props;

  return (
    <Box textAlign={"center"}>
      <Image
        src={src}
        width={120}
        height={180}
        alt="Category"
        className="rounded-2xl hover:scale-110 transform transition-all duration-500"
      />
      <Text fontSize={16} color={"gray.600"} _hover={{ color: "black" }} my={2}>
        {title}
      </Text>
    </Box>
  );
};

export default CategoryItem;
