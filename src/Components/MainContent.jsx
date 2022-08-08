import React from "react";
import CardItems from "./CardItems";
import Menu from "./Menu";
import { Box } from "@mui/system";
import heroes from "../heroes";

function createEntry(heroes){
    return (
        <CardItems 
        key={heroes.id}
        name={heroes.name}
        description={heroes.description}
        />
    );
}

export default function MainContent() {
  return (
    <Box>
      <Menu />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          float: "right",
          width: "70%",
          marginTop: "-110px",
        }}
      >
    
        <Box className="cardEntry" sx={{padding:"20px 20px 20px 0"}}>
        {heroes.map(createEntry)}
        </Box>
      </Box>
    </Box>
  );
}
