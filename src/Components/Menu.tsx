import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import styled from "styled-components";

const StyledListItemText = styled(ListItemText)`
  padding-left: 10px;
  &:hover {
    color: #ffffff;
  }
`;

const menuItemStyling = {
  color: "#757575",
  borderRadius: "2px",
  width: "17rem",
  "&:hover": { backgroundColor: "#22a5e2", color: "#FFFFFF" }
}

const linkStyle = {
  textDecoration: "none"
};

function Menu({ title }) {
  return (
    <Box>
      <Typography color="text.secondary" pl={2}>
        {title}
      </Typography>
      
      <MenuList dense sx={{ width: "17rem" }}>
        <Link to="heroes" style={linkStyle}>
        <MenuItem disableRipple sx={menuItemStyling}>
          <StyledListItemText inset>
            <Typography>Heroes</Typography>
          </StyledListItemText>
        </MenuItem>
        </Link>

        <Link to="villains" style={linkStyle}>
        <MenuItem disableRipple sx={menuItemStyling}>
          <StyledListItemText inset>
            <Typography>Villains</Typography>
          </StyledListItemText>
        </MenuItem>
        </Link>

        <Link to="about" style={linkStyle}>
        <MenuItem disableRipple sx={menuItemStyling}>
          <StyledListItemText inset>
            <Typography>About</Typography>
          </StyledListItemText>
        </MenuItem>
        </Link>
      </MenuList>
    </Box>
  );
}


export { Menu };