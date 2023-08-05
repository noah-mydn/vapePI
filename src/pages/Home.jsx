import styled from "@emotion/styled";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import React from "react";
import { BestDeals } from "../components/BestDeals/BestDeals";
import { Membership } from "../components/Membership/Membership";
import { NewRelease } from "../components/NewReleases/NewReleases";
import { Banner } from "../components/BannerSlick/Banner";
import { BarCarousel } from "../components/BarCarousel/BarCarousel";
import { Footer } from "./Footer";
// import { Membership } from "../Membership/Membership";
// import { NewRelease } from "../NewReleases/NewRelease";
// import { Banner } from "../Banner/Banner";
// import { BarCarousel } from "../BarCarousel/BarCarousel";
// import { Footer } from "../Footer/Footer";

const SliderImage = styled(Box)({
  margin: "0 auto",
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const ViewBtn = styled(Button)({
  marginTop: "1em",
  padding: " 0.5em",
  fontSize: 12,
  color: "white",
  borderRadius: "1.5em",
  background: "rgba(0,0,0,0.4)",
  fontWeight: "bold",
  "&:hover, &:focus, &:active": {
    background: "black",
    color: "white",
  },
});

export const Home = ({ mobileDevice, tabletDevice, largeDevice }) => {
  const [slideImageLoading, setSideImageLoading] = React.useState(true);

  let productImage = [
    {
      url: "./assets/homeSlides/slide1.jpeg",
      title: "Product Ads Image One",
    },

    {
      url: "./assets/homeSlides/slide2.jpg",
      title: "Product Ads Image Two",
    },

    {
      url: "./assets/homeSlides/slide3.jpg",
      title: "Product Ads Image Three",
    },

    {
      url: "./assets/homeSlides/slide4.jpg",
      title: "Product Ads Image Four",
    },

    {
      url: "./assets/homeSlides/slide5.jpg",
      title: "Product Ads Image Five",
    },
    {
      url: "./assets/homeSlides/slide6.jpg",
      title: "Product Ads Image Six",
    },
    {
      url: "./assets/homeSlides/slide3.jpg",
      title: "Product Ads Image Three",
    },
  ];

  React.useEffect(() => {
    setTimeout(() => {
      setSideImageLoading(false);
    }, 4000);
  }, []);
  return (
    <Box position="relative" overflow="hidden">
      {/* Home Slider */}
      <CssBaseline>
        {" "}
        <Carousel
          height="60vh"
          autoPlay="true"
          animation="slide"
          duration="500"
          navButtonsAlwaysVisible="true"
          indicatorContainerProps={{
            style: {
              zIndex: 2,
            },
          }}
          indicatorIconButtonProps={{
            style: {
              padding: "0.1px",
              justifyContent: "center",
              alignItems: "center",
              color: "#cfcfcf",
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              color: "gray",
            },
          }}
          NextIcon={<EastIcon />}
          PrevIcon={<WestIcon />}
          fullHeightHover="true"
          navButtonsProps={{
            style: {
              backgroundColor: "rgba(0,0,0,0.5)",
              borderRadius: "0.3em",
              padding: "0.8em 0.3em",
            },
          }}
        >
          {productImage.map((product, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                height: "100%",
                margin: "0 auto",
              }}
            >
              {slideImageLoading ? (
                <SliderImage>
                  <Skeleton
                    animation="pulse"
                    variant="rectangular"
                    width="100%"
                    height="100%"
                  />
                </SliderImage>
              ) : (
                <SliderImage
                  component="img"
                  src={product.url}
                  alt={product.title}
                  onLoad={() => setSideImageLoading(false)}
                />
              )}

              <Paper
                sx={{
                  position: "absolute",
                  bottom: 0,
                  color: "white",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  fontWeight: "bolder",
                  background: "rgba(0,0,0,0.2)",
                  paddingBottom: "1em",
                }}
              >
                <Typography variant="h6" color="#fff">
                  The Best Look
                  <Typography variant="h5" color="#fff">
                    Anytime Anywhere
                  </Typography>
                  <Typography variant="body2" color="#fff">
                    Starts from 10,000 MMK
                  </Typography>
                </Typography>
                <ViewBtn>View</ViewBtn>
              </Paper>
            </Box>
          ))}
        </Carousel>
      </CssBaseline>
      <Container>
        {/* Best Deals */}
        <Box sx={{ marginTop: 4, paddingY: 2 }}>
          <Typography variant="h4" textAlign="center">
            Best Deals
          </Typography>
          <Typography variant="body1" textAlign="center">
            Just For You
          </Typography>
          <BestDeals mobileDevice={mobileDevice} tabletDevice={tabletDevice} />
        </Box>
      </Container>
      {/* Membership */}
      <Container sx={{ marginTop: 4, paddingY: 2 }}>
        <Membership mobileDevice={mobileDevice} tabletDevice={tabletDevice} />
      </Container>
      {/* New Releases */}
      <Container sx={{ marginTop: 4, paddingY: 2 }}>
        <Typography variant="h4" textAlign="center">
          <span style={{ color: "#e3242b" }}>New</span> Released
        </Typography>
        <Typography variant="body1" textAlign="center">
          Try our latest flavours here
        </Typography>
        <NewRelease />
      </Container>
      {/* Banner */}
      <Box mt={3}>
        <Banner />
      </Box>
      {/* BarCarousel*/}
      <Container sx={{ height: "auto", marginTop: 2 }}>
        <BarCarousel />
      </Container>
      {/* Footer */}
      <Container
        sx={{
          marginTop: "3em",
          paddingBottom: "0.5em",
          paddingTop: "1.5em",
          background: "#efefef",
        }}
      >
        <Footer />
      </Container>
    </Box>
  );
};
