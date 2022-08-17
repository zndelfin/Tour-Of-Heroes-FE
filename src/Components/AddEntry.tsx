import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { TextField, Typography } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import Button from "@mui/material/Button";
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
  justify-content: space-around;
`;

const buttonCustomStyle = {
  width: "100%",
  textTransform: "none",
  border: "solid 1px #DCDCDC",
  color: "black",
}

const AddEntry = () => {
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
      <StyledCard>
        <form onSubmit={onSubmit}>
          <StyledCardContent>
            <TextField
              label="Character Name"
              variant="outlined"
              autoComplete="off"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
            />

            <TextField
              label="Character Description"
              type="text"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              name="description"
            />
          </StyledCardContent>
          <Button type="submit" variant="outlined" style={buttonCustomStyle}>
            ADD CHARACTER
          </Button>
        </form>
      </StyledCard>
    </Box>
  );
};

export {AddEntry};
