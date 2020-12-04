import React from 'react';
import imgsrc from './imageInSrc.jpg';
import './style.css';

function App() {
  return (
    <div className="global" style={{border:"solid 1px black",maxWidth:"100vw"}}>

 <h1 className="title red">Your name here</h1> 
 <img src={imgsrc} />

 <img src="/imageInPublic.jpg" />

 <video style={{marginLeft:"25%",width:"50%",height:640}}controls>
          <source src={"myVideo.mp4"} type={"video/mp4"}/>
        </video>    
  
</div>

  );
}

export default App;
