import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './nikon.css';

class Nikon extends Component {
render() {
  const myStyle={
    height:'110vh',
    marginTop:'-30px',
    fontSize:'5px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
  <div style={myStyle}>
  <center>
  <form>
  <img class="logo" src="nikon logo2.png"></img>
  <br></br><br></br>
  <img class="product"src="nikon camera.jpg"></img>
 <div class="pricetag"> ₹1,48,800.

</div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
 <br></br><br></br><br></br><br></br><br></br><br></br>
 <div class="info">
 <ul type="circle">
<li>Mount Type. Nikon Z Mount.</li><br></br>
<li>Focal Length Range. 24 - 200mm.</li><br></br>
<li>Zoom Ratio. 8.3x.</li><br></br>
<li>Maximum Aperture. f/ 4-6.3.</li><br></br>
<li>Minimum Aperture. f/ 22-36.</li><br></br>
<li>Format. FX.</li><br></br>
<li>Maximum Angle of View (DX-format) 61˚</li><br></br>
<li>Minimum Angle of View (DX-format) 8°</li><br></br>
</ul>
<div class="name">Nikon z-24 camera
</div>
<div class="click">Click here</div>
</div>
  </form>
  </center>
  </div>
  );
}
}

export default Nikon;