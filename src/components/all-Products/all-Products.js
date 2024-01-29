import React from "react";
import { popularProducts } from "../../data";
import Product from "../products/product";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

export default function Products() {
  const location = useLocation();

  const searchCate = location.pathname.slice(-1);

  console.log(searchCate);

  return (
    <Box
      sx={{
        padding: { xs: "10px 0px", md: "10px 50px", lg: "20px 30px" },
        display: "flex",
        flexWrap: "wrap",
        justifyContent: { xs: "center", md: "space-between", lg: "start" },
      }}
    >
      {popularProducts
        .filter((item) =>
          searchCate !== "/" ? item.cateId === +searchCate : popularProducts
        )
        .map((item) => (
          <Product item={item} key={item.id} />
        ))}
    </Box>
  );
}
