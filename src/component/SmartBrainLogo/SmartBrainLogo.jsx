import React from "react";
import './SmartBrainLogo.css';
import Tilt from 'react-parallax-tilt';
import brain1 from './brain1.png';

const SmartBrainLogo = () =>{
    return(
        <div className="ma4 mt0">
    <Tilt className="Tilt br2 shadow-2" options={{max:25}} style={{ height: '100px',width: '100px'}}>
      <div className="Tilt-inner pa3">
        <img alt = 'logo' src = {brain1} style={{paddingTop:'5px'}}/>
      </div>
    </Tilt>

        </div>
    )
}


export default SmartBrainLogo;