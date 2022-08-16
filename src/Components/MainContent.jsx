import React from "react";
import Menu from "./Menu";
import { Box } from "@mui/system";
import Title from "./Title";
import CardComponent from "./CardComponent";

export default function MainContent() {
  return (
    <Box mt={2}
    sx={{ 
      display: "flex", 
      justifyContent: "space-around" 
      }}>

     
      <Menu title="MENU" />
   
      <Box
        sx={{
          // display: "flex",
          // flexDirection: "column",
          // float: "right",
          width: "70%",
        }}
      >
        <Title />

        <CardComponent />
      </Box>
    </Box>
  );
}
