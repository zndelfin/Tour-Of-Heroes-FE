import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent } from "@mui/material";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";

export const EditEntry = (props) => {
  const { characters, editCharacter } = useContext(GlobalContext);
  const [selectedCharacter, setSelectedCharacter] = useState({
    id: "",
    name: "",
    description: "",
  });

  const navigate = useNavigate();
  const currentCharId = useParams();
  // const currentUserId = useParams();

  useEffect(() => {
    const charId = currentCharId;
    const selectedCharacter = characters.find((character) => character.id === charId);
    setSelectedCharacter(selectedCharacter);
  }, [currentCharId, characters]);

  const onSubmit = (e) => {
    e.preventDefault();
    editCharacter(selectedCharacter);
    navigate("/");
  };

const handleOnChange = (propertyName) => (event) => {
  setSelectedCharacter((character) => ({
    ...character,
    [propertyName]: event.target.value
  }));
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
      <Typography variant="h5">Edit Character</Typography>
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
              type="text"
              id="outlined-basic"
              label="Character Name"
              variant="outlined"
              onChange={handleOnChange("name")}
              value={name}
              required
            ></TextField>

            <TextField
              id="outlined-multiline-flexible"
              label="Character Description"
              type="text"
              onChange={handleOnChange("description")}
              value={description}
              required
            ></TextField>
          </CardContent>
          <Button type="submit" variant="outlined" sx={{ width: "100%" }}>
            UPDATE CHARACTER
          </Button>
        </form>
      </Card>
    </Box>
  );
};

export default EditEntry;
