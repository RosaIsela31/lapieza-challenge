import React, { Component } from 'react';
import './App.css';
import styled from "styled-components";
import Container from './components/Container';


// https://drive.google.com/drive/folders/1g3WvmpajdVZqA9yqV3ShzCAQdV_iz1Ec?usp=sharing
// https://jsonplaceholder.typicode.com/

class App extends Component {

  render() {
    const {className} = this.props 
    return (
      <div className="App" className={className}>
        <Container />
      </div>
    );
  }
}

export default styled(App)`
  .welcome {
    text-align: center;
  }
`;
