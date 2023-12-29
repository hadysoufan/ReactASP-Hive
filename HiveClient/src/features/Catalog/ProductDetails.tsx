import React, { useEffect, useState } from "react";
import ProductNav from "../../components/ProductsNavBar/ProductNav.component.tsx";
import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/products.ts";
import agent from "../../app/api/agent.ts";
import Loader from '../../components/Loader/Loader.component.jsx';

function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      agent.Products.details(id)
        .then((response) => setProduct(response))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [id]);

  if (loading) return <Loader />;

  return (
    <>
      <ProductNav />

    {product && (
         <Grid container spacing={6} sx={{mt: '8rem', ml: '2rem'}}>
         <Grid item xs={6}>
             <img src={product.image} alt={product.name} style={{width: '100%'}} />
         </Grid>

         <Grid item xs={6}>
            <Typography variant="h3" color='#ff8906'>{product.name}</Typography>
            <Divider sx={{mb: 2}} />
            <Typography variant="h4" color='#b36004'>${(product.price /100).toFixed(2)}</Typography>
            <TableContainer>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>Name:</TableCell>
                            <TableCell>{product.name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Desciption:</TableCell>
                            <TableCell>{product.description}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Type:</TableCell>
                            <TableCell>{product.type}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Brand:</TableCell>
                            <TableCell>{product.brand}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Quantity in stock:</TableCell>
                            <TableCell>{product.qtyInStock}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
         </Grid>
      </Grid>
    )}
    </>
  );
}

export default ProductDetails;
