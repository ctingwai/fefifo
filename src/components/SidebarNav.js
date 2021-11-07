import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

// Sidebar items
const items = [
  {
    text: 'Agri-Input Master Maintenance',
  },
  {
    text: 'Supplier Master Maintenance',
  },
  {
    text: 'Agri-Input Purchase Requests',
  },
];

export default function SidebarNav() {
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
        {items.map((item, index) => (
          <ListItem button key={item.text}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
