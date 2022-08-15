import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent } from "@mui/material";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import styled from "styled-components";

const CardStyle = styled(Card)`
  background-color: #F9F9F9;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 2px solid black;
  width: 90%;
`;

const CardContentItems = styled(CardContent)`
  display: flex;
  justify-content: space-around;
`;



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

  if (!selectedCharacter || !selectedCharacter.id) {
    return <Typography m={4} variant="body1">Invalid Character ID</Typography>
  }

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
      <CardStyle>
        <form onSubmit={onSubmit}>
          <CardContentItems>
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
          </CardContentItems>
          <Button type="submit" variant="outlined" sx={{ width: "100%" }}>
            UPDATE CHARACTER
          </Button>
        </form>
      </CardStyle>
    </Box>
  );
};

export default EditEntry;
