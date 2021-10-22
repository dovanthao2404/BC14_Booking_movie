import { Box } from "@mui/system";
import React from "react";
import NavTop from "./NavTop";
import Pay from "./Pay";
import Seat from "./Seat";

export default function Checkout(props) {
  const { screenWidth } = props;
  return (
    <>
      <NavTop />
      <Box sx={{ marginTop: "60px" }}>
        <Seat />
        <Pay />
      </Box>
    </>
  );
}
