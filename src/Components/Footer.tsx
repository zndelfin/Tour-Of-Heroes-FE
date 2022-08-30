import { Box } from "@mui/material";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box className="footer" p={1}>
        <div className="footerTitle">
        <h3 className="whiteTitle">TOUR</h3>
        <h3 className="grayTitle">OF</h3>
        <h3 className="blueTitle">HEROES </h3>
        <h3 className="copyright"> ⓒ {currentYear}</h3>
    </div>
    </Box>
  );
}

export { Footer };
