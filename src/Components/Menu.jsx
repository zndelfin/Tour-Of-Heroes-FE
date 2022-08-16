import * as React from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function Menu(props) {
  return (
    <Box pr={5} mt={1}>
      <Typography color="text.secondary" sx={{ padding: "10px 0px 0px 20px" }}>
        {props.title}
      </Typography>
      <MenuList dense className="menuList" >
        <MenuItem className="itemMenu" disableRipple sx={{ color:"#757575", marginLeft: "20px", borderRadius:"2px", "&:hover": { backgroundColor: "#22a5e2", color:"#FFFFFF" }}}>
          <ListItemText inset sx={{ paddingLeft: "10px", "&:hover": { color:"#FFFFFF" } }}>
            <Typography>Heroes</Typography>
          </ListItemText>
        </MenuItem>

        <MenuItem className="itemMenu" disableRipple sx={{ color:"#757575", marginLeft: "20px", borderRadius:"2px", "&:hover": { backgroundColor: "#22a5e2", color:"#FFFFFF" }}}>
          <ListItemText inset sx={{ paddingLeft: "10px", "&:hover": { color:"#FFFFFF" } }}>
            <Typography>Villains</Typography>
          </ListItemText>
        </MenuItem>

        <MenuItem className="itemMenu" disableRipple sx={{ color:"#757575", marginLeft: "20px", borderRadius:"2px", "&:hover": { backgroundColor: "#22a5e2", color:"#FFFFFF" }}}>
          <ListItemText inset sx={{ paddingLeft: "10px", "&:hover": { color:"#FFFFFF" } }}>
            <Typography>About</Typography>
          </ListItemText>
        </MenuItem>

      </MenuList>
    </Box>
  );
}
