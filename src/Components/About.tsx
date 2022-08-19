import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { Menu } from "./Menu";
import { Title } from "./Title";

const StyledTypography = styled(Typography)`
  justify-content: center;
  text-align: center;
`;

const StyledBoxSpacing = styled(Box)`
  display: flex;
  justify-content: space-around;
`;

const StyledRightBoxSpacing = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

function About() {
  const currentYear = new Date().getFullYear();

  return (
    <StyledBoxSpacing mt={2}>
      <Menu title="MENU" />
      <StyledRightBoxSpacing>
        <Title titleSelected="About" />

        <StyledTypography mt={10}>
          We're on a mission to make it easier to know your Heroes and identify
          the Villains.
        </StyledTypography>

        <StyledTypography>
          Feel free to add in your heroes! Villains are welcome, too!
        </StyledTypography>

        <StyledTypography mt={4}>
          Developed as part of the technical training for ISBX. 
        </StyledTypography>


        <StyledTypography m={5}> © {currentYear}</StyledTypography>
      </StyledRightBoxSpacing>
    </StyledBoxSpacing>

  );
}

export { About };
