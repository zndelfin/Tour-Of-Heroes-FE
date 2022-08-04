import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

export default function DenseMenu() {
  return (
    <Paper sx={{ width: 320 }}>
      <MenuList dense>
        <MenuItem>
          <ListItemText inset>Heroes</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Villains</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>About</ListItemText>
        </MenuItem>
        </MenuList>
    </Paper>
  );
}
