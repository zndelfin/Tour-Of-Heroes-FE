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
  flex-direction: column;
  justify-content: space-around;
`;

const buttonCustomStyle = {
  width: "100%",
  border: "solid 1px #DCDCDC",
  color: "black",
}

const AddEntry = () => {
  const navigate = useNavigate();  
  const { addCharacter } = useContext(GlobalContext);

  const [newCharacter, setNewCharacter] = useState({
    name:"",
    description:""
  });

  const onChange = (e) => {
    setNewCharacter({...newCharacter, [e.target.name]: e.target.value})
  }

  const {name, description} = newCharacter;

  const onSubmit = (e) => {
    e.preventDefault();
    addCharacter(name, description);
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
              onChange={(e) => onChange(e)}
              name="name"
              sx={{mb:"20px"}}
            />

            <TextField
              label="Character Description"
              type="text"
              required
              value={description}
              onChange={(e) => onChange(e)}
              name="description"
            />
          </StyledCardContent>
          <Button type="submit" variant="outlined" style={buttonCustomStyle}>
            Add Character
          </Button>
        </form>
      </StyledCard>
    </Box>
  );
};

export {AddEntry};
