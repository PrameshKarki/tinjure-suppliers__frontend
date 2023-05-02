import {
  Box,
  Button,
  Divider,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { colors } from "../../../constants/colors";
import CartListItem from "../atoms/CartListItem";

interface IProps {
  triggerElement: ReactNode;
}

const CartList = (props: IProps) => {
  const router = useRouter();
  const { triggerElement } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Popover isOpen={isOpen} onClose={onClose}>
      <PopoverTrigger>
        <Box onClick={onOpen}>{triggerElement}</Box>
      </PopoverTrigger>
      <PopoverContent zIndex={50}>
        <PopoverArrow />
        <PopoverHeader>Your Cart</PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody>
          <Stack>
            <Box maxH={200} overflowY={"scroll"}>
              {new Array(5).fill(0).map((_, index) => (
                <CartListItem key={index} />
              ))}
            </Box>
            <Divider />
            <Flex justifyContent={"space-between"} px={4}>
              <Text
                fontWeight={"semibold"}
                textColor={"gray.600"}
                fontSize={15}
              >
                Sub Total
              </Text>
              <Text>Rs. 2,000</Text>
            </Flex>
            <Divider />
            <Flex justifyContent={"space-between"} px={4} gap={2}>
              <Button
                width={"50%"}
                fontWeight={"normal"}
                textColor={"white"}
                bg={colors.orange}
                _hover={{ bg: colors.orange }}
                height={9}
                onClick={() => router.push("/carts")}
              >
                View Cart
              </Button>
              <Button
                width={"50%"}
                fontWeight={"normal"}
                bg={colors.blue}
                textColor={"white"}
                _hover={{ bg: colors.blue }}
                height={9}
                onClick={() => router.push("/checkout")}
              >
                Checkout
              </Button>
            </Flex>
            <Text
              mt={2}
              textDecoration={"underline"}
              textAlign={"center"}
              fontWeight={"thin"}
              textColor={"gray.600"}
              cursor={"pointer"}
              onClick={onClose}
            >
              Continue Shopping
            </Text>
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default CartList;
