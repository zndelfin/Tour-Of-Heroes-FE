import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import EditLogo from "../assets/pen-to-square-solid.svg";
import styled from "styled-components";

const StyledButton = styled(Button)`
  width: 50%;
  text-transform: none;
  color: black;
`;

function CardItems({ id, name, description, onClick }: any) {
  return (
    <Box sx={{flexGrow:"1"}}>
      <Card sx={{ mt: "15px", mb: "20px", mr: "20px" }}>
        <CardContent sx={{ backgroundColor: "#F9F9F9" }}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <Box sx={{ color: "black" }}>

          <StyledButton onClick={onClick} sx={{border: "solid 1px #DCDCDC"}}>
            <DeleteIcon
              sx={{ fontSize: "medium", color: "#757575", mr: "5px" }}
            />
            <Typography color="text.secondary">Delete</Typography>
          </StyledButton>

          <Link to={`/edit-entry/${id}`} style={{ textDecoration: "none" }}>
            <StyledButton sx={{border: "solid 1px #DCDCDC"}}>
              <img
                className="editLogo"
                src={EditLogo}
                width="15px"
                alt="edit-img"
              />
              <Typography color="text.secondary" ml={1}>
                Edit
              </Typography>
            </StyledButton>
          </Link>
        </Box>
      </Card>
    </Box>
  );
}

export { CardItems };
