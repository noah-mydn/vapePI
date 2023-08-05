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

export const Membership = ({ mobileDevice, tabletDevice }) => {
  const [isMembershipImageLoading, setIsMembershipImageLoading] =
    React.useState(true);
  const [deviceLoading, setDeviceLoading] = React.useState(true);
  const [podLoading, setPodLoading] = React.useState(true);
  const [disposableLoading, setDisposableLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate image loading from a remote source
    setTimeout(() => {
      setIsMembershipImageLoading(false);
      setDeviceLoading(false);
      setPodLoading(false);
      setDisposableLoading(false);
    }, 4000);
  }, []);

  return (
    <Box my={2} px={1}>
      {mobileDevice && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Box position="relative">
            {isMembershipImageLoading ? (
              <Skeleton
                variant="rounded"
                borderRadius={4}
                width="87vw"
                height="300px"
              />
            ) : (
              <Box
                component="img"
                src="./assets/membership/vape-small.png"
                height="300px"
                borderRadius={4}
                width="100%"
                onLoad={() => setIsMembershipImageLoading(false)} // Pass the function reference without invoking it
                sx={{ objectFit: "cover" }}
              />
            )}

            <Box pl={2}>
              {isMembershipImageLoading ? (
                <Box position="absolute" top={30}>
                  <Skeleton
                    variant="rounded"
                    animation="wave"
                    width="90px"
                    height="40px"
                  />
                </Box>
              ) : (
                <Box
                  position="absolute"
                  top={30}
                  component="img"
                  src="./assets/membership/membership.png"
                  width="30%"
                  alt="membership types"
                />
              )}

              <Typography
                variant="h6"
                color="#fff"
                position="absolute"
                top={105}
              >
                {isMembershipImageLoading ? (
                  <Skeleton width="200px" height="80px" />
                ) : (
                  "Membership Program"
                )}
              </Typography>

              <Typography
                variant="caption"
                color="#fff"
                position="absolute"
                top={145}
                fontSize={12}
                width="50%"
              >
                {isMembershipImageLoading ? (
                  <>
                    <Skeleton
                      width="160px"
                      height="20px"
                      sx={{ marginTop: 4 }}
                    />
                    <Skeleton width="160px" height="30px" />
                  </>
                ) : (
                  "Be a Vape PI member and get our special exclusive offers"
                )}
              </Typography>
            </Box>

            <Box pl={2} position="absolute" bottom={50}>
              {isMembershipImageLoading ? (
                <Skeleton
                  variant="rectangular"
                  width="60px"
                  height="30px"
                  animation="wave"
                  sx={{ borderRadius: "1.5em", position: "absolute" }}
                />
              ) : (
                <ViewBtn>View</ViewBtn>
              )}
            </Box>
          </Box>

          <Grid container justifyContent="space-between">
            {deviceLoading ? (
              <Grid item xs={6} height="300px" mt={1}>
                <Skeleton
                  width="100%"
                  height="100%"
                  variant="rounded"
                  animation="wave"
                />
                <Box position="absolute">
                  <Skeleton
                    width="100px"
                    height="30px"
                    animation="wave"
                    sx={{
                      bottom: 80,
                      left: 20,
                    }}
                  />
                </Box>
                <Box position="absolute">
                  <Skeleton
                    width="100px"
                    height="15px"
                    animation="wave"
                    sx={{
                      bottom: 50,
                      left: 20,
                    }}
                  />
                  <Skeleton
                    width="100px"
                    height="15px"
                    animation="wave"
                    sx={{
                      bottom: 48,
                      left: 20,
                    }}
                  />
                </Box>
              </Grid>
            ) : (
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
                {deviceLoading ? (
                  <Skeleton
                    variant="rectangular"
                    borderRadius={4}
                    width="100%"
                    height="300px"
                  />
                ) : (
                  <Box
                    component="img"
                    src="./assets/membership/vape1.png"
                    onLoad={() => setDeviceLoading(false)}
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
                    variant="body2"
                    textAlign="center"
                    ml={1}
                    fontWeight="bold"
                    color="#fff"
                    gutterBottom={1}
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
                      fontSize={12}
                      width="80%"
                      color="#fff"
                      lineHeight={1.2}
                    >
                      Feel the best for you here
                    </Typography>

                    <NavigateNextIcon
                      fontSize="12"
                      sx={{ color: "rgba(255,255,255,0.65)" }}
                    />
                  </Box>
                </Box>
              </Grid>
            )}

            <Grid item xs={6}>
              {podLoading ? (
                <Grid item xs={12} height="145px" mt={1} ml={1}>
                  <Skeleton
                    width="100%"
                    height="100%"
                    variant="rounded"
                    animation="wave"
                  />
                  <Box position="absolute">
                    <Skeleton
                      width="100px"
                      height="30px"
                      animation="wave"
                      sx={{
                        bottom: 80,
                        left: 20,
                      }}
                    />
                  </Box>
                  <Box position="absolute">
                    <Skeleton
                      width="100px"
                      height="15px"
                      animation="wave"
                      sx={{
                        bottom: 50,
                        left: 20,
                      }}
                    />
                    <Skeleton
                      width="100px"
                      height="15px"
                      animation="wave"
                      sx={{
                        bottom: 48,
                        left: 20,
                      }}
                    />
                  </Box>
                </Grid>
              ) : (
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
                  {podLoading ? (
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
                      onLoad={() => setPodLoading(false)}
                      width="25%"
                      mt={1}
                      ml={6}
                    />
                  )}
                  <Box position="relative" ml={1}>
                    <Typography
                      variant="body2"
                      textAlign="center"
                      fontWeight="bold"
                      color="#fff"
                      position="absolute"
                      ml={1}
                      bottom={18}
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
                        lineHeight={1.1}
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
              )}
              {disposableLoading ? (
                <Grid item xs={12} height="145px" mt={1} ml={1}>
                  <Skeleton
                    width="100%"
                    height="100%"
                    variant="rounded"
                    animation="wave"
                  />
                  <Box position="absolute">
                    <Skeleton
                      width="100px"
                      height="30px"
                      animation="wave"
                      sx={{
                        bottom: 80,
                        left: 20,
                      }}
                    />
                  </Box>
                  <Box position="absolute">
                    <Skeleton
                      width="100px"
                      height="15px"
                      animation="wave"
                      sx={{
                        bottom: 50,
                        left: 20,
                      }}
                    />
                    <Skeleton
                      width="100px"
                      height="15px"
                      animation="wave"
                      sx={{
                        bottom: 48,
                        left: 20,
                      }}
                    />
                  </Box>
                </Grid>
              ) : (
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
                  {disposableLoading ? (
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
                      onLoad={() => setDisposableLoading(false)}
                      width="22%"
                      mt={1}
                      ml={6}
                    />
                  )}
                  <Box position="relative" ml={1}>
                    <Typography
                      variant="body2"
                      textAlign="center"
                      fontWeight="bold"
                      color="#fff"
                      position="absolute"
                      ml={1}
                      bottom={3}
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
                        lineHeight={1.1}
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
              )}
            </Grid>
          </Grid>
        </Box>
      )}
      {!mobileDevice && tabletDevice && (
        <Grid container>
          <Grid item sm={12}>
            <Box position="relative">
              {isMembershipImageLoading ? (
                <Skeleton
                  variant="rounded"
                  borderRadius={4}
                  width="89vw"
                  height="300px"
                />
              ) : (
                <Box
                  component="img"
                  src="./assets/membership/vape-large.png"
                  height="300px"
                  borderRadius={4}
                  width="100%"
                  onLoad={() => setIsMembershipImageLoading(false)} // Pass the function reference without invoking it
                  sx={{ objectFit: "cover" }}
                />
              )}

              <Box pl={2}>
                {isMembershipImageLoading ? (
                  <Box position="absolute" top={30}>
                    <Skeleton
                      variant="rounded"
                      animation="wave"
                      width="90px"
                      height="40px"
                    />
                  </Box>
                ) : (
                  <Box
                    position="absolute"
                    top={30}
                    component="img"
                    src="./assets/membership/membership.png"
                    width="30%"
                    alt="membership types"
                  />
                )}

                <Typography
                  variant="h6"
                  color="#fff"
                  position="absolute"
                  top={105}
                >
                  {isMembershipImageLoading ? (
                    <Skeleton width="250px" height="80px" />
                  ) : (
                    "Membership Program"
                  )}
                </Typography>

                <Typography
                  variant="caption"
                  color="#fff"
                  position="absolute"
                  top={145}
                  fontSize={12}
                  width="50%"
                >
                  {isMembershipImageLoading ? (
                    <>
                      <Skeleton
                        width="180px"
                        height="20px"
                        sx={{ marginTop: 4 }}
                      />
                      <Skeleton width="180px" height="30px" />
                    </>
                  ) : (
                    "Be a Vape PI member and get our special exclusive offers"
                  )}
                </Typography>
              </Box>

              <Box pl={2} position="absolute" bottom={50}>
                {isMembershipImageLoading ? (
                  <Skeleton
                    variant="rectangular"
                    width="70px"
                    height="30px"
                    animation="wave"
                    sx={{ borderRadius: "1.5em", position: "absolute" }}
                  />
                ) : (
                  <ViewBtn>View</ViewBtn>
                )}
              </Box>
            </Box>
          </Grid>
          {deviceLoading ? (
            <Grid item xs={6} height="300px" mt={1}>
              <Skeleton
                width="100%"
                height="100%"
                variant="rounded"
                animation="wave"
              />
              <Box position="absolute">
                <Skeleton
                  width="100px"
                  height="30px"
                  animation="wave"
                  sx={{
                    bottom: 80,
                    left: 20,
                  }}
                />
              </Box>
              <Box position="absolute">
                <Skeleton
                  width="100px"
                  height="15px"
                  animation="wave"
                  sx={{
                    bottom: 50,
                    left: 20,
                  }}
                />
                <Skeleton
                  width="100px"
                  height="15px"
                  animation="wave"
                  sx={{
                    bottom: 48,
                    left: 20,
                  }}
                />
              </Box>
            </Grid>
          ) : (
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
              <Box
                component="img"
                src="./assets/membership/vape1.png"
                onLoad={() => setDeviceLoading(false)}
                width="32%"
              />

              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="start"
              >
                <Typography
                  variant="body2"
                  textAlign="center"
                  ml={1}
                  fontWeight="bold"
                  color="#fff"
                  gutterBottom={1}
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
                    fontSize={12}
                    width="80%"
                    color="#fff"
                    lineHeight={1.2}
                  >
                    Feel the best for you here
                  </Typography>

                  <NavigateNextIcon
                    fontSize="12"
                    sx={{ color: "rgba(255,255,255,0.65)" }}
                  />
                </Box>
              </Box>
            </Grid>
          )}
          <Grid item xs={6}>
            {podLoading ? (
              <Grid item xs={12} height="145px" mt={1} ml={1}>
                <Skeleton
                  width="100%"
                  height="100%"
                  variant="rounded"
                  animation="wave"
                />
                <Box position="absolute">
                  <Skeleton
                    width="100px"
                    height="30px"
                    animation="wave"
                    sx={{
                      bottom: 80,
                      left: 20,
                    }}
                  />
                </Box>
                <Box position="absolute">
                  <Skeleton
                    width="100px"
                    height="15px"
                    animation="wave"
                    sx={{
                      bottom: 50,
                      left: 20,
                    }}
                  />
                  <Skeleton
                    width="100px"
                    height="15px"
                    animation="wave"
                    sx={{
                      bottom: 48,
                      left: 20,
                    }}
                  />
                </Box>
              </Grid>
            ) : (
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
                <Box
                  component="img"
                  src="./assets/membership/vape2.png"
                  onLoad={() => setPodLoading(false)}
                  width="20%"
                  mt={1}
                  ml={tabletDevice ? 10 : 6}
                />

                <Box position="relative" ml={1}>
                  <Typography
                    variant="body2"
                    textAlign="center"
                    fontWeight="bold"
                    color="#fff"
                    position="absolute"
                    ml={tabletDevice ? 0 : 1}
                    bottom={28}
                  >
                    Pods
                  </Typography>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    position="relative"
                    bottom={-5}
                  >
                    <Typography
                      variant="caption"
                      textAlign="left"
                      ml={tabletDevice ? 0 : 1}
                      width="85%"
                      color="#fff"
                      fontSize={12}
                      lineHeight={1.1}
                    >
                      Variey of choices available
                    </Typography>

                    <NavigateNextIcon
                      fontSize="12"
                      sx={{
                        color: "rgba(255,255,255,0.65)",
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
            )}
            {disposableLoading ? (
              <Grid item xs={12} height="145px" mt={1} ml={1}>
                <Skeleton
                  width="100%"
                  height="100%"
                  variant="rounded"
                  animation="wave"
                />
                <Box position="absolute">
                  <Skeleton
                    width="100px"
                    height="30px"
                    animation="wave"
                    sx={{
                      bottom: 80,
                      left: 20,
                    }}
                  />
                </Box>
                <Box position="absolute">
                  <Skeleton
                    width="100px"
                    height="15px"
                    animation="wave"
                    sx={{
                      bottom: 50,
                      left: 20,
                    }}
                  />
                  <Skeleton
                    width="100px"
                    height="15px"
                    animation="wave"
                    sx={{
                      bottom: 48,
                      left: 20,
                    }}
                  />
                </Box>
              </Grid>
            ) : (
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
                <Box
                  component="img"
                  src="./assets/membership/vape4.png"
                  onLoad={() => setDisposableLoading(false)}
                  width="22%"
                  mt={1}
                  ml={10}
                />
                <Box position="relative" ml={1}>
                  <Typography
                    variant="body2"
                    textAlign="center"
                    fontWeight="bold"
                    color="#fff"
                    position="absolute"
                    ml={0}
                    bottom={25}
                  >
                    Disposable
                  </Typography>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    position="relative"
                    bottom={-5}
                  >
                    <Typography
                      variant="caption"
                      textAlign="left"
                      ml={0}
                      width={tabletDevice ? "60%" : "80%"}
                      color="#fff"
                      fontSize={12}
                      lineHeight={1.1}
                    >
                      Easy, clean and superb flavour
                    </Typography>

                    <NavigateNextIcon
                      fontSize="12"
                      sx={{
                        color: "rgba(255,255,255,0.65)",
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
            )}
          </Grid>
        </Grid>
      )}
    </Box>
  );
};
