import {
  Box,
  Container,
  Stack,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaMap,
  FaTiktok,
} from "react-icons/fa";

interface ISocialMediaProps {
  children: ReactNode;
  label: string;
  href: string;
}
const SocialButton = (props: ISocialMediaProps) => {
  const { children, href, label } = props;
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Copyright = () => {
  return (
    <Box borderTopWidth={1} borderStyle={"solid"}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ md: "space-between" }}
        align={{ md: "center" }}
      >
        <Text>
          © {new Date().getFullYear()} Tinjure Suppliers. All rights reserved
        </Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Facebook"} href={"#"}>
            <FaFacebook />
          </SocialButton>
          <SocialButton label={"Tiktok"} href={"#"}>
            <FaTiktok />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"}>
            <FaInstagram />
          </SocialButton>
          <SocialButton label={"Google"} href={"#"}>
            <FaGoogle />
          </SocialButton>
          <SocialButton label={"Map"} href={"#"}>
            <FaMap />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Copyright;
