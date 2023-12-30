import React, { useState } from "react";
import Catalog from "../features/Catalog/Catalog.tsx";
import ProductNav from "../components/ProductsNavBar/ProductNav.component.tsx";

function Products() {
  

  return (
    <>
      <ProductNav />
      <Catalog />
    </>
  );
}

export default Products;
