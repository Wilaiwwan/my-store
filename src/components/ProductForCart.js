import { Card, Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export default function ProductForCart(props) {
  const item = [];
  item.push(props?.item);

  const [addItem, setAddItem] = useState(props?.item?.total);

  const handleChangeProduct = (total) => {
    setAddItem(total);

    const updateProduct = props?.productInCart.map((item) =>
      item.id === props?.id
        ? {
            ...item,
            sumPrice: item.price * total,
            total: total,
            del: total <= 0 ? true : false,
          }
        : item
    );

    localStorage.setItem("Products", JSON.stringify(updateProduct));
    props.setProductInCart(updateProduct);
  };

  return (
    <Card sx={{ margin: "10px 0px", padding: "10px" }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={1}
            sx={{
              flex: 1,
              margin: "10px",
              minWidth: "250px",
              maxWidth: "250px",
              height: "350px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f5fbfd",
            }}
          >
            <img src={props?.item?.img} style={{ width: "200px" }} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{ display: "flex", flexDirection: "column", width: "70%" }}
            >
              <span>
                <b>Product:</b> &nbsp; {props?.item?.title}
              </span>

              <span>
                <b>description:</b> &nbsp;{props?.item?.desc}
              </span>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "700",
                }}
              >
                <RemoveIcon onClick={() => handleChangeProduct(addItem - 1)} />
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
                <AddIcon onClick={() => handleChangeProduct(addItem + 1)} />
              </div>
              <p style={{ fontWeight: "200", fontSize: "30px" }}>
                $ {props?.item?.price}
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
}
