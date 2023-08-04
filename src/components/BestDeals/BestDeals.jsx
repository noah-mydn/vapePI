import styled from "@emotion/styled";
import { Box, Button, Skeleton, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";

const BestDealsContainer = styled(Box)({
  position: "relative",
  background: "#ececec",
  borderRadius: 4,
  height: "180px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
});

const BestDealSaleTag = styled(Typography)({
  background: "red",
  color: "white",
  width: "50%",
  fontSize: 12,
  textAlign: "center",
});

export const BestDeals = () => {
  const [isBestDealLoading, setIsBestDealLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate image loading from a remote source
    setTimeout(() => {
      setIsBestDealLoading(false);
    }, 4000);
  }, []);

  let bestDeals = [
    {
      url: "./assets/vapes/vape1.png",
      title: "Vape Image One",
    },

    {
      url: "./assets/vapes/vape2.png",
      title: "Vape Image Two",
    },

    {
      url: "./assets/vapes/vape3.png",
      title: "Vape Image Three",
    },

    {
      url: "./assets/vapes/vape4.png",
      title: "Vape Image Four",
    },
    {
      url: "./assets/vapes/vape5.png",
      title: "Vape Image Five",
    },
    {
      url: "./assets/vapes/vape6.png",
      title: "Vape Image Six",
    },
  ];
  return (
    <Box container>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        flexWrap="wrap"
        marginTop={4}
      >
        {bestDeals.map((bestDeal) => {
          return (
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              flex="0 0 55%"
            >
              <BestDealsContainer key={bestDeal.url}>
                <BestDealSaleTag>25% Off</BestDealSaleTag>
                {isBestDealLoading ? (
                  <Skeleton
                    variant="rectangular"
                    width="50vw"
                    height="180px"
                    animation="wave"
                  />
                ) : (
                  <Box
                    component="img"
                    src={bestDeal.url}
                    alt={bestDeal.title}
                    width="20%"
                    onLoad={() => setIsBestDealLoading(false)} // Pass the function reference without invoking it
                    sx={{
                      objectFit: "contain",
                      position: "absolute",
                      bottom: 0,
                    }}
                  />
                )}
              </BestDealsContainer>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                my={4}
              >
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  textAlign="center"
                >
                  Refreshing Mint
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  textAlign="center"
                >
                  30,000 MMK
                </Typography>
                <Typography
                  varaint="caption"
                  fontSize={12}
                  fontWeight="bold"
                  sx={{ textDecoration: "line-through" }}
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
            </Box>
          );
        })}
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
        <Button
          sx={{
            borderRadius: "1em",
            padding: "0.2em 1.5em",
            background: "#efefef",
            color: "#000",
            textTransform: "none",
          }}
        >
          View More &nbsp;
          <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
        </Button>
      </Box>
    </Box>
  );
};
