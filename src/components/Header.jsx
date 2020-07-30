import React from 'react';
import imagen from '../images/background.jpg'
import styled from "styled-components"

const Img = styled.img`
  height: 15rem;
  width: 100%;
  
`;

const Head = styled.header`
  background-image: url('../images/background.jpg');
  color: black;
  height: 15rem;
`;

const Shadow = styled.div`
  height: 15rem;
  width: 100%;
  background-color: rgba(58, 110, 223, 0.8);
`;

const Header = () => {
  return(
    <Head>
      <Img src={imagen} alt='imagen' />
      <Shadow />
    </Head>
  )
}

export default Header;