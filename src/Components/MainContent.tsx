import { useState } from "react";
import CardItems from "./CardItems";
import Menu from "./Menu";
import { Box } from "@mui/system";
import heroes from "../heroes";
import AddEntry from "./AddEntry";
import EditEntry from "./EditEntry";
import Title from "./Title";
import App from "../App";
import CardComponent from "./CardComponent";


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


        {/* ------------CARD COMPONENT DISPLAY--------------- */}
        <CardComponent />

        {/* MAP POPULATING NEW CARDS WITH NEW HERO */}
        {/* {entries.map((heroEntry, index) => {
          return (
            <CardItems
              key={index}
              id={index}
              name={heroEntry.name}
              description={heroEntry.description}
              onDelete={deleteHero}
              onEdit={editHero}
            />
          );
        })} */}

        {/* <AddEntry onAdd={addHero} />  */}

        {/* <EditEntry onEdit={editHero} />  */}
      </Box>
    </Box>
  );
} 

