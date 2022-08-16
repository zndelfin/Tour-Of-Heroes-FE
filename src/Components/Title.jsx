import React from "react";
import AddIcon from "@mui/icons-material/Add";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";


export default function Title() {
  return (
      <Box sx={{ display: "flex",  alignItems:"center" }}>
        <Typography
          variant="h5"
          color="black"
          sx={{
            paddingLeft: "10px",
            paddingRight: "10px",
            borderLeft: "15px solid #22a5e2",
            borderBottom: "3px solid #22a5e2",
          }}
        >
          HEROES
        </Typography>

        <Link to="/add-entry">
          <IconButton>
            <AddIcon fontSize="small" />
          </IconButton>
        </Link>

        <Link to="/">
          <IconButton>
            <AutorenewIcon fontSize="small" />
          </IconButton>
        </Link>
      </Box>
  );
}
