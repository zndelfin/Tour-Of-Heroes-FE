import AddIcon from "@mui/icons-material/Add";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { AddEntry } from "./AddEntry";

export default function Title() {
  return (
    <div>
      <Box sx={{ display: "flex", alignItems:"center"}}>
        <Typography variant="h5" color="black" p={2}>
          HEROES
        </Typography>

          <Link to="/add-entry">
            <IconButton>
              <AddIcon fontSize="small" />
            </IconButton>
          </Link>

          <Link to="/">
            <IconButton>
              <AutorenewIcon fontSize="small"/>
            </IconButton>
          </Link>
        </Box>
    </div>
  );
}
