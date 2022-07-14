import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import arcadisLogo from '../images/arcadis-logo-black.svg';

export default function Header() {
  return (
    <Box>
      <AppBar position="static" color="transparent">
        <Toolbar sx={{ display: 'flex', margin: 'auto' }}>
          <Box
            component="img"
            alt="Arcadis-logo"
            src={arcadisLogo}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
