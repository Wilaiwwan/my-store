import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Swal from "sweetalert2";

export default function Product() {
  const location = useLocation();
  const data = location.state;
  const item = [];
  item.push(data);

  const [addItem, setAddItem] = useState(1);
  const [productInCart, setproductInCart] = useState([]);

  useEffect(() => {
    const Products = JSON.parse(localStorage.Products || null);
    handleScrollToTop();

    if (Products) {
      setproductInCart(Products);
    }
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleAddToCart = () => {
    if (productInCart.length > 0) {
      const addPrice = item.map((item) => ({
        ...item,
        sumPrice: item.price * addItem,
        total: addItem,
        del: false,
      }));

      const updatePrice = productInCart?.map((item) =>
        item.id === data?.id
          ? {
              ...item,
              sumPrice: item.price * (+item.total + addItem),
              total: +item.total + addItem,
              del: addItem <= 0 ? true : false,
            }
          : item
      );

      const items1 = [...productInCart, addPrice[0]];
      const items2 = updatePrice;

      const items = productInCart.find((item) =>
        item.id === data?.id ? true : false
      );
      if (items) {
        console.log("2");
        localStorage.setItem("Products", JSON.stringify(items2));
      } else {
        console.log("1");

        localStorage.setItem("Products", JSON.stringify(items1));
      }

      alertStatus();
    } else {
      const addPrice = item.map((item) => ({
        ...item,
        sumPrice: item.price * addItem,
        total: addItem,
        del: false,
      }));
      const items = [...productInCart, addPrice[0]];
      localStorage.setItem("Products", JSON.stringify(items));

      alertStatus();
    }
  };

  const alertStatus = () => {
    Swal.fire({
      title: "success!",
      html: "<i>Add to cart</i>",
      icon: "success",
    });
  };

  return (
    <Box sx={{ display: "flex", padding: "50px" }}>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <div
            style={{
              flex: 1,
              backgroundColor: "#f5fbfd",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <img
              src={data.img}
              style={{
                width: "50%",
                height: "50%",
                // minHeight: "80vh",
                // objectFit: "cover",
              }}
            />
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box sx={{ padding: { xs: 0, md: "0px 50px" } }}>
            <h1 style={{ fontWeight: "200" }}>{data.title}</h1>
            <p style={{ margin: "20px 0px" }}>{data.desc}</p>
            <span style={{ fontWeight: "100", fontSize: "40px" }}>
              $ {data.price}
            </span>
            <Box
              sx={{
                width: { xs: "100%", md: "60%" },
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "30px",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "700",
                }}
              >
                <RemoveIcon onClick={() => setAddItem(addItem - 1)} />

                <span
                  style={{
                    minWidth: "30px",
                    width: "auto",
                    height: "30px",
                    borderRadius: "10px",
                    border: "1px solid teal",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0px 5px",
                    padding: "2px",
                  }}
                >
                  {addItem}
                </span>
                <AddIcon onClick={() => setAddItem(addItem + 1)} />
              </div>
              <button
                style={{
                  padding: "15px",
                  border: "2px solid teal",
                  backgroundColor: "white",
                  cursor: "pointer",
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: "#f8f4f4",
                  },
                }}
                onClick={() => handleAddToCart()}
              >
                ADD TO CART
              </button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
