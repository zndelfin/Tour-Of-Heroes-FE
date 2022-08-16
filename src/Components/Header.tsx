import reactLogo from "../assets/react.svg";

export default function Header() {
  return (
    <div className="nav">
      <div className="tooltip"> .
        <span className="tooltiptext">v0816 3:31PM</span>
      </div>
      <img className="logo" src={reactLogo} alt="React logo" />
      <div className="headerTitle">
        <h3 className="whiteTitle">TOUR</h3>
        <h3 className="grayTitle">OF</h3>
        <h3 className="blueTitle">HEROES</h3>
      </div>
    </div>
  );
}
