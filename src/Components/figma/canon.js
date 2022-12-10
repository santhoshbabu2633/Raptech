import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './canon.css';

class  Canon extends Component {
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
  <img class="logo" src="canon logo.png"></img>
  <img class="product"src="canon cam.jpeg"></img>
 <div class="pricetag">₹ 1,25,500.00
</div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
 <br></br><br></br><br></br><br></br><br></br><br></br>
 <div class="info">
 <ul type="circle"><li>Sensor: APS-C CMOS Sensor with 24.1 MP (high resolution for large prints and image cropping).</li><br></br> 

<li>Transmission frequency
(central frequency):Frequency: 2 412 to 2 462MHz. Standard diopter :-2.5 - +0.5m-1 (dpt)</li><br></br>

<li>ISO: 100-6400 sensitivity range (critical for obtaining grain-free pictures, especially in low light)</li><br></br>

<li>Image Processor: DIGIC 4+ with 9 autofocus points (important for speed and accuracy of autofocus and burst photography)</li><br></br>

<li>Video Resolution: Full HD video with fully manual control and selectable frame rates (great for precision and high-quality video work)</li><br></br>

<li>Connectivity: WiFi, NFC and Bluetooth built-in (useful for remotely controlling your camera and transferring pictures wirelessly)</li><br></br>
</ul>
<div class="name">Canon eos 90d dslr camera
</div>
<div class="click">Click here</div>
</div>
  </form>
  </center>
  </div>
  );
}
}

export default Canon;