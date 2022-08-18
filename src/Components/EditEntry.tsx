import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent } from "@mui/material";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import styled from "styled-components";

const StyledCard = styled(Card)`
  background-color: #F9F9F9;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 2px solid black;
  width: 90%;
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const buttonCustomStyle = {
  width: "100%",
  border: "solid 1px #DCDCDC",
  color: "black",
}


const EditEntry = () => {
  const { characters, editCharacter } : any = useContext(GlobalContext);
  const [selectedCharacter, setSelectedCharacter] = useState({
    id: "",
    name: "",
    description: "",
  });

  const navigate = useNavigate();
  const currentCharId = useParams();

    useEffect(() => {
    const charId = currentCharId.id;

    const selectedCharacter = characters.find(char => char.id == charId)
   setSelectedCharacter(selectedCharacter);


    }, [currentCharId, characters] );
  
  const onSubmit = (e) => {
    e.preventDefault();
    editCharacter(selectedCharacter.id, selectedCharacter);
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
      <StyledCard>
        <form onSubmit={onSubmit}>
          <StyledCardContent>
            <TextField
              type="text"
              label="Character Name"
              variant="outlined"
              name="name"
              onChange={(e) => handleOnChange("name", e.target.value)}
              value={selectedCharacter.name}
              required
              sx={{mb:"20px"}}
            />

            <TextField
              label="Character Description"
              type="text"
              name="description"
              onChange={(e) => handleOnChange("description", e.target.value)}
              value={selectedCharacter.description}
              required
            />
          </StyledCardContent>
          <Button type="submit" variant="outlined" style={buttonCustomStyle}>
            Update Character
          </Button>
        </form>
      </StyledCard>
    </Box>
  );
};

export { EditEntry };
