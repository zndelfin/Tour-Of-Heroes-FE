import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export default function Menu(props) {
  return (
    <Box>
      <Typography color="text.secondary" sx={{padding:"10px 0px 0px 20px"}}>{props.title}</Typography>
      <MenuList dense className="menuList">
        <MenuItem className="menuItem">
          <ListItemText inset><Typography color="text.secondary">Heroes</Typography></ListItemText>
        </MenuItem>
        <MenuItem className="menuItem">
          <ListItemText inset><Typography color="text.secondary">Villains</Typography></ListItemText>
        </MenuItem>
        <MenuItem className="menuItem">
          <ListItemText inset><Typography color="text.secondary">About</Typography></ListItemText>
        </MenuItem>
        </MenuList>
    </Box>
  );
}
