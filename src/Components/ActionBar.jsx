import React from "react";
import AddIcon from "@mui/icons-material/Add";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

export default function ActionBar() {
  return (
    <div className="subHeader">
    <Box sx={{ display: "flex"}}>
      <Typography variant="h5" color="text.secondary">
        HEROES
      </Typography>
      <Typography color="text.secondary">
        <AddIcon />
      </Typography> 
      <Typography color="text.secondary">
        <AutorenewIcon />
      </Typography>
    </Box>
    </div>
  );
}
