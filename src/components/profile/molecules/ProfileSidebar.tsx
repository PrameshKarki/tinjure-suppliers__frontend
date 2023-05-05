import {
  Box,
  Heading,
  List,
  ListIcon,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { BsCartCheck, BsHeart, BsKey, BsPerson } from "react-icons/bs";
import { FaRegAddressBook } from "react-icons/fa";

const ProfileSidebar = () => {
  return (
    <VStack width={"20%"} bg={"white"} p={4} alignItems={"flex-start"}>
      <Box>
        <Link href={"/profile"}>
          <Heading
            as={"h4"}
            fontSize={18}
            fontWeight={"semibold"}
            my={2}
            className="text-punch-700"
          >
            Profile
          </Heading>
        </Link>
        <List cursor={"pointer"}>
          <Link href={"/profile/information"}>
            <ListItem
              textColor={"gray.600"}
              fontSize={17}
              _hover={{ textColor: "black" }}
              my={1}
            >
              <ListIcon>
                <BsPerson size={20} />
              </ListIcon>
              Information
            </ListItem>
          </Link>

          <ListItem
            textColor={"gray.600"}
            fontSize={17}
            _hover={{ textColor: "black" }}
            my={1}
          >
            <ListIcon>
              <FaRegAddressBook size={20} />
            </ListIcon>
            Address Book
          </ListItem>
        </List>
      </Box>
      <Box>
        <Heading
          as={"h4"}
          fontSize={18}
          fontWeight={"semibold"}
          my={2}
          className="text-punch-700"
        >
          Orders
        </Heading>
        <List cursor={"pointer"}>
          <ListItem
            textColor={"gray.600"}
            fontSize={17}
            _hover={{ textColor: "black" }}
            my={1}
          >
            <ListIcon>
              <BsCartCheck size={20} />
            </ListIcon>
            My Orders
          </ListItem>
          <ListItem
            textColor={"gray.600"}
            fontSize={17}
            _hover={{ textColor: "black" }}
            my={1}
          >
            <ListIcon>
              <BsHeart size={20} />
            </ListIcon>
            My Wishlist
          </ListItem>
        </List>
      </Box>

      <Box>
        <Heading
          as={"h4"}
          fontSize={18}
          fontWeight={"semibold"}
          my={2}
          className="text-punch-700"
        >
          Security
        </Heading>
        <List cursor={"pointer"}>
          <ListItem
            textColor={"gray.600"}
            fontSize={17}
            _hover={{ textColor: "black" }}
            my={1}
          >
            <ListIcon>
              <BsKey size={20} />
            </ListIcon>
            Change Password
          </ListItem>
        </List>
      </Box>
    </VStack>
  );
};

export default ProfileSidebar;
