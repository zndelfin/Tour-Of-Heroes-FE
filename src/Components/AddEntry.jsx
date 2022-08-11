import React, { useState } from "react";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function AddEntry(props) {
  const [hero, setHero] = useState({
    id: "",
    name: "",
    description: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    console.log("Field Name: " + name + "\nValue: " + value);

    setHero((prevHero) => {
      return {
        ...prevHero,
        [name]: value,
      };
    });
  }

  function submitCharacter(event) {
    props.onAdd(hero);
    console.log(hero);
  }

  return (
    <Box m={3} sx={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
      <Typography variant="h4">Add Character</Typography>
      <Card
        sx={{
          backgroundColor: "#F9F9F9",
          marginTop: "20px",
          marginBottom: "20px",
          border: "2px solid black",
          width: "50%",
        }}
      >
        <CardContent sx={{ display: "flex", justifyContent: "space-around" }}>
          <TextField
            id="outlined-basic"
            label="Character Name"
            variant="outlined"
            autoComplete="off"
            name="name"
            onChange={handleChange}
            value={hero.name}
          />

          <TextField
            id="outlined-multiline-flexible"
            label="Character Description"
            multiline
            maxRows={4}
            name="description"
            value={hero.description}
            onChange={handleChange}
          />
        </CardContent>

        <Button
          variant="outlined"
          onClick={submitCharacter}
          sx={{ width: "100%" }}
        >
          ADD CHARACTER
        </Button>
      </Card>
      
    </Box>
  );
}
