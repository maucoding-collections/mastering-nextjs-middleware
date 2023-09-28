import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Link from "next/link";

export default function Menu() {
  return (
    <Paper sx={{ width: 320, maxWidth: "100%" }}>
      <MenuList sx={{ height: "100vh", borderRadius: 0 }}>
        <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            <Link href="/dashboard/news">News</Link>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            <Link href="/dashboard/user">User</Link>
          </ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          {/* <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon> */}
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
