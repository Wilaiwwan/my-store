import { Box, Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Icon = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "10px",
};

export default function Product({ item }) {
  return (
    <Box>
      <Link
        to={{
          pathname: `/Product/${item.id}`,
        }}
        state={item}
      >
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
            position: "relative",
            transition: "all 0.5s ease",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#e9f5f5",
              transform: "scale(1.1)",
              zIndex: 2,
            },
          }}
        >
          <img src={item.img} style={{ height: "75%" }} />
        </Paper>
      </Link>
    </Box>
  );
}
