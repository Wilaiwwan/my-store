import React, { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { sliderItems } from "../../data";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        // flexDirection: "row",
        // alignItems: "center",
      }}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: " #fff7f7",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${(props) => props.direction === "left" && "10px"}`,
          right: `${(props) => props.direction === "right" && "10px"}`,
          margin: "auto",
          cursor: "pointer",
          opacity: 0.5,
          zIndex: 2,
        }}
        direction="left"
      >
        <ArrowRightIcon />
      </div>
      <div
      // style={{
      //   height: "100%",
      //   display: "flex",
      //   transition: "all 1.5s ease",
      //   transform: `translateX(${(props) => props.slideIndex * -100}vw)`,
      // }}
      >
        {sliderItems.map((item) => (
          <img src={item.img} />
        ))}
      </div>
      <div>
        <ArrowLeftIcon />
      </div>
    </div>
  );
}
