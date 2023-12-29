import React, { useEffect, useState } from "react";
import { Product } from "../../app/models/products";
import ProductList from "./ProductList.tsx";
import axios from "axios";
import Loader from "../../components/Loader/Loader.component.jsx";


function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <ProductList products={products} />
    </>
  );
}

export default Catalog;
