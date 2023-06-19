import React from 'react';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';

const wrapperStyles = {
  paddingTop: 5,
};

function Wrapper() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={wrapperStyles}>
        <Outlet />
      </Container>
    </React.Fragment>
  );
}

export default Wrapper;
