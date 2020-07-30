import React from 'react';
import styled from "styled-components";

const Cards = styled.div`
  background-color: #fff;
  width: 20rem;
  margin: 1rem;
  color: black;
`;

const Card = ({ title, id }) => {
  return (
    <Cards>Name: {title}</Cards>
  )
}

export default Card;