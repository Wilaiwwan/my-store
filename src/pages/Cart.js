import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductForCart from "../components/ProductForCart";
import Swal from "sweetalert2";

export default function Cart() {
  const [productInCart, setProductInCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);

  console.log(productInCart);

  const sumPrice = (Products) => {
    if (Products) {
      const sum = Products.filter((item) => !item.del)
        .map((item) => item.sumPrice)
        .reduce((prev, cur) => {
          return prev + parseInt(cur, 10);
        }, 0);

      setSubTotal(sum);
    } else {
      const sum = productInCart
        .filter((item) => !item.del)
        .map((item) => item.sumPrice)
        .reduce((prev, cur) => {
          return prev + parseInt(cur, 10);
        }, 0);

      setSubTotal(sum);
    }
  };

  useEffect(() => {
    const Products = JSON.parse(localStorage.Products || null);
    if (Products) {
      setProductInCart(Products);
      sumPrice(Products);
    }
  }, []);

  useEffect(() => {
    sumPrice();
  }, [productInCart]);

  const handleCheckOut = () => {
    Swal.fire({
      title: "success!",
      html: "<i>We will send you details via email.!</i>",
      icon: "success",
    });

    localStorage.removeItem("Products");
    window.location.reload(false);
  };

  return (
    <Grid container columnSpacing={1}>
      <Grid item xs={12} lg={9}>
        {productInCart
          .filter((item) => !item.del)
          .map((item, index) => (
            <ProductForCart
              item={item}
              key={index}
              id={item.id}
              setProductInCart={setProductInCart}
              productInCart={productInCart}
            />
          ))}
      </Grid>
      <Grid item xs={12} lg={3}>
        <Box
          sx={{
            flex: 1,
            border: "0.5px solid lightgray",
            borderRadius: "10px",
            padding: "20px",
            height: "30vh",
            position: "sticky",
            margin: "auto",
            top: "15%",
            zIndex: 2,
            width: "auto",
          }}
        >
          <h2 style={{ fontWeight: "200" }}>ORDER SUMMARY</h2>
          <div
            style={{
              margin: "30px 0px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Subtotal</span>
            <span>$ {subTotal}</span>
          </div>
          <button
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "black",
              color: "white",
              fontWeight: "600",
            }}
            onClick={() => handleCheckOut()}
          >
            CHECKOUT NOW
          </button>
        </Box>
      </Grid>
    </Grid>
  );
}
