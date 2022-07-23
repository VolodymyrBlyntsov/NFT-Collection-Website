import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  position: relative;
  display: flex;
  flex-direction: column;
`

const Footer = () => {
  return (
    <Section>
      <Banner>Footer</Banner>
    </Section>
  )
}

export default Footer