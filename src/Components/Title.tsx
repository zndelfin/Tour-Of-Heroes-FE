import AddIcon from "@mui/icons-material/Add";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Title({ titleSelected }: any) {
  const { pullData }: any = useContext(GlobalContext);

  let location = useLocation();
  let path = location.pathname;

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        variant="h5"
        color="black"
        sx={{
          pl: "10px",
          pr: "10px",
          borderLeft: "15px solid #22a5e2",
          borderBottom: "3px solid #22a5e2",
          textTransform: "uppercase"
        }}
      >
        {path === "/" ? (titleSelected = "Heroes") : titleSelected}
      </Typography>

      <Link to="/add-entry">
        <IconButton>
          <AddIcon fontSize="small" />
        </IconButton>
      </Link>

      <Link to="/">
        <IconButton>
          <AutorenewIcon fontSize="small" onClick={pullData()} />
        </IconButton>
      </Link>
    </Box>
  );
}

export { Title };
