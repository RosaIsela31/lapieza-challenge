import React from 'react';
import styled from "styled-components";

const Cards = styled.div`
  background-color: #fff;
  width: 50rem;
  height: 8rem;
  margin: 1rem;
  color: black;
  border-radius: 5px;
  box-shadow: 
        -0.1em -0.1em 0.3em 0.3em rgba(0,0,0,0.1), 
             0 0  0 1px rgb(255,255,255),
             0.1em 0.1em 1em rgba(0,0,0,0.1);
  display: grid;
  grid-template-columns: 25% 60% 15%;
  /* padding: 0.5rem; */
`;

const Title = styled.div`
  color: #B2B2B2;
`;

const H3 = styled.h3`
  color: #3A6EDF;
`;

const Card = ({ title, id }) => {
  return (
    <Cards>
      <div>1</div>
      <Title> <H3>Qui este esse</H3>{title}</Title>
      <div>3</div>
    </Cards>
  )
}

export default Card;