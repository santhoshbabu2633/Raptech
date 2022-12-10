import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './sony.css';

class  Sony extends Component {
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
  <img class="logo" src="sony logo.png"></img>
  <br></br><br></br>
  <img class="product"src="image.png"></img>
 <div class="pricetag"> ₹1,28,990.00


</div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
 <br></br><br></br><br></br><br></br><br></br><br></br>
 <div class="info">
 <ul type="circle">
 <li>Sony E-mount lensesE-mount</li>
<li>35 mm sensor</li>
<li>Approx. 24.3 megapixels</li>
<li>ANTI-DUST SYSTEM</li>
<li>Charge protection coating on optical filter and image sensor shift mechanism</li>
SENSOR
<li>35 mm full-frame (35.8 x 23.9 mm) Exmor™ CMOS sensor</li>
<li>IMAGE SENSOR ASPECT RATIO=3:2</li>
<li>NUMBER OF PIXELS (TOTAL)
Approx. 24.7 megapixels</li>
<li>13 modes</li>
<br></br>
</ul>
<div class="name">Sony Alpha ilce-7m2k 
</div>
<div class="click">Click here</div>
</div>
  </form>
  </center>
  </div>
  );
}
}

export default Sony;