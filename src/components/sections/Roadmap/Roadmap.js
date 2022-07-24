import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import DrawSvg from '../../utils/DrawSvg';
import RoadMapItem from './RoadMapItem';

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
  width: 70%;
  height: 200vh;
  background-color: ${props => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
`

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &>*:nth-of-type(2n + 1) {
    justify-content: start;
    div {
      border-radius: 50px 0 50px 0;
      text-align: right;
    }
    p {
      border-radius: 40px 0 40px 0;
    }
  }
  &>*:nth-of-type(2n) {
    justify-content: end;
    div {
      border-radius: 0 50px 0 50px;
      text-align: left;
    }
    p {
      border-radius: 0 40px 0 40px;
    }
  }
`

const Roadmap = () => {

  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);
  
  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  }

  useLayoutEffect(() => {
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: '0'
        }, {
          y: '-30%',
          scrollTrigger:{
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=200px',
            end: 'bottom center',
            scrub: true,
          }
        }
      )
    })
  }, [])

  return (
    <Section id="roadmap">
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item> {/* empty item */}
          <RoadMapItem addToRefs={addToRefs} title="Grand Opening" subtext="Get ready for the world launch of a new, unique, unusual NFT collection 'Tadpoles Club' in the coming months!" />
          <RoadMapItem addToRefs={addToRefs} title="Great Benefits" subtext="Pre-order the collection at a starting price, as well as get a free NFT on our discord server." />
          <RoadMapItem addToRefs={addToRefs} title="Early Access" subtext="Be active in our social networks, as the same in our discord server, to get into the white-list and get a chance to receive the nft one of the first." />
          <RoadMapItem addToRefs={addToRefs} title="New Merch" subtext="Upcoming plans are to launch a collection of 3D figures with the already beloved Tadpoles! Also expect cups with unique NFT avatar and uid number for free  ." />
          <RoadMapItem addToRefs={addToRefs} title="Holders Ranking" subtext="As the longer you have the Tadpoles, the more expensive they become! Turn on the notifications and don't forget to snag an NFT to top the owner-list." />
        </Items>
      </Container>
    </Section>
  )
}

export default Roadmap