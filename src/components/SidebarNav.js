import * as React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

// Config
import config from '../libs/config';
const { routes } = config;

export default function SidebarNav(props) {
  return (
    <Drawer
      sx={{
        width: process.env.sidebarWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: process.env.sidebarWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Typography variant='subtitle2'>Agri-Purchase Management</Typography>
      </Toolbar>
      <Divider />
      <List>
        {routes.filter((r) => r.showInNav).map((item, index) => (
          <Link key={item.title} href={item.pathname} passHref>
            <ListItemButton
              selected={item.pathname === props.pathname}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </Drawer>
  );
}
