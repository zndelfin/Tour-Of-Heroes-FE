import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import styled from "styled-components";
import EditLogo from "../assets/pen-to-square-solid.svg";

const buttonCustomStyle = {
  width: "50%",
  textTransform: "none",
  border: "solid 1px #DCDCDC",
  color: "black",
};

export default function CardItems({ id , name, description, onClick }) {
  return (
    <Box>
      <Card
        sx={{mt: "15px", mb: "20px", mr: "20px"}}>
        <CardContent sx={{ backgroundColor: "#F9F9F9"}}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <Box sx={{ color: "black" }}>
          <Button onClick={onClick} style={buttonCustomStyle}>
            <DeleteIcon
              sx={{ fontSize: "medium", color: "#757575", mr: "5px" }}
            />
            <Typography color="text.secondary">Delete</Typography>
          </Button>
          
          <Link to={`/edit-entry/${id}`} style={{textDecoration:"none"}}>
          <Button style={buttonCustomStyle}>
          <img className="editLogo" src={EditLogo} width="15px"/> 
          <Typography color="text.secondary" ml={1}>Edit</Typography>
          </Button>
          </Link>
        </Box>
      </Card>
    </Box>
  );
}
