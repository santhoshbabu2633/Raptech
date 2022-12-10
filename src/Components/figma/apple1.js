import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './apple1.css';

class  Iphone extends Component {
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
  <img class="logo" src="apple logo 2.png"></img>
  <br></br><br></br>
  <img class="product"src="iphone2.png"></img>
 <div class="pricetag">₹1,89,900</div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
 <br></br><br></br><br></br><br></br><br></br><br></br>
 <div class="info">
 <ul type="circle"><li>15.54 cm (6.1-inch) Super Retina XDR display featuring Always-On and ProMotion</li><br></br>

<li>Dynamic Island a magical new way to interact with iPhone</li><br></br>

<li>48MP Main camera for up to 4x greater resolution</li><br></br>

<li>Cinematic mode now in 4K Dolby Vision up to 30 fps</li><br></br>

<li>Action mode for smooth, steady, handheld videos</li><br></br>
</ul>
<div class="name">Apple Iphone 14 pro max</div>
<div class="click">Click here</div>
</div>
  </form>
  </center>
  </div>
  );
}
}

export default Iphone;