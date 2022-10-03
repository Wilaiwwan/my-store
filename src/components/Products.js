import React from "react";
import { popularProducts } from "../data";
import Product from "./Product";
import { useLocation, useNavigate } from "react-router-dom";

export default function Products() {
  const location = useLocation();

  const searchCate = location.pathname.slice(-1);

  console.log(searchCate);

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {popularProducts
        .filter((item) =>
          searchCate !== "/" ? item.cateId === +searchCate : popularProducts
        )
        .map((item) => (
          <Product item={item} key={item.id} />
        ))}
    </div>
  );
}
