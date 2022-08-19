import { Box, CardContent, Typography } from "@mui/material";
import styled from "styled-components";

const StyledTypography = styled(Typography)`
variant: body1;
justify-content: center;
text-align: center;
`;

function About() {
const currentYear = new Date().getFullYear();
console.log(currentYear);

  return (
    <Box m={4} sx={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
      <StyledTypography variant="h4">ABOUT US</StyledTypography>

      <Box m={5}>
      <StyledTypography>
        We're on a mission to make it easier to know your Heroes and identify
        the Villains.
      </StyledTypography>

      <StyledTypography>
        Feel free to add in your heroes! Villains are welcome, too.
      </StyledTypography>

      

      <StyledTypography m={5}> © {currentYear}</StyledTypography>
      </Box>
    </Box>
  );
}

export { About };
