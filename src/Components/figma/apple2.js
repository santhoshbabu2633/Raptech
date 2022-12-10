import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './apple2.css';

class Iwatch extends Component {
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
  <img class="product"src="apple.png"></img>
 <div class="pricetag">₹89,900.00</div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
 <br></br><br></br><br></br><br></br><br></br><br></br>
 <div class="info">
 <ul type="circle"><li>Specialized features, sensors, and three new bands designed for exploration, adventure,and endurance</li><br></br>
<li>49-millimetre aerospace-grade titanium case for an ideal balance of weight, strength and
      corrosion resistance</li><br></br>
<li>The largest, brightest Apple Watch display for improved legibility in all conditions</li><br></br>
<li>Up to 36 hours of battery life for normal use along with low-power settings for even longer battery life</li><br></br>
<li>Precision dual-frequency GPS system provides accurate location for calculating distance, pace,  and route maps</li><br></br>
</ul>
<div class="name">Apple Watch Ultra
</div>
<div class="click">Click here</div>
</div>
  </form>
  </center>
  </div>
  );
}
}

export default Iwatch;