import {
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Grid container sx={{ position: "sticky", top: 0, zIndex: 999 }}>
      <Paper
        elevation={3}
        sx={{ width: "100%", backgroundColor: "teal", color: "white" }}
      >
        <Container>
          <Grid
            container
            sx={{
              // height: { xs: "auto", sm: "70px" },
              // padding: { xs: 1.5, sm: 3 },
              padding: "10px",
              height: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Grid item xs={12} md={2} sx={{ flex: 1, alignItems: "center" }}>
              <h3>MY STORE</h3>
            </Grid>
            <Grid
              item
              xs={12}
              md={8}
              sx={{
                display: "flex",
                justifyContent: { xs: "start", md: "center" },
              }}
            >
              <div
                style={{
                  maxWidth: "65%",
                  flex: 1,
                  alignItems: "center",
                  flexWrap: "wrap",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <button
                  onClick={() => navigate("/")}
                  style={{
                    padding: "5px",
                    border: "0px",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    fontWeight: 500,
                    color: "white",
                  }}
                >
                  All Products
                </button>
                <button
                  onClick={() => navigate(`/Category/men's clothing/${1}`)}
                  style={{
                    padding: "5px",
                    border: "0px",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    fontWeight: 500,
                    color: "white",
                  }}
                >
                  men's clothing
                </button>
                <button
                  onClick={() => navigate(`/Category/women's clothing/${2}`)}
                  style={{
                    padding: "5px",
                    border: "0px",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    fontWeight: 500,
                    color: "white",
                  }}
                >
                  women's clothing
                </button>
                <button
                  onClick={() => navigate(`/Category/jewelery/${3}`)}
                  style={{
                    padding: "5px",
                    border: "0px",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    fontWeight: 500,
                    color: "white",
                  }}
                >
                  jewelery
                </button>
                <button
                  onClick={() => navigate(`/Category/electronics/${4}`)}
                  style={{
                    padding: "5px",
                    border: "0px",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    fontWeight: 500,
                    color: "white",
                  }}
                >
                  electronics
                </button>
              </div>
            </Grid>

            <Grid
              item
              xs={12}
              md={2}
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "start",
                  md: "end",
                },
              }}
            >
              <IconButton onClick={() => navigate("/Cart")}>
                <ShoppingCartIcon sx={{ color: "white" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Grid>
  );
}
