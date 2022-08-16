import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { TextField, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export const AddEntry = () => {
  const navigate = useNavigate();  
  const { addCharacter, characters } = useContext(GlobalContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");


  const onSubmit = (e) => {
    e.preventDefault();
    const newCharacter = {
      id: uuid(),
      name,
      description,
    };

    addCharacter(newCharacter);
    navigate("/");
  };


  return (
    <Box
      m={5}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h5">Add Character</Typography>
      <Card
        sx={{
          backgroundColor: "#F9F9F9",
          marginTop: "20px",
          marginBottom: "20px",
          border: "2px solid black",
          width: "90%",
        }}
      >
        <form onSubmit={onSubmit}>
          <CardContent sx={{ display: "flex", justifyContent: "space-around" }}>
            <TextField
              label="Character Name"
              variant="outlined"
              autoComplete="off"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
            />

            <TextField
              label="Character Description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              name="description"
            />

          </CardContent>
          <Button type="submit" variant="outlined" sx={{ width: "100%" }}>
            Submit
          </Button>
        </form>
      </Card>
    </Box>
  );
};

export default AddEntry;
