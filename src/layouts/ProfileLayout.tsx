import { Flex, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import ProfileSidebar from "../components/profile/molecules/ProfileSidebar";

interface IProps {
  children: ReactNode;
}

const ProfileLayout = (props: IProps) => {
  const { children } = props;
  return (
    <section className="profile-section px-40 mt-5">
      <Flex gap={4} minH={500}>
        <ProfileSidebar />
        <VStack width={"100%"} bg={"white"} p={4} alignItems={"flex-start"}>
          {children}
        </VStack>
      </Flex>
    </section>
  );
};

export default ProfileLayout;
