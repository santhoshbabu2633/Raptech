import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './jbl.css';

class  Jbl extends Component {
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
  <img class="logo" src="jbl logo.png"></img>
  <br></br><br></br>
  <img class="product"src="jbl.jpeg"></img>
 <div class="pricetag">₹ 3,499.00

</div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
 <br></br><br></br><br></br><br></br><br></br><br></br>
 <div class="info">
 <ul type="circle">
 <li> Zero distractions when it's time to focus on your studies or get your
      groove on from these Bluetooth earbuds. And you want to hear the world around you without removing
      your earbuds, Smart Ambient sharpens the sounds of your surroundings.</li><br></br>

<li>   These Bluetooth earphones feature to
       7 hours of playback plus 21 hours in the case and JBL Live Pro+ TWS Speed. </li><br></br>

<li>Charge means your audio stays with you all day long. Power up super easily on the go with JBL Live Pro+.</li><br></br>

 <li>TWS Speed Charge and Qi-compatible wireless charging.</li><br></br>
</ul>
<div class="name"> JBL wave 200 tws
</div>
<div class="click">Click here</div>
</div>
  </form>
  </center>
  </div>
  );
}
}

export default Jbl;