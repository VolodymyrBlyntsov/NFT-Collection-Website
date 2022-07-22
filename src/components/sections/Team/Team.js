import React from 'react';
import styled from 'styled-components';
import MemberComponent from './MemberComponent';
import img1 from '../../../assets/Nfts/team_1.svg';
import img2 from '../../../assets/Nfts/team_2.svg';
import img3 from '../../../assets/Nfts/team_3.svg';
import img4 from '../../../assets/Nfts/team_4.svg';
import img5 from '../../../assets/Nfts/team_5.svg';
import img6 from '../../../assets/Nfts/team_6.svg';
import img7 from '../../../assets/Nfts/team_7.svg';
import img8 from '../../../assets/Nfts/team_8.svg';
import img9 from '../../../assets/Nfts/team_9.svg';

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.body};
  position: relative;
`

const Title = styled.h1`
  font-size: ${props => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${props => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${props => props.theme.text};
  width: fit-content;
`

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

const Team = () => {
  return (
    <Section>
      <Title>Team</Title>
      <Container>
        <MemberComponent img={img2} name='Vova Blyntsov' position='Founder'/>
        <MemberComponent img={img4} name='Sönke Hörle' position='Co-Founder'/>
        <MemberComponent img={img3} name='Céline Richard' position='Director'/>
        <MemberComponent img={img1} name='Pierre Riou' position='Manager'/>
        <MemberComponent img={img5} name='Kato Green' position='Artist'/>
        <MemberComponent img={img6} name='Evelia Campillo' position='Social Media Manager'/>
        <MemberComponent img={img7} name='Fuzuli Aksu' position='Blockchain Specialist'/>
        <MemberComponent img={img8} name='David Brown' position='Web3 Developer'/>
        <MemberComponent img={img9} name='Laurent Payet' position='Graphic Designer'/>
      </Container>
    </Section>
  )
}

export default Team