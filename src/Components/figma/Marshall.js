import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './marshall.css';

class  Marshall extends Component {
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
  <img class="logo" src="marshall logo 2.png"></img>
  <br></br><br></br>
  <img class="product" src="marshall.jpeg"></img>
 <div class="pricetag">₹ 11,999.00


</div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
 <br></br><br></br><br></br><br></br><br></br><br></br>
 <div class="info">
 <ul type="circle">
 <li> Cancel The Noise, Amplify The Sound: Set your own level of active noise cancellation
      and Transparency for a truly personal listening experience</li><br></br>

<li>Sealed-Fit Earbuds For a Secure Fit: Comes with three ear-tip sizes so you can
     get the right fit and the right sound</li><br></br>

<li>Reliable Playtime With Wireless Charging: Each earbud holds 4.5 hours of wireless
     playtime with full A.N.C. and the portable charging case provides 20 total
     hours of playtime on a single charge. Wireless charging also makes it even
     easier to charge and go</li><br></br>
</ul>
<div class="name"> Marshall Minor III
</div>
<div class="click">Click here</div>
</div>
  </form>
  </center>
  </div>
  );
}
}

export default Marshall;