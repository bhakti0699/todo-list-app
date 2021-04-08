import React,{Component} from 'react';
import {Container} from 'reactstrap';
import './App.css';
import Header from './components/Header';
import FormInput from './components/FormInput';

class App extends Component {
  render()
  {
    return(
      <Container>
        <Header></Header>
        <FormInput/>
      </Container>
    );
  }
}

export default App;
