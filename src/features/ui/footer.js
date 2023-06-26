import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Container = styled.div`
  width: 100%;
  height: auto;
  background: rgb(255, 255, 255);
  padding: 50px;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 80%;

  @media only screen and (max-width: 850px) {
    width: 90%;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BrandWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Logo = styled.h2`
  color: rgb(51, 51, 51);
  font-weight: 700;
  font-family: 'Pacifico', cursive;
  font-size: 28px;
  margin-bottom: 10px;
`;

const BrandInfo = styled.p`
  font-size: 14px;
  color: rgb(155, 155, 155);
  font-weight: 500;
  margin-bottom: 10px;
`;

const Copyrights = styled.div`
  font-size: 14px;
  color: rgb(155, 155, 155);
  font-weight: 400;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media only screen and (max-width: 600px) {
    margin-top: 25px;
  }
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100px;
`;

const UsefullLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const UsefullLink = styled.span`
  font-size: 14px;
  color: rgb(51, 51, 51);
  font-weight: 500;
  padding: 2px 0px;
`;

function Footer() {
  return (
    <Container>
      <Content>
        <BrandWrapper>
          <Logo>Cook Time</Logo>
          <BrandInfo>We find recipes, you cook them.</BrandInfo>
          <Copyrights>CookTime © 2023 | Developed by Thomas Poulakis</Copyrights>
        </BrandWrapper>
        <LinksWrapper>
          <SocialMediaWrapper>
            <FaFacebook size={20} />
            <FaTwitter size={20} />
            <FaInstagram size={20} />
          </SocialMediaWrapper>
          <UsefullLinksWrapper>
            <Link to="/">
              <UsefullLink>Privacy Policy</UsefullLink>
            </Link>
            <Link to="/">
              <UsefullLink>Terms and Conditions</UsefullLink>
            </Link>
          </UsefullLinksWrapper>
        </LinksWrapper>
      </Content>
    </Container>
  );
}

export default Footer;
