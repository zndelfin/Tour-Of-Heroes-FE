import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

export default function Menu() {
  return (
      <MenuList dense className="menuList" >
        <MenuItem>
          MENU
        </MenuItem>
        <MenuItem className="menuItem">
          <ListItemText inset>Heroes</ListItemText>
        </MenuItem>
        <MenuItem className="menuItem">
          <ListItemText inset>Villains</ListItemText>
        </MenuItem>
        <MenuItem className="menuItem">
          <ListItemText inset>About</ListItemText>
        </MenuItem>
        </MenuList>
  );
}
