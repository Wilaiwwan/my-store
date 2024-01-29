import { Container } from "@mui/material";
import React from "react";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/Header/Navbar";

export default function AuthLayout(props) {
  return (
    <>
      <Navbar />
      <Container style={{ minHeight: "90vh" }}>{props.children}</Container>
      <Footer />
    </>
  );
}
