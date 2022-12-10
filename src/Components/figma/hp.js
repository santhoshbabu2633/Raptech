import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './hp.css';

class Hp extends Component {
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
  <img class="logo" src="hp logo 1.png"></img>
  <br></br><br></br>
  <img class="product"src="hp elitebook.jpg"></img>
 <div class="pricetag">₹ 1,03,638.35
</div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
 <br></br><br></br><br></br><br></br><br></br><br></br>
 <div class="info">
 <ul type="circle">
 <li>Windows 11 Pro - HP recommends Windows 11 Pro for business</li><br></br>

<li>Intel® Core™ i5 processor</li><br></br>

<li>6 GB memory; 512 GB NVMe SSD</li><br></br>

<li>13.5" diagonal FHD display</li><br></br>

<li>Intel® Iris® Xe Graphics</li><br></br>
</ul>
<div class="name"> HP Elite Dragonfly G3
</div>
<div class="click">Click here</div>
</div>
  </form>
  </center>
  </div>
  );
}
}

export default Hp;