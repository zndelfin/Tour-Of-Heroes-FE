import { Menu } from "./Menu";
import { Title } from "./Title";
import { CardComponent } from "./CardComponent";
import { Box } from "@mui/system";
import styled from "styled-components";

const StyledBoxSpacing = styled(Box)`
  display: flex;
  justify-content: space-around;
`;

const StyledRightBoxSpacing = styled(Box)`
  display: flex;
  flex-direction: column;
  float: right;
  width: 70%;
`;

function MainContent() {
  return (
    <StyledBoxSpacing mt={2}>
      <Menu title="MENU"/>

      <StyledRightBoxSpacing>
        <Box>
          <Title />
        </Box>

        <CardComponent />
      </StyledRightBoxSpacing>
    </StyledBoxSpacing>
  );
}

export { MainContent };
