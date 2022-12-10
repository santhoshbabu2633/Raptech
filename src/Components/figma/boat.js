import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './boat.css';

class  Boat extends Component {
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
  <img class="logo" src="boat logo 2.png"></img>
  <br></br><br></br>
  <img class="product"src="boat 191.jpeg"></img>
 <div class="pricetag">₹ 1,990.00


</div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
 <br></br><br></br><br></br><br></br><br></br><br></br>
 <div class="info">
 <ul type="circle">
 <li> Sleek. Comfortable. Stylish. And a Splash of Incredible Colours.</li><br></br>

<li>Bring alive your favourite sounds with tws Equipped with 13mm drivers for the magical boAt signature sound.</li><br></br>

<li>Designed for supreme ease with Insta Wake N’ Pair technology that auto connects the moment it’s out of the case and Type C Charging.</li><br></br>

<li>Clear Voice Calls- Be heard clear across voice calls without those usual interruptions, with the ENx Tech.</li><br></br>

<li>ASAP Charge- Our ASAP Charge feature that lets the earbuds garner up to 180 minutes of playtime in just 10 minutes of charging.</li>
<br></br>
</ul>
<div class="name">Boat Airdopes 190
</div>
<div class="click">Click here</div>
</div>
  </form>
  </center>
  </div>
  );
}
}

export default Boat;