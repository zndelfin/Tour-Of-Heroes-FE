import reactLogo from "../assets/react.svg";
import { version } from "/package.json";

function Header() {
  return (
    <div className="nav">
      <div className="tooltip"> .
        <span className="tooltiptext">{version}</span>
      </div>
      <img className="logo" src={reactLogo} alt="React logo" />
      <div className="headerTitle">
        <h3 className="whiteTitle">TOUR</h3>
        <h3 className="grayTitle">OF</h3>
        <h3 className="blueTitle">HEROES</h3>
      </div>
    {console.log(version)}
    </div>
  );
}

export {Header};