import React from "react";
import AddIcon from "@mui/icons-material/Add";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

export default function Title() {
  return (
    <div className="subHeader">
      <Box sx={{ display: "flex"}}>
        <Typography variant="h5" color="black">
          HEROES
        </Typography>
          <Typography color="text.secondary" sx={{margin: "0px 10px"}}>
            <AddIcon sx={{  verticalAlign:"middle"}} />
          </Typography>
          <Typography color="text.secondary">
            <AutorenewIcon sx={{ verticalAlign:"middle" }} />
          </Typography>
      </Box>
    </div>
  );
}
