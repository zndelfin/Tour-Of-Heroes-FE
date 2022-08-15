import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

export default function CardItems({id, name, description, onClick}) {
  return (
    <Box>
      <Card sx={{ marginBottom: "20px" }}>
        <CardContent sx={{ backgroundColor: "#F9F9F9" }}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>

        <Box sx={{ color: "black" }}>
          <Button
            onClick={onClick}
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


          <Link to={`/edit-entry/${id}`}>
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
