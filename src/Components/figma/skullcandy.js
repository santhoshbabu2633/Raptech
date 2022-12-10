import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './skullcandy.css';

class  Skull extends Component {
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
  <img class="logo" src="skull candy logo 2.png"></img>
  <br></br><br></br>
  <img class="product"src="skull candy ear.jpg"></img>
 <div class="pricetag">₹7,499.00

</div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
 <br></br><br></br><br></br><br></br><br></br><br></br>
 <div class="info">
 <ul type="circle">
 <li>Digital Active Noise Cancellation</li><br></br>

<li>Wireless Charging Case, Personal Sound via Skullcandy App</li><br></br>

<li>Up to 32 Hours of Total Battery Life</li><br></br>

<li>Find your Earbuds with Tile</li><br></br>

<li>Full Media Controls on Each Bud</li><br></br>
</ul>
<div class="name"> Skullcandy Indy 
</div>
<div class="click">Click here</div>
</div>
  </form>
  </center>
  </div>
  );
}
}

export default Skull;