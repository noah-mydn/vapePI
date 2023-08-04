import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PolicyOutlinedIcon from "@mui/icons-material/PolicyOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RotateRightOutlinedIcon from "@mui/icons-material/RotateRightOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import React from "react";

export const Footer = () => {
  const [value, setValue] = React.useState("english");
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const onLanguageChange = (event) => {
    setValue(event.target.value);
  };

  const handleAddressClick = () => {
    window.open("https://maps.app.goo.gl/r7nxmDcFH7AVDqLQ7", "_blank");
  };

  const handleCallClick = () => {
    window.open("tel:+959123456789", "_blank");
  };

  const goToFacebook = () => {
    window.location.href = `https://www.facebook.com`;
  };

  const goToInsta = () => {
    window.location.href = "https://instagram.com";
  };

  const goToViber = () => {
    window.location.href = "iber://pa?chatURI=+959123456789";
  };

  const goToTelegram = () => {
    window.location.href = "tg://resolve?domain=wthecknoah";
  };

  const goToTwitter = () => {
    window.location.href = "https://www.twitter.com/noah_ydn";
  };

  return (
    <Box mt={4}>
      <Typography
        variant="body2"
        color="#000"
        textAlign="center"
        fontWeight="bold"
      >
        Follow Us On
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box
          component="img"
          src="./assets/facebook.svg"
          alt="facebook logo"
          width="10%"
          onClick={goToFacebook}
        />
        <Box
          component="img"
          src="./assets/instagram.svg"
          alt="instagram logo"
          width="10%"
          onClick={goToInsta}
        />
        <Box
          component="img"
          src="./assets/viber.svg"
          alt="viber logo"
          width="9%"
          onClick={goToViber}
        />
        <Box
          component="img"
          src="./assets/telegram.svg"
          alt="telegram logo"
          width="10%"
          onClick={goToTelegram}
        />
        <Box
          component="img"
          src="./assets/twitter.svg"
          alt="twitter logo"
          width="10%"
          onClick={goToTwitter}
        />
      </Box>

      {/* Customer Service */}
      <Accordion
        elevation={0}
        sx={{ marginTop: "1em" }}
        expanded={expanded === "customer-service"}
        onChange={handleChange("customer-service")}
      >
        <AccordionSummary
          aria-controls="customer-service-content"
          id="customer-service-header"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Typography variant="body2" fontWeight="bold">
              Customer Service
            </Typography>
            {expanded === "customer-service" ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </Box>
        </AccordionSummary>

        <AccordionDetails>
          <Box display="flex" alignItems="center">
            <PolicyOutlinedIcon /> &nbsp;
            <Typography variant="caption">Terms & Privacy Policy</Typography>
          </Box>
          <Box display="flex" alignItems="center" mt={1}>
            <RotateRightOutlinedIcon /> &nbsp;
            <Typography variant="caption">Return Policy</Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
      {/* Language */}
      <Accordion
        elevation={0}
        sx={{ marginTop: "1em" }}
        expanded={expanded === "language"}
        onChange={handleChange("language")}
      >
        <AccordionSummary aria-controls="language-content" id="language-header">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Typography variant="body2" fontWeight="bold" id="language">
              Language
            </Typography>
            {expanded === "language" ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </Box>
        </AccordionSummary>

        <AccordionDetails>
          <RadioGroup
            aria-labelledby="language"
            value={value}
            name="language-choices"
            onChange={onLanguageChange}
          >
            <FormControlLabel
              value="myanmar-unicode"
              control={<Radio size="small" />}
              label={
                <Typography variant="caption" color="#000" fontSize={13}>
                  Myanmar (Unicode)
                </Typography>
              }
            />
            <FormControlLabel
              value="myanmar-zawgyi"
              control={<Radio size="small" />}
              label={
                <Typography variant="caption" color="#000" fontSize={13}>
                  Myanmar (Zawgyi)
                </Typography>
              }
            />
            <FormControlLabel
              value="english"
              control={<Radio size="small" />}
              label={
                <Typography variant="caption" color="#000" fontSize={13}>
                  English
                </Typography>
              }
            />
          </RadioGroup>
        </AccordionDetails>
      </Accordion>

      {/*Contact Us*/}
      <Accordion
        elevation={0}
        sx={{ marginTop: "1em" }}
        expanded={expanded === "contact-us"}
        onChange={handleChange("contact-us")}
      >
        <AccordionSummary
          aria-controls="contact-us-content"
          id="contact-us-header"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Typography variant="body2" fontWeight="bold">
              Contact Us
            </Typography>
            {expanded === "contact-us" ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </Box>
        </AccordionSummary>

        <AccordionDetails>
          <Box display="flex" alignItems="start">
            <LocationOnOutlinedIcon /> &nbsp;
            <Typography variant="caption" fontSize={13} width="80%">
              <a
                href="#"
                onClick={handleAddressClick}
                style={{ textDecoration: "none", color: "#000" }}
              >
                Lay Daunt Kan Main Road, Cashmere Stop, Near Zawana, Thingangyun
                Tsp, Yangon, Myanmar
              </a>
            </Typography>
          </Box>
          <Box display="flex" alignItems="start">
            <LocalPhoneOutlinedIcon sx={{ fontSize: 22 }} /> &nbsp;
            <Typography variant="caption" fontSize={13} width="80%">
              <a
                href="#"
                onClick={handleCallClick}
                style={{ textDecoration: "none", color: "#000" }}
              >
                0458489458
              </a>
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
      <hr style={{ border: "1px solid #cfcfcf", marginTop: "1em" }} />

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="start"
        mb={2}
      >
        {/* Payment */}
        <Box
          display="flex"
          flexDirection="column"
          px={2}
          flex="0 0 45%"
          justifyContent="center"
        >
          <Typography variant="body2" fontWeight="bold" color="#000">
            Payment
          </Typography>
          <Box display="flex" py={2}>
            <Box
              component="img"
              src="https://play-lh.googleusercontent.com/cnKJYzzHFAE5ZRepCsGVhv7ZnoDfK8Wu5z6lMefeT-45fTNfUblK_gF3JyW5VZsjFc4"
              alt="kbzPay"
              width="25%"
              mr={1}
              borderRadius={2}
            />
            <Box
              component="img"
              src="https://play-lh.googleusercontent.com/rPq4GMCZy12WhwTlanEu7RzxihYCgYevQHVHLNha1VcY5SU1uLKHMd060b4VEV1r-OQ"
              alt="wavePay"
              width="25%"
              borderRadius={2}
            />
          </Box>
        </Box>
        {/* Download app - Scan */}
        <Box
          display="flex"
          flexDirection="column"
          px={2}
          justifyContent="center"
          alignItems="center"
          alignSelf="start"
        >
          <Typography variant="body2" fontWeight="bold" color="#000" mb={1}>
            Download our app
          </Typography>

          <Box
            component="img"
            src="https://www.corporateoffice.com/qr.php?id=2938&data=website"
            alt="QR Code"
            width="50%"
          />
        </Box>
      </Box>
      <Box width="100%" mt={8} display="flex" justifyContent="center">
        <Typography variant="caption" fontSize={11} textAlign="center" mb={0}>
          @Copyright 2023 by May Yadanar. All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};
