import React from "react";
import AddIcon from "@mui/icons-material/Add";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import { Route, Routes, Link } from "react-router-dom";
import EditEntry from "./EditEntry";

export default function Title() {
  return (
    <div className="subHeader">
      <Box sx={{ display: "flex" }}>
        <Typography variant="h5" color="black" sx={{ padding: "5px" }}>
          HEROES
        </Typography>

        <Link to="/AddEntry">
          <IconButton>
            <AddIcon />
          </IconButton>
        </Link>

        <IconButton href="/">
          <AutorenewIcon />
        </IconButton>
      </Box>
    </div>
  );
}
