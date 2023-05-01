import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { config } from "../../../configs/site";

interface IProps {
  src: string;
}

const BannerImage = (props: IProps) => {
  const { src } = props;
  return (
    <>
      <Box w={"100%"} h={config.bannerHeight} position={"relative"} my={7}>
        <Image
          src={src}
          fill
          alt="Offer Banner"
          style={{ objectFit: "cover" }}
        />
      </Box>
    </>
  );
};

export default BannerImage;
