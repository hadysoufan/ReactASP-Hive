import React, { useEffect, useState } from "react";
import { Basket } from "../../app/models/basket.ts";
import agent from "../../app/api/agent.ts";
import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Loader from "../../components/Loader/Loader.component.jsx";
import ProductNav from "../../components/ProductsNavBar/ProductNav.component.tsx";
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function BasketPage() {
    const [loading, setLoading] = useState(true);
    const [basket, setBasket] = useState<Basket | null>(null);
    const [totalQuantity, setTotalQuantity] = useState<number>(0);
  
    useEffect(() => {
      agent.Baskets.get()
        .then((basket) => {
          setBasket(basket);
          calculateTotalQuantity(basket);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }, []);
  
    const calculateTotalQuantity = (basket: Basket | null) => {
      if (!basket) return;
      const quantity = basket.items.reduce((total, item) => total + item.quantity, 0);
      setTotalQuantity(quantity);
    };
  

  if (loading) return <Loader />;

  if (!basket)
    return <Typography variant="h3">Your basket is empty </Typography>;

  return (
    <>
      <ProductNav totalQuantity={totalQuantity} />

      <TableContainer  sx={{m: '8rem auto', width: '75%' }}  component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="right">SubTotal</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {basket.items.map((item) => (
              <TableRow
                key={item.productId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box display='flex' alignItems='center'>
                    <img src={item.pictureUrl} alt={item.name} style={{height: 50, marginRight: 20}} />
                    <span>{item.name}</span>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  ${(item.price / 100).toFixed(2)}
                </TableCell>
                <TableCell align="center">
                  <IconButton color='error'>
                      <RemoveIcon />
                  </IconButton>
                  
                  {item.quantity}
                  
                  <IconButton color='secondary'>
                      <AddIcon />
                  </IconButton>
                  
                  </TableCell>
                <TableCell align="right">
                  ${(item.price * item.quantity / 100).toFixed(2)}
                </TableCell>
                <TableCell align="right">
                  <IconButton color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default BasketPage;
