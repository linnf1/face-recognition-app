import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js';


const PartOpts = {
particles: {
  number: {
    value: 30,
    density: {
      enable: true,
      value_area: 800
    }
  }
}
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='Particles' params={{PartOpts}}/>
        <Nav />
        <Logo />
        <Rank />
        <ImageLinkForm />
      </div>
    );
  }
}

export default App;
