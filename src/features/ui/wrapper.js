import React from 'react';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import Topbar from './topbar';

const wrapperStyles = {
  paddingTop: 2,
  paddingBottom: 5,
};

function Wrapper() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Topbar />
      <Container maxWidth="sm" sx={wrapperStyles}>
        <Outlet />
      </Container>
    </React.Fragment>
  );
}

export default Wrapper;
