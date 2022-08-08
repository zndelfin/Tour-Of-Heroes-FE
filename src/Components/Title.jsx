import React from "react";
import AddIcon from "@mui/icons-material/Add";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import AddEntry from "./AddEntry";
import App from "../App";

function navigate() {
  return alert("clicked");
}

export default function Title() {
  return (
    <div className="subHeader">
      <Box sx={{ display: "flex" }}>
        <Typography variant="h5" color="black" sx={{ padding: "5px" }}>
          HEROES
        </Typography>

        <IconButton href="AddEntry">
          <AddIcon />
        </IconButton>

        <IconButton onClick={navigate}>
          <AutorenewIcon />
        </IconButton>
      </Box>
    </div>
  );
}
