import React from "react";
import Topbar from "../components/home/Topbar";
import { Box } from "@mui/material";
import { mediaQuery, useMediaQuery } from "../utiles/useMediaQuery";

const Home = () => {
  const isSp = useMediaQuery(mediaQuery.sp);
  if (isSp) {
    return (
      <>
        <Topbar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            backgroundColor: "#f8fcff",
          }}
        >
          {/* <InfoTimeLine mode="sub" /> */}
        </Box>
      </>
    );
  }
  return (
    <>
      <Topbar />
      <Box sx={{ display: "flex", width: "100%", backgroundColor: "#f8fcff" }}>
        {/* <Sidebar />
        <TimeLine mode="home" />
        <Rightbar /> */}
      </Box>
    </>
  );
};
export default Home;
