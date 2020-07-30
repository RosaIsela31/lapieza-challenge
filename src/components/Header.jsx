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

const Header = () => {
  return(
    <Head>
      <Img src={imagen} alt='imagen' />
    </Head>
  )
}

export default Header;