import Menu from "./Menu";
import { Box } from "@mui/system";
import Title from "./Title";
import CardComponent from "./CardComponent";
import styled from "styled-components";

const BoxSpacing = styled(Box)`
  display: flex;
  justify-content: space-around;
`;

const RightBoxSpacing = styled(Box)`
  display: flex;
  flex-direction: column;
  float: right;
  width: 70%;
`;

export default function MainContent() {
  return (
    <BoxSpacing mt={2}>
      <Menu title="MENU"/>

      <RightBoxSpacing>
        <Box>
          <Title />
        </Box>

        <CardComponent />
      </RightBoxSpacing>
    </BoxSpacing>
  );
}
