import React from "react";
//import ErrorBoundary from "./ErrorBoundary";

const Navigation = ({onRouteChange , isSigned}) =>{
    if(isSigned){
        return(
            <div>
            <nav style = {{display:'flex',justifyContent:'flex-end'}}>
            <p onClick = {() => onRouteChange("signin")} className="f3 link dim underline black pointer pa3">Sign Out</p>
        </nav>
        </div>   
        )
    }
    else{
        return(
            <div>
                <nav style = {{display:'flex',justifyContent:'flex-end'}}>
                <p onClick = {() => onRouteChange("register")} className="f3 link dim underline black pointer pa3">Register</p>
                <p onClick = {() => onRouteChange("signin")} className="f3 link dim underline black pointer pa3">Sign In</p>
            </nav>
            </div>
         
           
        )
    }
 
}


export default Navigation;