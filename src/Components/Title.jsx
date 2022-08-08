import React from "react";
import AddIcon from "@mui/icons-material/Add";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import '@fontsource/roboto/400.css';


export default function Title() {
  return (
    <div className="subHeader">
      <Box sx={{ display: "flex"}}>
        <Typography variant="h5" color="black" sx={{borderLeft:"15px solid #22a5e2", borderBottom:"5px solid #22a5e2"}}>
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
