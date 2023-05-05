import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

const ProfileCard = () => {
  return (
    <>
      <Flex gap={4}>
        <Box width={150} height={150} pos={"relative"}>
          <Image
            src={"/man.png"}
            fill
            alt="Man Image"
            style={{ objectFit: "contain", borderRadius: "50%" }}
          />
        </Box>
        <VStack alignItems={"flex-start"}>
          <Text>Tinjure Suppliers</Text>
          <Text>tinjuresuppliers@gmail.com</Text>
          <Text>+977-9800000000</Text>
          <Text>Male</Text>
          <Text>28 Oct 2020</Text>
        </VStack>
      </Flex>
    </>
  );
};

export default ProfileCard;
