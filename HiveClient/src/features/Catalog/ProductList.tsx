import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Product } from "../../app/models/products";
import ProductsCard from "./ProductsCard.tsx";
import { Grid } from "@mui/material";

interface Props {
  products: Product[];
}

function ProductList({ products }: Props) {
  return (
    <>
      <Grid container spacing={2} style={{ marginTop: '8rem', marginLeft: '2rem' }}>
        {products.map((product) => (
          <Grid item xs={3} key={product.id}>
            <ProductsCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ProductList;
