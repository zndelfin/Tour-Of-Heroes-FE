import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@mui/material";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";

export const EditEntry = () => {
  const { characters, editCharacter } = useContext(GlobalContext);
  const [selectedCharacter, setSelectedCharacter] = useState({
    id: "",
    name: "",
    description: "",
  });

  const navigate = useNavigate();
  const currentCharId = useParams();
  // console.log(currentCharId.id)

    useEffect(() => {
    const charId = currentCharId.id;
    console.log("type of the charId is : " + typeof currentCharId);
    const selectedCharacter = characters.find(char => char.id == charId)
   setSelectedCharacter(selectedCharacter);
    console.log(selectedCharacter);
    }, [currentCharId, characters] );
  
  const onSubmit = (e) => {
    e.preventDefault();
    editCharacter(selectedCharacter);
    navigate("/");
  };

  const handleOnChange = (charKey, newValue) =>
    setSelectedCharacter({ ...selectedCharacter, [charKey]: newValue });

  // if (!selectedCharacter || !selectedCharacter.id) {
  //   return <div>Invalid Employee ID.</div>;
  // }

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
              name="name"
              onChange={(e) => handleOnChange("name", e.target.value)}
              value={selectedCharacter.name}
              required
            ></TextField>

            <TextField
              id="outlined-multiline-flexible"
              label="Character Description"
              type="text"
              name="description"
              onChange={(e) => handleOnChange("description", e.target.value)}
              value={selectedCharacter.description}
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
