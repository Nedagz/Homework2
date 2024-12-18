import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function HeaderComponent() {
  return (
    <Box>
      <AppBar position="static" className="p-6">
        <Toolbar sx={{display: "flex", flexDirection: "column"}}>
          <Typography variant="h4" component="div">
           Countries App
          </Typography>
          <Typography variant="h6" component="div" >
           Home
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
