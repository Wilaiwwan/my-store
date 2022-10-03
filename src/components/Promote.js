import { Card, Grid } from "@mui/material";
import React from "react";
import { sliderItems } from "../data";

export default function Promote() {
  return (
    <Grid container sx={{ backgroundColor: "#fcf1ed" }}>
      <Grid
        item
        xs={12}
        lg={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <img
          src={sliderItems[0].img}
          style={{
            height: "50vh",
            //   position: "absolute",
            //   zIndex: 0,
          }}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "pink",
            height: "100%",
          }}
        >
          <h1 style={{fontWeight:"200"}}>{sliderItems[0].title}</h1>
          <p style={{margin:"20px 0px"}}>{sliderItems[0].desc}</p>
        </div>
      </Grid>
    </Grid>
  );
}
