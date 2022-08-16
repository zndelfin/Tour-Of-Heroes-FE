import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditLogo from "../assets/pen-to-square-solid.svg";

export default function CardItems({ id, name, description, onClick }) {
  return (
    <Card
      sx={{
        marginTop: "25px",
        marginBottom: "20px",
        marginRight: "20px",
        borderRadius: "0px",
      }}
    >
      <CardContent sx={{ backgroundColor: "#F9F9F9", borderRadius: "0px" }}>
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
            borderRadius: "0px",
          }}
        >
          <DeleteIcon
            sx={{ fontSize: "medium", color: "#757575", marginRight: "5px" }}
          />
          <Typography color="text.secondary">Delete</Typography>
        </Button>
        <Link to={`/edit-entry/${id}`}>
          <Button
            sx={{
              borderRadius: "0px",
              width: "50%",
              color: "black",
              textTransform: "none",
              border: "solid 1px #DCDCDC",
            }}
          >
            <img className="editLogo" src={EditLogo} width="15px" />
            <Typography color="text.secondary" marginLeft={"5px"}>
              Edit
            </Typography>
          </Button>
        </Link>
      </Box>
    </Card>
  );
}
