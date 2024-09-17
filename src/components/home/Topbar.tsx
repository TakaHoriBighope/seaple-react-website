import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { mediaQuery, useMediaQuery } from "../../utiles/useMediaQuery";

import { ToggleButton } from "./burger/ToggleButton";
// import { Navigation } from "./burger/Navigation";

const Topbar = () => {
  const isSp = useMediaQuery(mediaQuery.sp);

  const [open, setOpen] = useState(false);

  const toggleFunction = () => {
    setOpen((prevState) => !prevState);
  };

  if (isSp) {
    return (
      <Box
        sx={{
          height: "38px",
          width: "100%",
          backgroundColor: "#2c517c",
          display: "flex",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "baseline" }}>
          <header className="header">
            <ToggleButton
              open={open}
              controls="navigation"
              label="メニューを開きます"
              onClick={toggleFunction}
            />
            {/* <Navigation id="navigation" open={open} /> */}
          </header>
          <Typography
            fontSize="15px"
            color="white"
            fontWeight="bold"
            margin="0 0 0 25px"
            textTransform="capitalize"
          >
            シープルダイビングスクール
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height: "50px",
        width: "100%",
        backgroundColor: "#2c517c",
        display: "flex",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <Box sx={{ flex: 4, display: "flex", alignItems: "baseline" }}>
        <Typography
          fontSize="26px"
          color="white"
          fontWeight="bold"
          margin="0 0 0 25px"
          textTransform="capitalize"
        >
          シープルダイビングスクール
        </Typography>
      </Box>
    </Box>
  );
};

export default Topbar;
