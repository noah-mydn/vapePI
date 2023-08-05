import styled from "@emotion/styled";
import Slider from "react-slick";
import { Box, Skeleton, Stack, Typography } from "@mui/material";
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

const SliderImage = ({ url, text, onLoad, loader }) => {
  return (
    <ImageWrapper>
      {loader ? (
        <Box position="absolute" top={-50} width="100%" height="100%">
          <Skeleton
            varaint="rectangualr"
            animation="wave"
            width="100%"
            height="88%"
          />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            marginTop={-4}
          >
            <Skeleton
              type="rounded"
              width="120px"
              animation="wave"
              height="15px"
            />
            <Skeleton
              type="rounded"
              width="90px"
              animation="wave"
              height="15px"
            />
            <Skeleton
              type="rounded"
              width="70px"
              animation="wave"
              height="15px"
            />
          </Box>
        </Box>
      ) : (
        <>
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
              onLoad={onLoad}
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
        </>
      )}
    </ImageWrapper>
  );
};

export const BarCarousel = () => {
  const [isLoadingImgOne, setIsLoadingImgOne] = React.useState(true);
  const [isLoadingImgTwo, setIsLoadingImgTwo] = React.useState(true);
  const [isLoadingImgThree, setIsLoadingImgThree] = React.useState(true);

  const [productOneLoading, setProductOneLoading] = React.useState(true);
  const [productTwoLoading, setProductTwoLoading] = React.useState(true);
  const [productThreeLoading, setProductThreeLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate image loading from a remote source
    setTimeout(() => {
      setProductOneLoading(false);
      setProductTwoLoading(false);
      setProductThreeLoading(false);
    }, 4000);
  }, []);

  React.useEffect(() => {
    // Simulate image loading from a remote source
    setTimeout(() => {
      setIsLoadingImgOne(false);
      setIsLoadingImgTwo(false);
      setIsLoadingImgThree(false);
    }, 5000);
  }, []);

  return (
    <BarWrapper px={1} position="relative">
      {/* First Slider */}
      <Box position="relative" width="100%" height="280px" mt={2}>
        {isLoadingImgOne ? (
          <Skeleton
            variant="rounded"
            animation="wave"
            width="100%"
            height="100%"
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
            onLoad={() => setIsLoadingImgOne(false)}
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
          {isLoadingImgOne ? (
            <Skeleton variant="rounded" width="120px" height="20px" />
          ) : (
            "Devices"
          )}
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
          {isLoadingImgOne ? (
            <Stack gap={0.3}>
              <Skeleton variant="rounded" width="150px" height="10px" />
              <Skeleton variant="rounded" width="150px" height="10px" />
            </Stack>
          ) : (
            "Find the best for you here!"
          )}
        </Typography>

        <Box position="absolute" zIndex={2} width="68%" left={75} top={0}>
          <Slider
            {...settings}
            className="slick-new"
            centerMode={true}
            centerPadding="40px"
          >
            <SliderImage
              url="./assets/vapes/vape1.png"
              text="Vape Image One"
              onLoad={() => setProductOneLoading(false)}
              loader={productOneLoading}
            />

            <SliderImage
              url="./assets/vapes/vape1.png"
              text="Vape Image Two"
              onLoad={() => setProductOneLoading(false)}
              loader={productOneLoading}
            />

            <SliderImage
              url="./assets/vapes/vape1.png"
              text="Vape Image Three"
              onLoad={() => setProductOneLoading(false)}
              loader={productOneLoading}
            />
          </Slider>
        </Box>
      </Box>
      {/* Second Slider */}
      <Box position="relative" width="100%" height="280px" mt={2}>
        {isLoadingImgTwo ? (
          <Skeleton
            variant="rounded"
            animation="wave"
            width="100%"
            height="100%"
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
            onLoad={() => setIsLoadingImgTwo(false)}
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
          {isLoadingImgTwo ? (
            <Skeleton variant="rounded" width="120px" height="20px" />
          ) : (
            "Pods"
          )}
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
          {isLoadingImgTwo ? (
            <Stack gap={0.3}>
              <Skeleton variant="rounded" width="150px" height="10px" />
              <Skeleton variant="rounded" width="150px" height="10px" />
            </Stack>
          ) : (
            "Variety of choices available"
          )}
        </Typography>

        <Box position="absolute" zIndex={2} width="68%" left={75} top={0}>
          <Slider
            {...settings}
            className="slick-new"
            centerMode={true}
            centerPadding="40px"
          >
            <SliderImage
              url="./assets/vapes/vape2.png"
              text="Vape Image One"
              onLoad={() => setProductTwoLoading(false)}
              loader={productTwoLoading}
            />

            <SliderImage
              url="./assets/vapes/vape1.png"
              text="Vape Image Two"
              onLoad={() => setProductTwoLoading(false)}
              loader={productTwoLoading}
            />

            <SliderImage
              url="./assets/vapes/vape1.png"
              text="Vape Image Three"
              onLoad={() => setProductTwoLoading(false)}
              loader={productTwoLoading}
            />
          </Slider>
        </Box>
      </Box>
      {/* Third Slider */}
      <Box position="relative" width="100%" height="280px" mt={2}>
        {isLoadingImgThree ? (
          <Skeleton
            variant="rounded"
            animation="wave"
            width="100%"
            height="100%"
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
            onLoad={() => setIsLoadingImgThree(false)}
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
          {isLoadingImgThree ? (
            <Skeleton variant="rounded" width="120px" height="20px" />
          ) : (
            "Disposable"
          )}
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
          {isLoadingImgThree ? (
            <Stack gap={0.3}>
              <Skeleton variant="rounded" width="150px" height="10px" />
              <Skeleton variant="rounded" width="150px" height="10px" />
            </Stack>
          ) : (
            "Easy, clean and superb flavour"
          )}
        </Typography>

        <Box position="absolute" zIndex={2} width="68%" left={75} top={0}>
          <Slider
            {...settings}
            className="slick-new"
            centerMode={true}
            centerPadding="40px"
          >
            <SliderImage
              url="./assets/vapes/vape2.png"
              text="Vape Image One"
              onLoad={() => setProductThreeLoading(false)}
              loader={productThreeLoading}
            />

            <SliderImage
              url="./assets/vapes/vape1.png"
              text="Vape Image Two"
              onLoad={() => setProductThreeLoading(false)}
              loader={productThreeLoading}
            />

            <SliderImage
              url="./assets/vapes/vape1.png"
              text="Vape Image Three"
              onLoad={() => setProductThreeLoading(false)}
              loader={productThreeLoading}
            />
          </Slider>
        </Box>
      </Box>
    </BarWrapper>
  );
};
