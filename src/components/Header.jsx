import React from 'react';
import imagen from '../images/background.jpg';
import styled from "styled-components";

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
  width: 70%;
  background-color: rgba(58, 110, 223, 0.5);
  position: absolute;  
  top: 0px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const Header = () => {

  const date = new Date(); 

  return(
    <Head>
      <Img src={imagen} alt='imagen' />
      
      <Shadow>
        <h1>Carlos' Notebook</h1>
        {date.getFullYear()} 
      </Shadow>
    </Head>
  )
}

export default Header;