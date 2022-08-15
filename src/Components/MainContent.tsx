import Menu from "./Menu";
import { Box } from "@mui/system";
import Title from "./Title";
import CardComponent from "./CardComponent";
import styled from "styled-components";

export default function MainContent() {

  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      {/* MENU COMPONENT */}
      <Menu />

      {/* TITLE COMPONENT */}
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


        {/* CARD COMPONENT DISPLAY */}
        <CardComponent />

      </Box>
    </Box>
  );
} 

