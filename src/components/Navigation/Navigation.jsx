import { AppBar, Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HorizontalSplitOutlinedIcon from "@mui/icons-material/HorizontalSplitOutlined";
import React from "react";

export const Navigation = () => {
  const [isNavTransparent, setIsNavTransparent] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsNavTransparent(false);
      } else {
        setIsNavTransparent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      elevation={0}
      sx={{
        background: isNavTransparent ? "transparent" : "black",
        transition: "background 0.5s ease-in-out",
      }}
    >
      <Box
        py={1}
        px={6}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box component="img" src="./assets/logo.png" width="50px" />
        <Box display="flex" justifyContent="space-around" alignItems="center">
          <IconButton size="small">
            <SearchIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton size="small">
            <ShoppingCartOutlinedIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton size="small">
            <HorizontalSplitOutlinedIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Box>
    </AppBar>
  );
};
