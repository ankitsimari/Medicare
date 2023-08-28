import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Logout from './Logout';

export default function User() {
  const [state, setState] = React.useState({
    right: false, // Only 'right' is needed
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, right: open }); // Only 'right' anchor is updated
  };


  const data = JSON.parse(localStorage.getItem("user"));
  console.log(data)

  const list = (anchor) => (
    <Box
      sx={{ width: 350 }} // Drawer width is set to a fixed value
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
       
      <List>
        {[<h5 className='m-0'>Name: {data.firstName} {data.lastName} </h5>, <h5 >Email : {data.email}</h5>, 
        <h5 className='m-0'>Booking: {booking?<div>
          <p>Session Id : "http://localhost:3000/videoRoom/Ankit?roomID=Ankit"</p>
        </div>:"No"}</h5>, ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Logout/>
    </Box>
  );
  let booking = localStorage.getItem("booking");


  return (
    <div>
      <Button className='btn btn-2 fw-bold px-4 mx-3 mx-lg-0  me-xl-5' onClick={toggleDrawer('right', true)}>{data.firstName}</Button> 
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>
    </div>
  );
}
