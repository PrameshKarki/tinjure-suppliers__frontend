import { Grid } from "@chakra-ui/react";
import ProductCard from "../atoms/ProductCard";

interface IColumnCount {
  base?: number;
  md?: number;
  lg?: number;
}

interface IProps {
  column?: IColumnCount;
}

const ProductsGrid = (props: IProps) => {
  const { column } = props;
  return (
    <Grid
      templateColumns={{
        base: `repeat(${column?.base ?? 1}, 1fr)`,
        md: `repeat(${column?.md ?? 2}, 1fr)`,
        lg: `repeat(${column?.lg ?? 6}, 1fr)`,
      }}
      gridGap={"20px 2px"}
    >
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Grid>
  );
};

export default ProductsGrid;
