import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import SearchBar from './search-bar';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255) !important;
  padding: 20px 30px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 8px 0px;
  position: sticky;
  top: 0;
  z-index: 100;

  @media only screen and (max-width: 600px) {
    padding: 20px 30px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const CreatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const CreatorInfo = styled.p`
  font-size: 14px;
  color: rgb(51, 51, 51);
  font-weight: 400;

  ${(props) =>
    props.creator &&
    css`
      font-size: 16px;
      font-weight: 700;
    `}

  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const Logo = styled.h2`
  color: rgb(51, 51, 51);
  font-weight: 700;
  font-family: 'Pacifico', cursive;
  font-size: 28px;

  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

function Topbar() {
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <Logo>Cook Time</Logo>
        </Link>
        <SearchBar />
        <CreatorWrapper>
          <CreatorInfo>Developed by</CreatorInfo>
          <CreatorInfo creator>Thomas Poulakis</CreatorInfo>
        </CreatorWrapper>
      </Wrapper>
    </Container>
  );
}

export default Topbar;
