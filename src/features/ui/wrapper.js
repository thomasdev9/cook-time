import React from 'react';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import Topbar from './topbar';
import Footer from './footer';

const wrapperStyles = {
  paddingTop: 2,
  paddingBottom: 5,
  minHeight: '100vh',
};

function Wrapper() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Topbar />
      <Container maxWidth="sm" sx={wrapperStyles}>
        <Outlet />
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default Wrapper;
