import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export default function Menu(props) {
  return (
    <Box>
      <Typography sx={{padding:"10px 0px 0px 30px"}}>{props.title}</Typography>
      <MenuList dense className="menuList" >
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
    </Box>
  );
}
