import React from 'react';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';

function Wrapper() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Outlet />
      </Container>
    </React.Fragment>
  );
}

export default Wrapper;
