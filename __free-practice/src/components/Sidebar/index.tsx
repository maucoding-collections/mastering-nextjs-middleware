"use client";

import { useCallback } from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Link from "next/link";

const Menu = () => {
  const logoutHandler = useCallback(async (e) => {
    e.preventDefault();
    const doLogout = confirm("Are you sure!");
    if (doLogout) {
      const request = await fetch("/api/logout", {
        method: "post",
      });
      const response = await request.json();
      if (response.error) {
        alert(response.error);
      } else {
        location.href = "/";
      }
    }
  }, []);

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
          <ListItemText>
            <a href="#" onClick={logoutHandler}>
              Logout
            </a>
          </ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
};

export default Menu;
