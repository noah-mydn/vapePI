import React from "react";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styled from "@emotion/styled";
import { Box, Button, IconButton, Typography } from "@mui/material";

export const Banner = () => {
  const ViewBtn = styled(Button)({
    marginTop: "1em",
    padding: " 0.5em",
    fontSize: 13,
    color: "white",
    borderRadius: "1.5em",
    background: "rgba(255,255,255,0.14)",
    fontWeight: "bold",
    "&:hover": {
      // color: "black",
      // background: "white",
    },
  });

  var settings = {
    dots: false,
    arrows: true,
    dotsClass: "slick-dots",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    swipeToSlide: true,
    accessibility: true,
    nextArrow: (
      <ArrowForwardIosIcon
        sx={{
          color: "#aeaeae",
          position: "absolute",
          right: 30,
          zIndex: 4,
        }}
      />
    ),
    prevArrow: (
      <ArrowBackIosNewIcon
        sx={{ color: "#aeaeae", position: "absolute", left: 20, zIndex: 4 }}
      />
    ),
  };

  const ImageWrapper = styled(Box)({
    position: "relative",
    overflow: "hidden",
    borderRadius: 2,
    marginBottom: "2em",
    width: "330px",
    height: "160px",
    "&:hover .slide-in": {
      transform: "translateY(0)",
    },
  });

  const SliderImage = ({ url, text }) => {
    return (
      <ImageWrapper>
        <Box
          component="img"
          src={url}
          alt={text}
          borderRadius={4}
          display="block"
          sx={{
            width: "100%",
            height: "100%",
            objectPosition: "center",
            objectFit: "cover",
            transition: "0.5s ease-in-out",
          }}
        />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ position: "absolute", top: 30, right: 30 }}
        >
          <Typography
            variant="body1"
            textAlign="center"
            color="#fff"
            fontWeight="bold"
          >
            Try New Flavour
          </Typography>
          <Typography variant="caption" textAlign="center" color="#fff">
            Citrus Monster
          </Typography>
          <Box>
            <ViewBtn>View</ViewBtn>
          </Box>
        </Box>
      </ImageWrapper>
    );
  };
  return (
    <Slider
      {...settings}
      className="slick"
      centerMode={true}
      centerPadding="15px"
    >
      <SliderImage url="./assets/banner/1.png" text="Banner Image One" />
      <SliderImage url="./assets/banner/2.png" text="Banner Image Two" />
      <SliderImage url="./assets/banner/3.png" text="Banner Image Three" />
    </Slider>
  );
};
