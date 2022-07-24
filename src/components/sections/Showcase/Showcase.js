import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import NftItem from './NftItem';
import img1 from "../../../assets/Nfts/bighead_1.svg"
import img2 from "../../../assets/Nfts/bighead_2.svg"
import img3 from "../../../assets/Nfts/bighead_3.svg"
import img4 from "../../../assets/Nfts/bighead_4.svg"
import img5 from "../../../assets/Nfts/bighead_5.svg"
import img6 from "../../../assets/Nfts/bighead_6.svg"
import img7 from "../../../assets/Nfts/bighead_7.svg"
import img8 from "../../../assets/Nfts/bighead_8.svg"
import img9 from "../../../assets/Nfts/bighead_9.svg"
import img10 from "../../../assets/Nfts/bighead_10.svg"
import img11 from "../../../assets/Nfts/bighead_11.svg"
import img12 from "../../../assets/Nfts/bighead_12.svg"
import img13 from "../../../assets/Nfts/bighead_13.svg"
import img14 from "../../../assets/Nfts/bighead_14.svg"
import img15 from "../../../assets/Nfts/bighead_15.svg"
import img16 from "../../../assets/Nfts/bighead_16.svg"


const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  
  &>*:first-child {
    animation-duration: 17s;

    @media (max-width: 30em) {
      animation-duration: 12s;
    }
  }
  &>*:last-child {
    animation-duration: 15s;
    @media (max-width: 30em) {
      animation-duration: 12s;
    }
  }
`

const move = keyframes`
  0% { transform: translateX(100%) }
  100% { transform: translateX(-100%) }
`

const Row = styled.div`
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;
  animation: ${move} linear infinite ${props => props.direction};
`

const Showcase = () => {

  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);
 
  return (
    <Section id="showcase">
      <Row direction="none" ref={Row1Ref}>
        <NftItem img={img1} number={218} price={2.5} passRef={Row1Ref} />
        <NftItem img={img2} number={499} price={1.9} passRef={Row1Ref} />
        <NftItem img={img3} number={922} price={3.6} passRef={Row1Ref} />
        <NftItem img={img4} number={574} price={4.7} passRef={Row1Ref} />
        <NftItem img={img5} number={792} price={2.7} passRef={Row1Ref} />
        <NftItem img={img11} number={215} price={1.3} passRef={Row1Ref} />
        <NftItem img={img12} number={982} price={2.2} passRef={Row1Ref} />
        <NftItem img={img13} number={625} price={1.8} passRef={Row1Ref} />
      </Row> 
      <Row direction="reverse" ref={Row2Ref}>
        <NftItem img={img6} number={516} price={7.2} passRef={Row2Ref} />
        <NftItem img={img7} number={183} price={3.4} passRef={Row2Ref} />
        <NftItem img={img8} number={760} price={5.1} passRef={Row2Ref} />
        <NftItem img={img9} number={848} price={1.2} passRef={Row2Ref} />
        <NftItem img={img10} number={359} price={3.6} passRef={Row2Ref} />
        <NftItem img={img14} number={687} price={2.5} passRef={Row2Ref} />
        <NftItem img={img15} number={25} price={1.9} passRef={Row2Ref} />
        <NftItem img={img16} number={148} price={3.6} passRef={Row2Ref} />
        
      </Row>
    </Section>
  )
}

export default Showcase