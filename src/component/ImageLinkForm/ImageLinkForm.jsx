import React from "react";
import './ImageLinkForm.css';


const ImageLinkForm = () =>{
    return(
      <div>
        <p className="center f3">
          {'This magic brain detect faces .Give it a try'}
          </p>
        <div className="center ">
          <div className="form center pa4 br3 shadow-5">
          <input type='text' className="f4 pa2  w-70 center"/>
          <button className="center w-30 grow f4 link dib ph3 pv2 dib white bg-light-purple">Detect</button>
          </div> 
        </div>
      </div>
      
    )
}


export default ImageLinkForm;