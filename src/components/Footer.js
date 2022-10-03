import { Grid } from "@mui/material";
import React from "react";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";

export default function Footer() {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        backgroundColor: "teal",
        color: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        item
        xs={12}
        sm={10}
        md={5}
        sx={{
          padding: "20px",
        }}
      >
        <h3 style={{ marginBottom: "30px" }}>Contact</h3>
        <div>
          <RoomIcon sx={{ marginRight: 2 }} />
          <span>622 Dixie Path , South Tobinchester 98336</span>
        </div>
        <div>
          <LocalPhoneIcon sx={{ marginRight: 2 }} />
          <span>089 556 5621</span>
        </div>
        <div>
          <MailIcon sx={{ marginRight: 2 }} />
          <span>Wilaiwantph@gmail.com</span>
        </div>
      </Grid>
    </Grid>
  );
}
