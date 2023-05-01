import ProductDetails from "../../components/common/molecules/ProductDetails";
import ProductsSection from "../../components/common/organisms/ProductsSection";

const ProductDetailsPage = () => {
  return (
    <section className="product-details__section px-20">
      <ProductDetails />
      <ProductsSection
        heading="Similar Products"
        hasActionButton
        actionButtonText="Show More"
        actionButtonOnClick={() => {}}
      />
    </section>
  );
};

export default ProductDetailsPage;
