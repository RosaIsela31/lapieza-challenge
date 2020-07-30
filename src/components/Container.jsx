import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Card from './Card';
import Form from './Form';

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
    <div>
      <Header />
      
      <Form />
      {data.map(item => {
        return( 
          <Card 
            key={item.id}
            title={item.title}
          />
        )
      })}
    </div>
  )
}

export default Container;