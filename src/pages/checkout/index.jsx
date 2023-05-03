import {
  Box,
  Card,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  VStack
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import CartDetails from "../../components/carts/molecules/CartDetails";

const Checkout = () => {
  return (
    <section className="cart-section px-20 mt-5">
      <Flex gap={4}>
        <Stack width={"70%"}>
          <Box bg="white" borderRadius="lg">
            <Box m={8} color="#0B0E3F">
              <VStack spacing={5} alignItems={"flex-start"}>
                <Text fontSize={20}>Contact Information</Text>
                <Flex width={"100%"} gap={2}>
                <FormControl width={"50%"}>
                  <FormLabel>E-Mail</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement pointerEvents="none">
                      <MdOutlineEmail color="gray.800" />
                    </InputLeftElement>
                    <Input type="text" size="md" />
                  </InputGroup>
                </FormControl>
                
                <FormControl width={"50%"}>
                  <FormLabel>Contact Number</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement pointerEvents="none">
                      <BsPerson color="gray.800" />
                    </InputLeftElement>
                    <Input type="text" size="md" />
                  </InputGroup>
                </FormControl>
                </Flex>
              </VStack>
              <VStack spacing={5} alignItems={"flex-start"} mt={10}>
                <Text fontSize={20}>Shipping Information</Text>
                <Flex width={"100%"} gap={2}>
                <FormControl width={"50%"}>
                  <FormLabel>First Name</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <Input type="text" size="md" />
                  </InputGroup>
                </FormControl>
                
                <FormControl width={"50%"}>
                  <FormLabel>Last Name</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <Input type="text" size="md" />
                  </InputGroup>
                </FormControl>
                </Flex>
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <Input type="text" size="md" />
                  </InputGroup>
                </FormControl>
              </VStack>
              <Box>
                <Text fontSize={20} mt={10}>
                  Payment Method
                </Text>
                <Flex  pt={3}>
                  <Card position={"relative"} border={"1px"} borderColor={"orange"}>
                      <Checkbox colorScheme='orange' defaultChecked pos={"absolute"}  top={2} right={2}/>
                  <Box width={180} height={120} >
                    <Image src={"/cash_on_delivery.png"} fill  style={{objectFit:"contain"}} aria-label="Cash on Delivery"/>
                    </Box>
                  </Card>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Stack>
        <Box width={"50%"}>
          <CartDetails direction={"column"} />
        </Box>
      </Flex>
    </section>
  );
};

export default Checkout;
