import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import styled from "styled-components";

const buttonCustomStyle = {
  width: "50%",
  textTransform: "none",
  border: "solid 1px #DCDCDC",
  color: "black",
};

const CardContentColor = styled(CardContent) `
  background-color: #F9F9F9;
`;


export default function CardItems({id, name, description, onClick}) {

  return (
    <Box>
      <Card sx={{ marginBottom: "20px" }}>
        <CardContentColor>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContentColor>

        <Box sx={{ color: "black" }}>
          <Button onClick={onClick} style={buttonCustomStyle}>
            <DeleteIcon fontSize="small" />
            Delete
          </Button>


          <Link to={`/edit-entry/${id}`} style={{textDecoration:"none"}}>
          <Button style={buttonCustomStyle}>
            <EditIcon fontSize="small"/>
            Edit
          </Button>
          </Link>
        </Box>
      </Card>
    </Box>
  );
}
