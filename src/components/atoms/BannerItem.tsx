import { Box } from "@chakra-ui/react";
import Image from "next/image";

const BannerItem = () => {
  return (
    <Box width={"33%"} height={250} position={"relative"}>
      <Image
        src={"/banner.jpg"}
        fill
        alt="Banner Card"
        style={{ objectFit: "cover" }}
      />
    </Box>
  );
};

export default BannerItem;
