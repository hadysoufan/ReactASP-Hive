import React from "react";
import { Product } from "../../app/models/products";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";


interface Props {
  product: Product;
}

function ProductsCard({ product }: Props) {
  return (
    <>

      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#e67b05" }}>
              {product.name.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={product.name}
          titleTypographyProps={{
            sx: { fontWeight: "800", color: "#ff8906" },
          }}
        />
        <CardMedia
          sx={{ height: 140, backgroundSize: "contain", bgcolor: "#ffedd3" }}
          image={product.image}
          title={product.name}
        />
        <CardContent>
          <Typography
            gutterBottom
            color="secondary"
            variant="h5"
            sx={{ fontWeight: "800", color: "#ff8906" }}
          >
            ${(product.price / 100).toFixed(2)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.brand} / {product.type}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" sx={{ fontWeight: "700", color: "#ff8906" }}>
            Add to card
          </Button>
          <Button
            component={Link}
            to={`/hive/product/${product.id}`}
            size="small"
            sx={{ fontWeight: "700", color: "#b36004" }}
          >
            View
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default ProductsCard;
