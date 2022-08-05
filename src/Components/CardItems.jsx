import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Box } from "@mui/system";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function CardItems() {
  return (
    <Container className="cardContainer">
      <Card>
          <CardContent sx={{backgroundColor:"#F9F9F9"}}>
            <Typography gutterBottom variant="h5" component="div">
              Villain Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is a sample villain description.
            </Typography>
          </CardContent>
          <Box sx={{color:"black"}}>
            <Button sx={{width:"50%", color:"black"}}>
            <DeleteIcon sx={{fontSize:"medium"}}/>
            Delete
            </Button>
            <Button sx={{width:"50%",  color:"black"}}><EditIcon sx={{fontSize:"medium"}}/>Edit</Button>
          </Box>
      </Card>
    </Container>
  );
}
