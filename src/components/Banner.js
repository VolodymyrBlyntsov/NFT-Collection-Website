import React from 'react'
import styled from 'styled-components';

const Section = styled.section`
    width: 100vw;
    height: 25rem;
    position: relative;
    border-top: 2px solid ${props => props.theme.text};
    border-top: 2px solid ${props => props.theme.text};
    background-color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

const Banner = () => {
  return (
    <Section>Banner</Section>
  )
}

export default Banner