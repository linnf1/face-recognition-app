import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin'
import Register from './components/Register/Register'
import apiKeySECRET from './.secret'

const app = new Clarifai.App({
 apiKey: apiKeySECRET
});


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
  constructor() {
    super();
    this.state = {
      userinput: '',
      imageurl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

  calcFaceLocation = (data) => {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById("inputimage");
  const width = Number(image.width);
  const height = Number(image.height);
  return {
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - (clarifaiFace.right_col * width),
    bottomRow: height - (clarifaiFace.bottom_row * height)
   }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
    }

  onInputChange = (e) => {
    this.setState({userinput: e.target.value})
  }
//If you get BAD REQUEST check set states , you are calling it wrong somewhere. (like after COLORMODEL)
  onButtonSubmit = () => {
    this.setState({imageurl: this.state.userinput});
   app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.userinput)
    .then(response => this.displayFaceBox(this.calcFaceLocation(response)))
      .catch(err => console.log(err));
      // do something with response
  }
  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
   this.setState({route: route}); 
  }

  render() {
    const { isSignedIn, imageurl, route, box } = this.state;
    return (
      <div className="App">
        <Particles className='Particles' params={{PartOpts}}/>
        <Nav isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        { route === 'home' 
        ?   <div>
            <Logo />
            <Rank />
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
            <FaceRecognition box={box} imageurl={imageurl}/>
            </div>
        : ( route === 'signin' 
          ? <Signin onRouteChange={this.onRouteChange} />
          : <Register onRouteChange={this.onRouteChange} />
          )
        
          }
      </div>
    );
  }
}

export default App;
