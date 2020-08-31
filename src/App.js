import React, {Component} from 'react';
import './App.css';
import Receipes from './Components/Receipes';

class App extends Component{
  render(){
    return (
      <div className="App">
          <Receipes/>
      </div>
    );
  }
}

export default App;
