import React, { useState } from 'react';

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
    <form
      onClick={submitUserInfo}
    >
      <input 
        name='value'
        placeholder='title'
        value={title}
        onChange={handleTextChange}
      />
      
      <input 
        name='body'
        placeholder='body'
        value={body}
        onChange={handleTextChange}
      /> 
      
      <input type='submit' value='enviar' />
    </form>
  )
}

export default Form;