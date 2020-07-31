import React from 'react';
import styled from "styled-components";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

import '../App.css';

const Cards = styled.div`
  background-color: #fff;
  width: 50rem;
  height: 8rem;
  margin: 1rem;
  color: black;
  border-radius: 10px;
  box-shadow: 
        -0.1em -0.1em 0.3em 0.3em rgba(0,0,0,0.1), 
             0 0  0 1px rgb(255,255,255),
             0.1em 0.1em 1em rgba(0,0,0,0.1);
  display: grid;
  grid-template-columns: 10% 20% 50% 20%;
`;

const Title = styled.div`
  color: #B2B2B2;
`;

const H3 = styled.h3`
  color: #3A6EDF;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  background-color: #4ED6F4;
  margin: 0px;
  border-radius: 50px;
`;

const HourContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: center;
  color: #4ED6F4;
  font-size: 1.2rem;
`;

const Card = ({ title, id }) => {
  return (
    <Cards>
        <Circle></Circle>
        <HourContainer>
            <p>7:00 am</p>
        </HourContainer>
        <Title> 
          <H3>Qui este esse</H3>
          {title}
        </Title>
        <IconContainer>
          <FaEdit className='fa-edit'/>
          <FaCheck className='fa-check'/>
        </IconContainer>
    </Cards>
  )
}

export default Card;