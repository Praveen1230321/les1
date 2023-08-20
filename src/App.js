import logo from './logo.svg';
import './App.css';
import Greed from './components/Greed';
import Welcome from './components/Welcome';
import { Component } from 'react';

class App extends Component{
  render(){
    return(
      <div className='App'>
        <Greed/>
        <Welcome/>
      </div>
    )
  }
}

export default App;
