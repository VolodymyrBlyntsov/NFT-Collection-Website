import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 48em) {
    justify-content: flex-end !important;
  }
`

const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${props => props.theme.text};

  @media (max-width: 48em) {
    width: 70%;
  }
`

const Box = styled.p`
  height: fit-content;
  background-color: ${props => props.theme.carouselColor};
  color: ${props => props.theme.text};
  padding: 1rem;
  position: relative;
  border: 1px solid ${props => props.theme.text};
`

const SubTitle = styled.span`
  display: block;
  font-size: ${props => props.theme.fontxl};
  text-transform: capitalize;
  color: ${props => props.theme.text};

  @media (max-width: 40em) {
    font-size: ${props => props.theme.fontlg};
    font-weight: 600;
  }
`
const Text = styled.span`
  display: block;
  font-size: ${props => props.theme.fontsm};
  color: ${props => props.theme.text};
  font-weight: 400;
  margin: 0.5rem 0;

  @media (max-width: 40em) {
    font-size: ${props => props.theme.fontxs};
  }
`

const RoadMapItem = ({title, subtext, addToRefs}) => {

    return (
      <Item ref={addToRefs}>
        <ItemContainer>
          <Box>
            <SubTitle> {title} </SubTitle>
            <Text> {subtext} </Text>
          </Box>
        </ItemContainer>
      </Item>
    )
  }

export default RoadMapItem