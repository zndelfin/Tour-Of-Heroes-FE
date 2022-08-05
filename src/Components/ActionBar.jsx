import React from "react";
import AddIcon from "@mui/icons-material/Add";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

export default function ActionBar() {
  return (
    <div className="subHeader">
<<<<<<< HEAD
      <Box sx={{ display: "flex", marginLeft:"370px"}}>
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
=======
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
>>>>>>> 0e37c73da841806ed101af9578930e7dfae32c95
    </div>
  );
}
