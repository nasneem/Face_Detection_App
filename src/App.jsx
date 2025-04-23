
import Navigation from './component/Navigation/Navigation.jsx' ;
import SmartBrainLogo from './component/SmartBrainLogo/SmartBrainLogo.jsx' ;
import ImageLinkForm from './component/ImageLinkForm/ImageLinkForm.jsx' ;
import Rank from './component/Rank/Rank.jsx' ;
import './App.css';






const App = () => {
  return (
    <> 
      <div className="App">
      <Navigation /> 
      <SmartBrainLogo />
      <Rank />
      <ImageLinkForm />
      </div>      
    </>
  )
}

export default App
