
import Navigation from './component/Navigation/Navigation.jsx' ;
import SmartBrainLogo from './component/SmartBrainLogo/SmartBrainLogo.jsx' ;
import ImageLinkForm from './component/ImageLinkForm/ImageLinkForm.jsx' ;
import Rank from './component/Rank/Rank.jsx' ;
import './App.css';
import PolygonParticles from './component/PolygonParticles/PolygonParticles.jsx';
import { useState } from 'react';

// import { Model } from "clarifai-nodejs";
import FaceRecognition from './component/FaceRecognition/FaceRecognition.jsx';
import axios from 'axios';
import SignIn from './component/SignIn/SignIn.jsx';
// import { ClarifaiStub, grpc } from 'clarifai-nodejs-grpc';
import Register from './component/Register/Register.jsx';
  

const App = () => {

  const [inputValue, setInputValue] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [route, setRoute] = useState('signin');
  const [isSigned, setisSigned] = useState(false);

  const handleInputChange = (value) => {
    setInputValue(value);
  };
  const handleButtonClick = async () => {
 setImageUrl(inputValue);

  // };
  // const handleDetect = async () => {
    const USER_ID = 'zte874stshpv'; // From Clarifai
    const APP_ID = 'face-detection-app';
    const API_KEY = '7ac5e0d7ee50412f982cca7ad670feae';
    const MODEL_ID = 'face-detection';
   
    const requestBody = {
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: inputValue,
            },
          },
        },
      ],
    };
// console.log(requestBody);
    try {
      const response = await axios.post(
        `https://api.clarifai.com/v2/models/${MODEL_ID}/outputs`,
        requestBody,
        {
          headers: {
            Authorization: `Key ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const boxes =
        response.data.outputs[0].data.regions.map(region => region.region_info.bounding_box);
console.log(boxes);
      //setBoundingBoxes(boxes);
    } catch (error) {
      console.error('Face detection failed:', error);
    }
  };
  const onRouteChange =  (route) =>{
    if(route==="homepage"){
      setisSigned(true);
    }
    else if(route==="register"){
      setisSigned(false);
    }
  // if(route==="signin"){
  //     setisSigned(false);
  //   }
    setRoute(route);
  }
  return (
    <> 
    <div className="App">
    <PolygonParticles />
      <Navigation onRouteChange={onRouteChange}  isSigned={isSigned}/> 
      {route==="homepage"  ?
      <div>
       <SmartBrainLogo />
       <Rank />
       <ImageLinkForm onInputChange={handleInputChange} onClickHandler={handleButtonClick} />
       <FaceRecognition imageUrl = {imageUrl} />
       </div>
      :
      (route === "signin" ?
        <SignIn onRouteChange = {onRouteChange} />
        : 
        <Register onRouteChange={onRouteChange} />

      )
      
     
}
      </div>    
    </>
  )
}

export default App
