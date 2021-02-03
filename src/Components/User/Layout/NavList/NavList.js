import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Inbox as InboxIcon } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const NavList = () => {
  return (
    <List>
      <List>
        <Link to="/">
          <ListItem button key="Home">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link to="/events">
          <ListItem button key="Events">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Events" />
          </ListItem>
        </Link>
      </List>
    </List>
  );
};
export default NavList;
