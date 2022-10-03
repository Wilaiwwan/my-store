import { Box, Card, Grid } from "@mui/material";
import React from "react";
import { sliderItems } from "../data";

export default function Promote() {
  return (
    <Grid container sx={{ backgroundColor: "#fcf1ed" }}>
      <Grid item xs={12} lg={6}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={sliderItems[0].img}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
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
          <h1 style={{ fontWeight: "200" }}>{sliderItems[0].title}</h1>
          <p style={{ margin: "20px 0px" }}>{sliderItems[0].desc}</p>
        </div>
      </Grid>
    </Grid>
  );
}
