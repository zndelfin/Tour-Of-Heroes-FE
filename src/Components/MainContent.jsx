import React from "react";
import Menu from "./Menu";
import { Box } from "@mui/system";
import Title from "./Title";
import CardComponent from "./CardComponent";


export default function MainContent() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      <Menu />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          float: "right",
          width: "70%",
        }}
      >
        <Box>
          <Title />
        </Box>

        <CardComponent />

      </Box>
    </Box>
  );
} 

