import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: rgb(255, 255, 255);
  width: 100%;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0px;
  width: 100%;
`;

const ItemImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
`;

const ItemTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const ItemTextLabel = styled.h3`
  font-size: 14px;
  font-weight: 700;
  color: rgb(51, 51, 51);
  margin-bottom: 8px;
  text-transform: capitalize;
`;

const ItemTextValue = styled.p`
  font-size: 14px;
  color: rgb(51, 51, 51);
  font-weight: 400;
`;

function TabPanel({ items, index, value }) {
  return (
    <>
      {index === value && (
        <Container>
          {items?.map((item, key) => (
            <Item key={key}>
              <ItemTextWrapper>
                {item?.label && <ItemTextLabel>{item?.label}</ItemTextLabel>}
                {item?.value && <ItemTextValue>{item?.value}</ItemTextValue>}
              </ItemTextWrapper>
              {item?.image && <ItemImg src={item?.image} />}
            </Item>
          ))}
        </Container>
      )}
    </>
  );
}

export default TabPanel;
