import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";

import Header from './Header';
import Card from './Card';
import Form from './Form';

const DivContain = styled.div`
  width: 70%;
  background-color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`;

const Container = () => {
  
  const [ data, setData ] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
      
      const url = 'https://jsonplaceholder.typicode.com/posts/'
      const response = await axios.get(url);
      setData(response.data)
      
    }
    getData();
    
    
  }, [])
  
      console.log('data', data)
  return(
    <DivContain>
      <Header />

      <Wrapper>
        {/* <Form /> */}
        {data.map(item => {
          return( 
            <Card 
              key={item.id}
              title={item.title}
            />
          )
        })}
      </Wrapper>
      
    </DivContain>
  )
}

export default Container;