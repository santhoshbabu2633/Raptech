import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './dell.css';

class  Dell extends Component {
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
  <img class="logo" src="dell logo.png"></img>
  <br></br><br></br>
  <img class="product"src="alienware.jpeg"></img>
 <div class="pricetag">₹ 2,14,990.00
</div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
 <br></br><br></br><br></br><br></br><br></br><br></br>
 <div class="info">
 <ul type="circle"><li>Display: 39.62 cms (15.6 inches), FHD IPS</li><br></br>

<li>Memory: 16GB DDR4 RAM, 1TB SSD ROM</li><br></br>

<li>Processor: Intel Core i7 11th Generation</li><br></br>

<li>OS: Windows 10 Home</li><br></br>
<li>Graphics: NVIDIA GeForce RTX 3060</li><br></br>
<li>Included Software: MS Office Home & Student 2019</li><br></br>
<li>Warranty: 1 Year Onsite</li><br></br>
</ul>
<div class="name"> Dell Alienware x15 R1 i7
</div>
<div class="click">Click here</div>
</div>
  </form>
  </center>
  </div>
  );
}
}

export default Dell;