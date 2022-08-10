import { Box } from "@mui/system";
import React, {useState} from "react";
import { Card, CardContent, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

export default function EditEntry(props, id) {
  const [hero, setHero] = useState({
    name: "testName",
    description: "testDescription",
  });


  function handleChange(event) {
    const { name, value } = event.target;
    
    setHero((prevHero) => {
      return {
        [name]: value,
      };
    });
  }

  function submitCharacter() {
    props.onEdit(hero);
  }

  return (
    <Box sx={{width:"90%"}}>
    <Typography variant="h4" color="red">EDIT ENTRY</Typography>
    <Card
      sx={{
        backgroundColor: "#F9F9F9",
        marginTop: "20px",
        marginBottom: "20px",
        border: "2px solid red",
        width:"50%"
      }}
    >
      <CardContent sx={{display:"flex", justifyContent:"space-around"}}>
        <TextField
          id="outlined-basic"
          label="Character Name"
          variant="outlined"
          autoComplete="off"
          name="name"
          value={hero.name}
          onChange={handleChange}
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
        UPDATE CHARACTER
      </Button>
    </Card>
  </Box>
  ); 
}
