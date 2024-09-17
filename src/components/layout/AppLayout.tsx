import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { mediaQuery, useMediaQuery } from "../../utiles/useMediaQuery";

const AppLayout = () => {
  const isSp = useMediaQuery(mediaQuery.sp);

  if (isSp) {
    <div>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ flexGrow: 1, p: 1, width: "max-content" }}>
          <Outlet />
        </Box>
      </Box>
    </div>;
  }
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flexGrow: 1, p: 1, width: "max-content" }}>
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};

export default AppLayout;
