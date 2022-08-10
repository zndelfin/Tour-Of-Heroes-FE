import React from "react";
import AddIcon from "@mui/icons-material/Add";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";

export default function Title() {
  return (
    <div className="subHeader">
      <Box sx={{ display: "flex" }}>
        <Typography variant="h5" color="black" sx={{ padding: "5px" }}>
          HEROES
        </Typography>

        <IconButton >
          <AddIcon />
        </IconButton>

        <IconButton href="/">
          <AutorenewIcon />
        </IconButton>
      </Box>
    </div>
  );
}
