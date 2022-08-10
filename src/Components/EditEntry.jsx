import { Box } from "@mui/system";
import React, {useState} from "react";
import { Card, CardContent, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

export default function EditEntry(props) {
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
        />

        <TextField
          id="outlined-multiline-flexible"
          label="Character Description"
          multiline
          maxRows={4}
          name="description"
        />
      </CardContent>

      <Button
        variant="outlined"
        sx={{ width: "100%" }}
      >
        UPDATE CHARACTER
      </Button>
    </Card>
  </Box>
  ); 
}
