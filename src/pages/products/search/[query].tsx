import { Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import ProductsGrid from "../../../components/common/molecules/ProductsGrid";

const SearchPage = () => {
    const router=useRouter();
    const {query}=router.query;
  return (
    <section className="cart-section px-20 mt-5">
      <Heading as={"h1"} fontSize={20} my={10}>
        Search Results for: {query}
      </Heading>
      <ProductsGrid />
    </section>
  );
};

export default SearchPage;
