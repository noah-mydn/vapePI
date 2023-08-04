import {
  Box,
  Button,
  Grid,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import React from "react";
import styled from "@emotion/styled";

const ViewBtn = styled(Button)({
  padding: " 0.5em",
  fontSize: 12,
  color: "white",
  borderRadius: "1.5em",
  background: "rgba(255,255,255,0.1)",
  fontWeight: "bold",
  "&:hover": {
    // color: "black",
    // background: "white",
  },
});

export const Membership = () => {
  const [isMembershipImageLoading, setIsMembershipImageLoading] =
    React.useState(true);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate image loading from a remote source
    setTimeout(() => {
      setIsMembershipImageLoading(false);
    }, 4000);
  }, []);

  React.useEffect(() => {
    // Simulate data loading from a remote source
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <Box my={2} px={1}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box position="relative">
          {isMembershipImageLoading ? (
            <Skeleton
              variant="rectangular"
              borderRadius={4}
              width="83vw"
              height="300px"
            />
          ) : (
            <Box
              component="img"
              src="./assets/membership/vape.png"
              height="300px"
              borderRadius={4}
              width="100%"
              onLoad={() => setIsMembershipImageLoading(false)} // Pass the function reference without invoking it
              sx={{ objectFit: "cover" }}
            />
          )}

          <Box pl={2}>
            <Box
              position="absolute"
              top={30}
              component="img"
              src="./assets/membership/membership.png"
              width="30%"
              alt="membership types"
            />
            <Typography variant="h6" color="#fff" position="absolute" top={105}>
              Membership Program
            </Typography>
            <Typography
              variant="caption"
              color="#fff"
              position="absolute"
              top={145}
              fontSize={12}
              width="50%"
            >
              Be a Vape PI member and get our special exclusive offers
            </Typography>
          </Box>

          <Box pl={2} position="absolute" bottom={50}>
            <ViewBtn>View</ViewBtn>
          </Box>
        </Box>

        <Grid container justifyContent="space-between">
          <Grid
            item
            xs={6}
            bgcolor="black"
            height="300px"
            display="flex"
            justifyContent="space-between"
            flexDirection="column"
            alignItems="center"
            borderRadius={2}
            p={1}
            position="relative"
          >
            {isMembershipImageLoading ? (
              <Skeleton
                variant="rectangular"
                borderRadius={4}
                width="40vw"
                height="300px"
              />
            ) : (
              <Box
                component="img"
                src="./assets/membership/vape1.png"
                onLoad={() => setIsLoading(false)}
                width="38%"
              />
            )}
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="start"
            >
              <Typography
                variant="body1"
                textAlign="center"
                ml={1}
                fontWeight="bold"
                color="#fff"
                gutterBottom={0}
              >
                Devices
              </Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
              >
                <Typography
                  variant="caption"
                  textAlign="left"
                  ml={1}
                  width="80%"
                  color="#fff"
                  lineHeight={1.2}
                >
                  Feel the best for you here
                </Typography>
                <IconButton>
                  <NavigateNextIcon
                    fontSize="12"
                    sx={{ color: "rgba(255,255,255,0.65)" }}
                  />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Grid
              item
              xs={12}
              borderRadius={2}
              ml={1}
              mb={1.1}
              display="flex"
              justifyContent="flex-start"
              flexDirection="column"
              alignItems="center"
              height="145px"
              bgcolor="black"
            >
              {isMembershipImageLoading ? (
                <Skeleton
                  variant="rectangular"
                  borderRadius={4}
                  width="40vw"
                  height="145px"
                />
              ) : (
                <Box
                  component="img"
                  src="./assets/membership/vape2.png"
                  onLoad={() => setIsLoading(false)}
                  width="25%"
                  mt={1}
                  ml={6}
                />
              )}
              <Box position="relative" ml={1}>
                <Typography
                  variant="body1"
                  textAlign="center"
                  fontWeight="bold"
                  color="#fff"
                  position="absolute"
                  ml={1}
                  bottom={28}
                >
                  Pods
                </Typography>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  position="relative"
                  bottom={-15}
                >
                  <Typography
                    variant="caption"
                    textAlign="left"
                    ml={1}
                    width="80%"
                    color="#fff"
                    fontSize={12}
                  >
                    Variey of choices available
                  </Typography>

                  <IconButton size="small">
                    <NavigateNextIcon
                      fontSize="12"
                      sx={{
                        color: "rgba(255,255,255,0.65)",
                      }}
                    />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              borderRadius={2}
              ml={1}
              display="flex"
              justifyContent="flex-start"
              flexDirection="column"
              alignItems="center"
              height="145px"
              bgcolor="black"
            >
              {isMembershipImageLoading ? (
                <Skeleton
                  variant="rectangular"
                  borderRadius={4}
                  width="40vw"
                  height="145px"
                />
              ) : (
                <Box
                  component="img"
                  src="./assets/membership/vape4.png"
                  onLoad={() => setIsLoading(false)}
                  width="22%"
                  mt={1}
                  ml={6}
                />
              )}
              <Box position="relative" ml={1}>
                <Typography
                  variant="body1"
                  textAlign="center"
                  fontWeight="bold"
                  color="#fff"
                  position="absolute"
                  ml={1}
                  bottom={13}
                >
                  Disposable
                </Typography>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  position="relative"
                  bottom={-30}
                >
                  <Typography
                    variant="caption"
                    textAlign="left"
                    ml={1}
                    width="80%"
                    color="#fff"
                    fontSize={12}
                  >
                    Easy, clean and superb flavour
                  </Typography>
                  <IconButton size="small">
                    <NavigateNextIcon
                      fontSize="12"
                      sx={{
                        color: "rgba(255,255,255,0.65)",
                      }}
                    />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
