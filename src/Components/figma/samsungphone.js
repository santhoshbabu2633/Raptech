import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './samsungphone.css';

class  Samsung1 extends Component {
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
  <img class="product"src="Samsung s22.jpg"></img>
 <div class="pricetag">₹ 1,19,999.00
</div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
 <br></br><br></br><br></br><br></br><br></br><br></br>
 <div class="info">
 <ul type="circle">
 <li>The first Galaxy S with embedded S Pen. Write comfortably like pen on paper, turn quick notes into legible text
      and use Air Actions to control your phone remotely. Improved latency in Samsung Notes makes every pen
      stroke feel as natural as ink on paper </li><br></br>

<li>5G Ready powered by Galaxy’s first 4nm processor. Our fastest, most powerful chip ever.That means, a faster</li><br></br>

 <li>CPU and GPU compared to Galaxy S21 Ultra. It’s an epic leap for smartphone technology.</li><br></br>

<li>The Dynamic AMOLED 2x display improves outdoor visibility with up to 1750 nits in peak brightness.</li><br></br>
</ul>
<div class="name"> Samsung galaxy s22 ultra
</div>
<div class="click">Click here</div>
</div>
  </form>
  </center>
  </div>
  );
}
}

export default Samsung1;