import * as React from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/system";
import { Outlet, Link } from "react-router-dom";

export default function Menu() {
  return (
    <Box>
      <MenuList dense className="menuList">
        <MenuItem>MENU</MenuItem>

        <Link to="/heroes">
          <MenuItem className="menuItem">
            <ListItemText inset>Heroes</ListItemText>
          </MenuItem>
        </Link>

        <Link to="/villains">
          <MenuItem className="menuItem">
            <ListItemText inset>Villains</ListItemText>
          </MenuItem>
        </Link>

        <Link to="/about">
          <MenuItem className="menuItem">
            <ListItemText inset>About</ListItemText>
          </MenuItem>
        </Link>
      </MenuList>
    <Outlet/>
    </Box>
  );
}
