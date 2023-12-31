import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0px 20px;
`;

const MegaHeader = styled.h1`
  color: #23c686;
  font-size: 160px;
  font-weight: 900;

  @media only screen and (max-width: 600px) {
    font-size: 100px;
  }
`;

const ErrorMessage = styled.h2`
  font-size: 24px;
  color: rgb(51, 51, 51);
  font-size: 24px;
  margin-bottom: 15px;
`;

const ErrorInfo = styled.p`
  color: rgb(155, 155, 155);
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  margin-bottom: 15px;
`;

const RedirectButton = styled.button`
  width: 200px;
  height: 48px;
  background-color: #23c686;
  color: rgb(255, 255, 255);
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 25px;
  border: none;
  cursor: pointer;
`;

function NotFound() {
  return (
    <Container>
      <MegaHeader>Oops</MegaHeader>
      <ErrorMessage>404 - PAGE NOT FOUND</ErrorMessage>
      <ErrorInfo>The page you are looking for does not exist. Maybe had changed name or removed.</ErrorInfo>
      <Link to="/">
        <RedirectButton>Go to homepage</RedirectButton>
      </Link>
    </Container>
  );
}

export default NotFound;
