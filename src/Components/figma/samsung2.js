import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './samsung2.css';

class  Samsung2 extends Component {
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
  <img class="logo" src="sam logo.png"></img>
  <br></br><br></br>
  <img class="product"src="samsung watch.jpg"></img>
 <div class="pricetag">₹ 27,999.00
</div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
 <br></br><br></br><br></br><br></br><br></br><br></br>
 <div class="info">
 <ul type="circle">
 <li>Sleep Tracking: Know your sleep with our new and improved sleep tracking technology,
      Plan your bedtime, detect snoring, understand and track your sleep.</li><br></br>

 <li>percentage (BIA) to skeletal muscle weight. All feedback you need to track your progress.</li><br></br>

<li>Optical Heart Rate Sensor: Monitor your heart rate and track your cardiovascular health.</li><br></br>

<li>Fitness Tracking: Every step counts. Your watch will automatically detect physical activity
     counting your steps, calories, and even your routines. (supports over 90 exercises).</li><br></br>
</ul>
<div class="name">Samsung galaxy watch 5
</div>
<div class="click">Click here</div>
</div>
  </form>
  </center>
  </div>
  );
}
}

export default Samsung2;