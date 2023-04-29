import SectionHeader from "../atoms/SectionHeader";
import ProductsGrid from "../molecules/ProductsGrid";

interface IProps {
  heading: string;
  hasActionButton: boolean;
  actionButtonText?: string;
  actionButtonOnClick?: () => void;
}

const ProductsSection = (props: IProps) => {
  return (
    <section className="products__section">
      <SectionHeader {...props} />
      <ProductsGrid />
    </section>
  );
};

export default ProductsSection;
