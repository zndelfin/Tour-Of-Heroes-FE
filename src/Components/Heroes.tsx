import { CardComponent } from "./CardComponent";
import { Menu } from "./Menu";
import { Title } from "./Title";
import { Box } from "@mui/system";
import styled from "styled-components";

const StyledBoxSpacing = styled(Box)`
  display: flex;
  justify-content: space-around;
`;

const StyledRightBoxSpacing = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

function Heroes() {
  return (
    <StyledBoxSpacing mt={2}>
    <Menu title="MENU"/>

    <StyledRightBoxSpacing>
      <Box>
      <Title titleSelected="Heroes" />
      </Box>

      <CardComponent />
    </StyledRightBoxSpacing>
  </StyledBoxSpacing>
  );
}

export { Heroes };
