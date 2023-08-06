import React from "react";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styled from "@emotion/styled";
import { Box, Button, Skeleton, Stack, Typography } from "@mui/material";

export const Banner = ({ mobileDevice, tabletDevice }) => {
  const [bannerImagesLoading, setBannerImagesLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setBannerImagesLoading(false);
    }, 4000);
  }, []);

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
    width: mobileDevice ? "330px" : "430px",
    height: "160px",
    "&:hover .slide-in": {
      transform: "translateY(0)",
    },
  });

  const SliderImage = ({ url, text }) => {
    return (
      <ImageWrapper>
        {bannerImagesLoading ? (
          <>
            <Skeleton
              variant="rounded"
              width="100%"
              height="100%"
              animation="wave"
            />
            <Stack
              position="absolute"
              right={40}
              top={20}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Skeleton variant="text" width="100px" height="30px" />
              <Skeleton varaint="text" width="150px" height="25px" />
              <Skeleton
                variant="rectangular"
                sx={{ borderRadius: 8, marginTop: 4 }}
                width="60px"
              />
            </Stack>
          </>
        ) : (
          <>
            <Box
              component="img"
              src={url}
              alt={text}
              borderRadius={4}
              onLoad={() => setBannerImagesLoading(false)}
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
          </>
        )}
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
      <SliderImage
        url={
          mobileDevice ? "./assets/banner/1.png" : "./assets/banner/1-large.png"
        }
        text="Banner Image One"
      />
      <SliderImage
        url={
          mobileDevice ? "./assets/banner/2.png" : "./assets/banner/2-large.png"
        }
        text="Banner Image Two"
      />
      <SliderImage
        url={
          mobileDevice ? "./assets/banner/3.png" : "./assets/banner/3-large.png"
        }
        text="Banner Image Three"
      />
    </Slider>
  );
};
