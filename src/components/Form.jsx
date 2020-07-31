import React, { useState } from 'react';
import styled from "styled-components";
import { FiX } from "react-icons/fi";

import '../App.css'


const Button = styled.button`
  background-color: #F73552;
  color: #FFF;
  border: 0;
  height: 4rem;
  width: 4rem;
  border-radius: 50px;
  outline: none;
`;

const Forms = styled.form`
  display: grid;
  grid-template-columns: 85% 15%;
  width: 80%;
`;

const InputText = styled.input`
  width: 85%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 2.5rem;
  padding-left: 2rem;
  border-radius: 5px;
  outline: none;
  border: 0;
  box-shadow: 
        0.1em 0.1em 0.1em 0.1em rgba(0,0,0,0.1), 
             0 0  0 1px rgb(255,255,255),
             0.1em 0.1em 1em rgba(0,0,0,0.1);
  font-family: 'Montserrat', sans-serif;
  
`;

const TextArea = styled.textarea`
  width: 85%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 5rem;
  padding-left: 2rem;
  padding-top: 1rem;
  border-radius: 5px;
  outline: none;
  border: 0;
  box-shadow: 
        0.1em 0.1em 0.1em 0.1em rgba(0,0,0,0.1), 
             0 0  0 1px rgb(255,255,255),
             0.1em 0.1em 1em rgba(0,0,0,0.1);
  font-family: 'Montserrat', sans-serif;
  resize: none;
`;

const Form = () => {
  
  const [ error, setError ] = useState(false);
  const [ info, setInfo ] = useState(
    {
      title: '',
      body: '',
    }
  );
  
  const handleTextChange = (e) => {
      setInfo({
        ...info,
        [e.target.name]: e.target.value
      })
  };
  
  const submitUserInfo = (e) => {
    e.preventDefault()
    
    if(title.trim() === '' || body.trim() === ''){
      setError(true)
      return
    };
    
    setError(false);
    
  }
  
  const { title, body } = info;
  
  return(
    <Forms
      onClick={submitUserInfo}
    >
      <div>
        <InputText 
          name='value'
          placeholder='Title'
          value={title}
          onChange={handleTextChange}
        />
        
        <TextArea 
          name='body'
          placeholder='Body'
          value={body}
          onChange={handleTextChange}
        /> 
      </div>
      
      <Button type='submit' value='enviar' > 
        <FiX className='fi-x'/>
      </Button>
    </Forms>
  )
}

export default Form;