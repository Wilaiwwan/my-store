import { Grid } from "@mui/material";
import React from "react";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";

export default function Footer() {
  const dynamicStyles = {
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Grid
      container
      sx={{
        width: "100%",
        backgroundColor: "teal",
        color: "white",
        display: "flex",
        justifyContent: "center",
        padding: "40px 0",
      }}
    >
      <Grid
        item
        xs={12}
        sm={10}
        md={6}
        sx={{
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h3 style={{ marginBottom: "20px", color: "#ffcc80" }}>Contact Us</h3>
        <div style={dynamicStyles}>
          <RoomIcon sx={{ marginRight: "5px", color: "#ffcc80" }} />
          <span>622 Tooktook, South Sea 98336</span>
        </div>
        <div style={dynamicStyles}>
          <LocalPhoneIcon sx={{ marginRight: "5px", color: "#ffcc80" }} />
          <span>089 820 8570</span>
        </div>
        <div style={dynamicStyles}>
          <MailIcon sx={{ marginRight: "5px", color: "#ffcc80" }} />
          <span>Wilaiwantph@gmail.com</span>
        </div>
        <p style={{ fontSize: "14px", marginTop: "20px" }}>
          Stay connected with us for the latest updates and promotions.
        </p>
        <p style={{ fontSize: "14px" }}>
          <a href="/">Home</a> | <a href="/privacy-policy">Privacy Policy</a>
        </p>
      </Grid>
    </Grid>
  );
}
