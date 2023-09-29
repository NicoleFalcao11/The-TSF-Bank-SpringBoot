import React from "react";
import { Row, Col } from "reactstrap";
import web1 from "../Images/img-3.png";
import web2 from "../Images/img4.png";
import web3 from "../Images/img5.png";
import {Button} from 'reactstrap'
import { Link } from "react-router-dom";


function Home(){
  
  const customButtonStyle = {
    fontSize: '1.5rem', // Increase the font size
    borderColor: '#140B5C', // Set the border color
    borderWidth: '2px', // Set the border width
    backgroundColor: 'white',
    }

return (
  <div>
    <div className="container">
    <div className="image">
        <img src={web3} alt="Image" />
      </div>
    <div className="text">
      <p>Your Trust, Our Priority - Secure Banking Guaranteed</p>
        <p>Explore a World of Banking Services at Your Fingertips.</p>

    <button class="cta">
    <span class="hover-underline-animation"><a href="/tranfer">Get Started</a></span>
    <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
    </svg>
</button>
        
      </div>
      <div className="image">
        <img src={web1} alt="Image" />
      </div>
      
    </div>

    <div className="container">
    <div className="image">
        <img src={web2} alt="Image" />
      </div>
    <div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <p class="title">Our Customers</p>
            <p>Customers Are Our Real Assets</p>
        </div>
        <div class="flip-card-back">
            <p class="title"></p>
            <p><a href="/customers">View Now</a></p>
        </div>
    </div>
</div>

<div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <p class="title">Pay Payments</p>
            <p>Payments Made Easy</p>
        </div>
        <div class="flip-card-back">
            <p class="title"></p>
            <p><a href="/payments">Pay Now</a></p>
        </div>
    </div>
</div>
<div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <p class="title">Transactions</p>
            <p>Over 1000+ Transactions Done Daily</p>
        </div>
        <div class="flip-card-back">
            <p class="title"></p>
            <p><a href="/tranfer">View Now</a></p>
        </div>
    </div>
</div>
     
      
    </div>
  
    

  </div>
);
}
export default Home;
