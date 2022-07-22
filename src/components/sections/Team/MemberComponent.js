import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  color: ${props => props.theme.body};
  margin: 2rem 1rem;
  position: relative;
  border: 2px solid ${props => props.theme.text};
  border-radius: 20px;
  transition: all 0.5s ease;
  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }
`

const ImgContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: ${props => props.theme.carouselColor};
  border: 1px solid ${props => props.theme.text};
  padding: 1rem;
  border-radius: 20px;
  cursor: pointer;
  img {
    width: 100%;
    height: 80%;
    transition: all 0.5s ease;
  }
`

const Name = styled.h2`
  font-size: ${props => props.theme.fontlg};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: ${props => props.theme.text};
  margin-top: 1rem;
`

const Position = styled.h2`
  font-size: ${props => props.theme.fontmd};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: Capitalize;
  color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};
  margin-top: 0.2rem;
  font-weight: 400;
`

const MemberComponent = ({img, name="", position=""}) => {
    return (
      <Item>
        <ImgContainer>
          <img src={img} alt={name}/>
        </ImgContainer>
        <Name>{name}</Name>
        <Position>{position}</Position>
      </Item>
    )
  }

export default MemberComponent