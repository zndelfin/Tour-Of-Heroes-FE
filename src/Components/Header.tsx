import { Box } from "@mui/system";
import { version } from "../version";
import { Logo } from "./Logo";

function Header() {
  return (
    <div className="nav">
      <div className="tooltip">
        .<span className="tooltiptext">{version}</span>
      </div>

      <a className="headerBox" href="/">
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Logo />
          <Box className="headerTitle">
            <h3 className="whiteTitle">TOUR</h3>
            <h3 className="grayTitle">OF</h3>
            <h3 className="blueTitle">HEROES</h3>
          </Box>
        </Box>
      </a>
    </div>
  );
}

export { Header };
