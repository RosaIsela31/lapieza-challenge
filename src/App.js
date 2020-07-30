import React, { Component } from 'react';
import './App.css';
import styled from "styled-components";
import Container from './components/Container';


// https://drive.google.com/drive/folders/1g3WvmpajdVZqA9yqV3ShzCAQdV_iz1Ec?usp=sharing
// https://jsonplaceholder.typicode.com/

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F1F1F1;
`;

class App extends Component {

  render() {
    const {className} = this.props 
    return (
      <Wrapper className="App" className={className}>
        <Container />
      </Wrapper>
    );
  }
}

export default styled(App)`
  .welcome {
    text-align: center;
  }
`;
