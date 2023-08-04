import styled from "@emotion/styled";
import Slider from "react-slick";
import { Box, Skeleton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";

const BarWrapper = styled(Box)({
  width: "100%",
  height: "auto",
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
        color: "#e1e1e1",
        right: -25,
        position: "absolute",
        top: 85,
        zIndex: 3,
      }}
    />
  ),
  prevArrow: (
    <ArrowBackIosNewIcon
      sx={{
        color: "#e1e1e1",
        position: "absolute",
        top: 85,
        left: -26,
        zIndex: 3,
      }}
    />
  ),
};

const ImageWrapper = styled(Box)({
  position: "relative",
  overflow: "hidden",
  borderRadius: 2,
  marginTop: "1em",
  width: "120px",
  height: "230px",
  "&:hover .slide-in": {
    transform: "translateY(0)",
  },
});

const SliderImage = ({ url, text }) => {
  return (
    <ImageWrapper>
      <Box
        bgcolor="#fefef3"
        height="50%"
        display="flex"
        justifyContent="center"
        alignItems="end"
        boxShadow={1}
      >
        <Box
          component="img"
          src={url}
          alt={text}
          borderRadius={2}
          display="block"
          sx={{
            width: "20%",
            objectPosition: "center",
            objectFit: "cover",
            transition: "0.5s ease-in-out",
          }}
        />
      </Box>
      <Box display="flex" flexDirection="column">
        <Typography
          variant="body2"
          fontWeight="bold"
          textAlign="center"
          color="#fff"
        >
          Refreshing Mint
        </Typography>
        <Typography
          variant="body2"
          fontWeight="bold"
          textAlign="center"
          color="#fff"
        >
          30,000 MMK
        </Typography>
        <Typography
          varaint="caption"
          fontWeight="bold"
          color="#FEC20C"
          fontSize={13}
        >
          ⭐600 Points
        </Typography>
      </Box>
    </ImageWrapper>
  );
};

export const BarCarousel = () => {
  const [isLoadingImgOne, setIsLoadingImgOne] = React.useState(true);
  const [isLoadingImgTwo, setIsLoadingImgTwo] = React.useState(true);
  const [isLoadingImgThree, setIsLoadingImgThree] = React.useState(true);

  const [isLoadingsaleImgOne, setIsLoadingsaleImgOne] = React.useState(true);
  const [isLoadingsaleImgTwo, setIsLoadingsaleImgTwo] = React.useState(true);

  React.useEffect(() => {
    // Simulate image loading from a remote source
    setTimeout(() => {
      setIsLoadingsaleImgOne(false);
      setIsLoadingsaleImgTwo(false);
    }, 4000);
  }, []);

  React.useEffect(() => {
    // Simulate image loading from a remote source
    setTimeout(() => {
      setIsLoadingImgOne(false);
      setIsLoadingImgTwo(false);
      setIsLoadingImgThree(false);
    }, 6000);
  }, []);

  return (
    <BarWrapper px={1} position="relative">
      {/* First Slider */}
      <Box position="relative" width="100%" height="280px" mt={2}>
        {isLoadingImgOne ? (
          <Skeleton
            variant="rectangular"
            animation="wave"
            width="87vw"
            height="280px"
            sx={{ borderRadius: 2 }}
          />
        ) : (
          <Box
            component="img"
            src="./assets/sliderView/1.png"
            alt="banner holder"
            width="100%"
            height="100%"
            borderRadius={2}
            sx={{ objectFit: "cover" }}
          />
        )}
        <Typography
          textAlign="left"
          variant="h6"
          position="absolute"
          bottom={50}
          left={5}
          color="#fff"
          fontWeight="bolder"
          width="50%"
        >
          Devices
        </Typography>
        <Typography
          textAlign="left"
          variant="caption"
          position="absolute"
          bottom={20}
          left={5}
          color="#fff"
          width="35%"
          lineHeight={1.1}
        >
          Find the best for you here!
        </Typography>

        <Box position="absolute" zIndex={2} width="68%" left={75} top={0}>
          <Slider
            {...settings}
            className="slick-new"
            centerMode={true}
            centerPadding="40px"
          >
            {isLoadingsaleImgOne ? (
              <Skeleton
                variant="rectangular"
                animation="wave"
                width="80px"
                height="100px"
              />
            ) : (
              <SliderImage
                url="./assets/vapes/vape1.png"
                text="Vape Image One"
              />
            )}
            {isLoadingsaleImgOne ? (
              <Skeleton
                variant="rectangular"
                animation="wave"
                width="80px"
                height="100px"
              />
            ) : (
              <SliderImage
                url="./assets/vapes/vape1.png"
                text="Vape Image Two"
              />
            )}
            {isLoadingsaleImgOne ? (
              <Skeleton
                variant="rectangular"
                animation="wave"
                width="80px"
                height="100px"
              />
            ) : (
              <SliderImage
                url="./assets/vapes/vape1.png"
                text="Vape Image Three"
              />
            )}
          </Slider>
        </Box>
      </Box>
      {/* Second Slider */}
      <Box position="relative" width="100%" height="280px" mt={2}>
        {isLoadingImgOne ? (
          <Skeleton
            variant="rectangular"
            animation="wave"
            width="87vw"
            height="280px"
            sx={{ borderRadius: 2 }}
          />
        ) : (
          <Box
            component="img"
            src="./assets/sliderView/2.png"
            alt="banner holder"
            width="100%"
            height="100%"
            borderRadius={2}
            sx={{ objectFit: "cover" }}
          />
        )}
        <Typography
          textAlign="left"
          variant="h6"
          position="absolute"
          bottom={50}
          left={5}
          color="#fff"
          fontWeight="bolder"
          width="50%"
        >
          Pods
        </Typography>
        <Typography
          textAlign="left"
          variant="caption"
          position="absolute"
          bottom={20}
          left={5}
          color="#fff"
          width="35%"
          lineHeight={1.1}
        >
          Variey of choices available
        </Typography>

        <Box position="absolute" zIndex={2} width="68%" left={75} top={0}>
          <Slider
            {...settings}
            className="slick-new"
            centerMode={true}
            centerPadding="40px"
          >
            {isLoadingsaleImgOne ? (
              <Skeleton
                variant="rectangular"
                animation="wave"
                width="80px"
                height="100px"
              />
            ) : (
              <SliderImage
                url="./assets/vapes/vape2.png"
                text="Vape Image One"
              />
            )}
            {isLoadingsaleImgOne ? (
              <Skeleton
                variant="rectangular"
                animation="wave"
                width="80px"
                height="100px"
              />
            ) : (
              <SliderImage
                url="./assets/vapes/vape2.png"
                text="Vape Image Two"
              />
            )}
            {isLoadingsaleImgOne ? (
              <Skeleton
                variant="rectangular"
                animation="wave"
                width="80px"
                height="100px"
              />
            ) : (
              <SliderImage
                url="./assets/vapes/vape2.png"
                text="Vape Image Three"
              />
            )}
          </Slider>
        </Box>
      </Box>
      {/* Third Slider */}
      <Box position="relative" width="100%" height="280px" mt={2}>
        {isLoadingImgOne ? (
          <Skeleton
            variant="rectangular"
            animation="wave"
            width="87vw"
            height="280px"
            sx={{ borderRadius: 2 }}
          />
        ) : (
          <Box
            component="img"
            src="./assets/sliderView/3.png"
            alt="banner holder"
            width="100%"
            height="100%"
            borderRadius={2}
            sx={{ objectFit: "cover" }}
          />
        )}
        <Typography
          textAlign="left"
          variant="h6"
          position="absolute"
          bottom={50}
          left={5}
          color="#fff"
          fontWeight="bolder"
          width="50%"
          zIndex={3}
        >
          Disposable
        </Typography>
        <Typography
          textAlign="left"
          variant="caption"
          position="absolute"
          bottom={20}
          left={5}
          color="#fff"
          width="35%"
          lineHeight={1.1}
        >
          Easy, clean and superb flavour
        </Typography>

        <Box position="absolute" zIndex={2} width="68%" left={75} top={0}>
          <Slider
            {...settings}
            className="slick-new"
            centerMode={true}
            centerPadding="40px"
          >
            {isLoadingsaleImgOne ? (
              <Skeleton
                variant="rectangular"
                animation="wave"
                width="80px"
                height="100px"
              />
            ) : (
              <SliderImage
                url="./assets/vapes/vape4.png"
                text="Vape Image One"
              />
            )}
            {isLoadingsaleImgOne ? (
              <Skeleton
                variant="rectangular"
                animation="wave"
                width="80px"
                height="100px"
              />
            ) : (
              <SliderImage
                url="./assets/vapes/vape4.png"
                text="Vape Image Two"
              />
            )}
            {isLoadingsaleImgOne ? (
              <Skeleton
                variant="rectangular"
                animation="wave"
                width="80px"
                height="100px"
              />
            ) : (
              <SliderImage
                url="./assets/vapes/vape4.png"
                text="Vape Image Three"
              />
            )}
          </Slider>
        </Box>
      </Box>
    </BarWrapper>
  );
};
