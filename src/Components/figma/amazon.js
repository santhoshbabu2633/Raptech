import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './amazon.css';

class  Amazon1 extends Component {
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
  <img class="logo" src="amazon logo 2.png"></img>
  <br></br><br></br>
  <img class="product"src="amazon echo.jpg"></img>
 <div class="pricetag">₹ 2,040.93
</div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
 <br></br><br></br><br></br><br></br><br></br><br></br>
 <div class="info">
 <ul type="circle">
 <li>Echo Dot is a smart speaker that can be operated by voice - even from distance. Alexa can speak both
     English & Hindi, and new features are added automatically</li><br></br>

<li>Echo Dot (4th Gen) with clock has a new spherical design and improved bass performance compared
      to Echo Dot (3rd Gen)</li><br></br>

<li>Comes with an LED display that shows time, outdoor temperature or timers. Tap the top to snooze.</li><br></br>

 <li>The light sensor automatically adjusts the display’s brightness, day or night.</li><br></br>

<li>Hands-free music control: Stream millions of songs in your favorite language from Amazon Prime Music,
     Spotify, JioSaavn, Gaana, or Apple Music</li><br></br>
</ul>
<div class="name">     Amazon Echo Dot        
       5th gen
</div>
<div class="click">Click here</div>
</div>
  </form>
  </center>
  </div>
  );
}
}

export default Amazon1;