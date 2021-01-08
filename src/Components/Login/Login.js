import React, { Component } from 'react';

import '../Navbar/Navbar.css';
import Auxx from '../Auxx/Auxx';

import anime from 'animejs/lib/anime.es.js';


require('./Login.css');

class Login extends Component {

    state = {
        shouldRenderRegister : false,
    }


    signUpButton = ()=>{
    
            anime({
                targets: '.signup-thumb',
                // translateX: 250,

                duration:2000,



// delay:2000, 
  translateX: 705,

  borderTopLeftRadius : 0,
  borderBottomLeftRadius : 0,


                // backgroundColor:'#000',

                easing: 'easeInOutQuad',
              });


              anime({
                targets: '.signup-form',
                translateX: -393,

                duration:2000,


                borderTopRightRadius : 0,
                borderBottomRightRadius : 0,
                

// backgroundColor:'#ffc0cb',

                easing: 'easeInOutQuad',
              });

setTimeout(()=>{
    this.setState({shouldRenderRegister:true});

   
},2500)

    }



    
    render(){
return(
    
    // <Auxx>

// {/* // {this.state.shouldRenderRegister?<Register/>: */}

    <Auxx>

    <div className="container">
    <div className="signup-thumb">
      {/* <img src="https://svgur.com/i/Ryh.svg" alt="..." /> */}

      <img src="https://svgur.com/i/SZh.svg" alt="..." />



{/* <div className="img"></div> */}

    </div>
    <div className="signup-form">
      <div className="form-header">
        <a className="logo" href="#">
          {/* <svg className="icon logo-icon">
            <use xlinkHref="#logo-icon" />
          </svg>
          <span>nirvanna</span> */}
          

          <div className="logo">

<img alt="logo" src="https://cdn.shopify.com/s/files/1/1241/4530/files/logo_home_360x.png?v=1582201056"/>

</div>
        </a>
        <div className="sign-up">
          Don't have an account?
          <a href="#" onClick={this.signUpButton}>Sign Up</a>
        </div>
      </div>
      {/* <h1>Sign Up For Free.</h1> */}

      <h1>Log In To Your Account</h1>

      <p>Find balance in your mind.</p>
      <form className="form" action="#">
        <div className="form-group">
          {/* <div className="form-group-item">
            <label className="label" htmlFor="username">Username</label>
            <input id="username" type="text" placeholder="Enter username..." />
          </div> */}
          {/* <div className="form-group-item">
            <label htmlFor="name">Full Name</label>
            <input id="name" type="text" placeholder="Enter full name..." />
          </div> */}
          <div className="form-group-item">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" placeholder="Enter email address..." />
          </div>
          <div className="form-group-item">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Enter password..." />
          </div>
        </div>
        <div className="terms">
          <input id="check" type="checkbox" />
          <label htmlFor="check">I accept to the <a href="#">Terms and Conditions</a> and I agre to the terms of <a href="#">Privacy Palicy</a></label>
        </div>
        <button type="button" name="button">SIGN UP</button>
      </form>
      <div className="form-footer">
        <span>OR SIGN UP WITH:</span>
        <div className="social-signin">
          <a href="#">
            <svg className="icon icon-twitter">
              <use xlinkHref="#icon-twitter" />
            </svg>
          </a>
          <a href="#">
            <svg className="icon icon-facebook">
              <use xlinkHref="#icon-facebook" />
            </svg>
          </a>
          <a href="#">
            <svg className="icon icon-google">
              <use xlinkHref="#icon-google" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="owner">
    <a className="owner-design" href="https://dribbble.com/shots/14670350-Meditation-Mindfulness-Login-Screen-UI-UX" target="_blank">
      <div className="avatar">
        <img src="https://cdn.dribbble.com/users/1814344/avatars/normal/48c82aba9dbad333a19d037e369d2211.png" alt="" />
      </div>
      design
    </a>
    <a className="owner-coding" href="https://dribbble.com/P42s" target="_blank">
      <div className="avatar">
        <img src="https://cdn.dribbble.com/users/981783/avatars/normal/cdd8e307c13e33b80e0f75cb210b7985.jpg" alt="" />
      </div>
      coding
    </a>
  </div>
  <svg style={{position: 'absolute', width: 0, height: 0, overflow: 'hidden'}} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <defs>
      <symbol id="logo-icon" viewBox="0 0 20 14">
        <g transform="translate(-2094 -690)">
          <g transform="translate(2094 693.922)">
            <path d="M5.895,161.418a9.327,9.327,0,0,1,.071-1.14,12.623,12.623,0,0,0-5.751-2.008.2.2,0,0,0-.214.214,11.8,11.8,0,0,0,2.964,6.9,10.824,10.824,0,0,0,5.217,2.691A12.149,12.149,0,0,1,5.895,161.418Z" transform="translate(0 -158.27)" />
            <path d="M309.329,158.271a12.623,12.623,0,0,0-5.751,2.008,9.315,9.315,0,0,1,.071,1.14,12.149,12.149,0,0,1-2.288,6.655,10.824,10.824,0,0,0,5.217-2.691,11.8,11.8,0,0,0,2.964-6.9A.2.2,0,0,0,309.329,158.271Z" transform="translate(-289.545 -158.27)" />
          </g>
          <path d="M187.511,67.94a11.788,11.788,0,0,1-2.736,6.929.193.193,0,0,1-.3,0,11.788,11.788,0,0,1-2.735-6.929,11.788,11.788,0,0,1,2.736-6.929.193.193,0,0,1,.3,0A11.788,11.788,0,0,1,187.511,67.94Z" transform="translate(1919.373 629.06)" />
        </g>
      </symbol>
      <symbol id="icon-twitter" viewBox="0 0 32 32">
        <path d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z" />
      </symbol>
      <symbol id="icon-facebook" viewBox="0 0 32 32">
        <path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z" />
      </symbol>
      <symbol id="icon-google" viewBox="0 0 32 32">
        <path d="M16.319 13.713v5.487h9.075c-0.369 2.356-2.744 6.9-9.075 6.9-5.463 0-9.919-4.525-9.919-10.1s4.456-10.1 9.919-10.1c3.106 0 5.188 1.325 6.375 2.469l4.344-4.181c-2.788-2.612-6.4-4.188-10.719-4.188-8.844 0-16 7.156-16 16s7.156 16 16 16c9.231 0 15.363-6.494 15.363-15.631 0-1.050-0.113-1.85-0.25-2.65l-15.113-0.006z" />
      </symbol>
    </defs>
  </svg>


  </Auxx>

// }
// </Auxx>
)
}



}


export default Login;