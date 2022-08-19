import { Box } from "@mui/system";
import reactLogo from "../assets/react.svg";
import { version } from "../version";

function Header() {
  return (
    <div className="nav">
      <div className="tooltip">
        .<span className="tooltiptext">{version}</span>
      </div>

      <a className="headerBox" href="/">
      <Box sx={{display:"flex", flexDirection:"row"}}>
      <img className="logo" src={reactLogo} alt="React logo"/>
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
