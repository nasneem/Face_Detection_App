import React from "react";



const FaceRecognition = ({ imageUrl }) =>{


console.log("in image recognition"+imageUrl);

    return(
      <div className="center ma">
        <div className="mt2 absolute">
        {imageUrl && <img src={imageUrl}  alt="image" width="200x" height="auto" />}
        </div>
      </div>
      
    )
}


export default FaceRecognition;