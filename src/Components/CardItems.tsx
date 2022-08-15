import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

export default function CardItems(props) {

  return (
    <Box>
      <Card sx={{ marginBottom: "20px" }}>
        <CardContent sx={{ backgroundColor: "#F9F9F9" }}>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>

        <Box sx={{ color: "black" }}>
          <Button
            onClick={props.onClick}
            sx={{
              width: "50%",
              color: "black",
              textTransform: "none",
              border: "solid 1px #DCDCDC",
            }}
          >
            <DeleteIcon fontSize="small" />
            Delete
          </Button>


          <Link to={`/edit-entry/${props.id}`}>
          <Button
            sx={{
              width: "50%",
              color: "black",
              textTransform: "none",
              border: "solid 1px #DCDCDC",
            }}
          >
            <EditIcon fontSize="small"/>
            Edit
          </Button>
          </Link>
        </Box>
      </Card>
    </Box>
  );
}
