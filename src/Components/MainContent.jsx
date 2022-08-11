import React, { useState } from "react";
import CardItems from "./CardItems";
import Menu from "./Menu";
import { Box } from "@mui/system";
import heroes from "../heroes";
import AddEntry from "./AddEntry";
import EditEntry from "./EditEntry";
import Title from "./Title";


export default function MainContent() {

  const [entries, setEntries] = useState(heroes);

  // const [selectedEntry, setValues] = useState({});

  function addHero(newHero) {
    setEntries((prevHeroes) => {
      return [...prevHeroes, newHero];
    });
    //console.log(newHero);
  }

  function deleteHero(id) {
    setEntries((prevValues) => {
      return prevValues.filter((heroItem, index) => {
        return index !== id;
      });
    });
    //console.log(id);
    // console.log("delete button clicked from MainContent");
  }

  function editHero(id) {
    setEntries((prevValues) => {
      console.log(id);
      return prevValues.filter((heroItem, index) => {
        //index === id ? <EditEntry onEdit={editHero} /> : null;
      });
    });

    console.log("EDIT button clicked from MainContent");
  }

  return (
    <Box sx={{display:"flex", justifyContent:"space-around"}}>
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
      <Box> <Title /> </Box>
        {/* MAP POPULATING NEW CARDS WITH NEW HERO */}
        {entries.map((heroEntry, index) => {
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
        })}

        {/* <AddEntry onAdd={addHero} /> */}

        {/* <EditEntry onEdit={editHero} />  */}

      </Box>
    </Box>
  );
}
