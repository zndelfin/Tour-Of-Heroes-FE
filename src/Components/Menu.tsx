import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const StyledListItemText = styled(ListItemText)`
  padding-left: 10px;
  &:hover {
    color: #ffffff;
  }
`;

const menuItemStyling = {
  color: "#757575",
  borderRadius: "2px",
  "&:hover": { backgroundColor: "#22a5e2", color: "#FFFFFF" },
  "&.Mui-selected": {
    backgroundColor: "#22a5e2", color: "#FFFFFF"
  }
}


function Menu({ title} : any) {
  let location = useLocation();
  let path = location.pathname;

  return (
    <Box width="25%">
      <Typography color="text.secondary" pl={2}>
        {title}
      </Typography>
      
      <MenuList dense>
        <MenuItem 
        component={Link} 
        to="/heroes" 
        selected={path === '/heroes'}
        disableRipple 
        sx={menuItemStyling} >
          <StyledListItemText inset>
            <Typography>Heroes</Typography>
          </StyledListItemText>
        </MenuItem>


        <MenuItem 
        component={Link} 
        to="/villains"  
        disableRipple 
        sx={menuItemStyling}
        selected={path === "/villains"}
        >
          <StyledListItemText inset>
            <Typography>Villains</Typography>
          </StyledListItemText>
        </MenuItem>

        <MenuItem 
        component={Link} 
        to="/about"  
        disableRipple 
        selected={path === '/about'}
        sx={menuItemStyling}
        >
          <StyledListItemText inset>
            <Typography>About</Typography>
          </StyledListItemText>
        </MenuItem>
      </MenuList>
    </Box>
  );
}


export { Menu };