import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import CartDetails from "../../components/carts/molecules/CartDetails";

const Checkout = () => {
  return (
    <section className="cart-section px-20 mt-5">
      <Flex>
        <Stack width={"70%"}></Stack>
        <Box width={"50%"}>
          <CartDetails direction={"column"} />
        </Box>
      </Flex>
    </section>
  );
};

export default Checkout;
