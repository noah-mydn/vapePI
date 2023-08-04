import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";

const NewReleaseBoxContainer = styled(Box)({
  flex: "0 0 48%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "end",
  height: "150px",
  margin: 2,
});

const newReleaseFragrances = [
  {
    url: "./assets/newReleases/1.jpg",
    title: "Strawberry Flavour",

    commentary: "Strawberry Yogurt with Refreshing Flavour Nic 3 Percent",
    price: "30,000 MMK",
  },

  {
    url: "./assets/newReleases/2.jpg",
    title: "Mint flavour",
    commentary: "Strawberry Yogurt with Refreshing Flavour Nic 3 Percent",
    price: "30,000 MMK",
  },

  {
    url: "./assets/newReleases/3.jpg",
    title: "Custard flavour",

    commentary: "Strawberry Yogurt with Refreshing Flavour Nic 3 Percent",
    price: "30,000 MMK",
  },

  {
    url: "./assets/newReleases/4.jpg",
    title: "Ocean Flavour",

    commentary: "Strawberry Yogurt with Refreshing Flavour Nic 3 Percent",
    price: "30,000 MMK",
  },
];

export const NewRelease = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
      flexWrap="wrap"
      my={2}
    >
      {newReleaseFragrances.map((fragrance) => {
        return (
          <NewReleaseBoxContainer key={fragrance.url} position="relative">
            <Box
              component="img"
              src={fragrance.url}
              alt={fragrance.title}
              width="100%"
              height="100%"
              sx={{ objectFit: "cover" }}
              borderRadius={4}
            />

            <Typography
              variant="body2"
              fontWeight="bold"
              color="#fff"
              width="60%"
              fontSize={12}
              position="absolute"
              top={15}
              left={10}
            >
              {fragrance.commentary}
            </Typography>
            <Typography
              variant="caption"
              color="#fff"
              position="absolute"
              top={110}
              left={10}
            >
              {fragrance.price}
            </Typography>
          </NewReleaseBoxContainer>
        );
      })}
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
          <ArrowForwardIosIcon sx={{ fontSize: 11 }} />
        </Button>
      </Box>
    </Box>
  );
};
