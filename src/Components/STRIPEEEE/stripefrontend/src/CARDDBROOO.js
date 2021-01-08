import React,{useState} from 'react';
import './Appppp.css';

import StripeCheckout from 'react-stripe-checkout';

// const { JSDOM } = require( "jsdom" );
// const { window } = new JSDOM( "" );
// const $ = require( "jquery" )( window );


function CARDDBROOO(){

  const [product,setProduct] = useState({
    name : 'REACT from FB',
    price : 108,
    productBy : 'FACEBOOK',
  })
  
  const preventing = event=>{
    event.preventDefault();
  }


  const makePayment = token=>{

const body = {

  token,
  product,
}

const headers = {
  "Content-Type" : "application/json"
}


return fetch('http://localhost:8282/payment',{
  method : 'POST',
  headers:headers,
  body : JSON.stringify(body),
}).then(response=>{

  console.log(response);
  console.log('successfullyyy done');

  const {status} = response;

  console.log("STATUSSSS",status);
  


})



  }
  // render(){

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       
       {/* <StripeCheckout stripeKey={process.env.REACT_APP_PUBLISHABLE_KEY} token={makePayment}
       name="BUYYY REACTTT" amount={product.price*100}>

<button className="btn-large purple">BUY REACTTT IN ${product.price}</button>

       </StripeCheckout> */}


{/*  */}


<div className="container" >
        <div id="Checkout" className="inline">
          <h1>Pay Invoice</h1>
          <div className="card-row">
            <span className="visa" />
            <span className="mastercard" />
            <span className="amex" />
            <span className="discover" />
          </div>
          <form onSubmit={preventing}>
            <div className="form-group">
              <label htmlFor="PaymentAmount">Payment amount</label>
              <div className="amount-placeholder">
                <span>$</span>
                <span>500.00</span>
              </div>
            </div>
            <div className="form-group">
              <label or="NameOnCard">Name on card</label>
              <input id="NameOnCard" className="form-control" type="text" maxLength={255} />
            </div>
            <div className="form-group">
              <label htmlFor="CreditCardNumber">Card number</label>
              <input id="CreditCardNumber" className="null card-image form-control" type="text" />
            </div>
            <div className="expiry-date-group form-group">
              <label htmlFor="ExpiryDate">Expiry date</label>
              <input id="ExpiryDate" className="form-control" type="text" placeholder="MM / YY" maxLength={7} />
            </div>
            <div className="security-code-group form-group">
              <label htmlFor="SecurityCode">Security code</label>
              <div className="input-container">
                <input id="SecurityCode" className="form-control" type="text" />
                <i id="cvc" className="fa fa-question-circle" />
              </div>
              <div className="cvc-preview-container two-card hide">
                <div className="amex-cvc-preview" />
                <div className="visa-mc-dis-cvc-preview" />
              </div>
            </div>
            <div className="zip-code-group form-group">
              <label htmlFor="ZIPCode">ZIP/Postal code</label>
              <div className="input-container">
                <input id="ZIPCode" className="form-control" type="text" maxLength={10} />
                <a tabIndex={0} role="button" data-toggle="popover" data-trigger="focus" data-placement="left" data-content="Enter the ZIP/Postal code for your credit card billing address."><i className="fa fa-question-circle" /></a>
              </div>
            </div>



            <StripeCheckout 
            // email="info@vidhub.co" 
            image="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" 
            // shippingAddress
            // billingAddress={true}

            // opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
            // closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)

            // stripeKey={process.env.REACT_APP_PUBLISHABLE_KEY} 

            stripeKey="pk_test_51I5zxRAEk1YEt5Qd9NA3hgThWs37c5m1wFEARaauLHjMx9pkQbW0q5YRRqXMTl8gZgt4HRFc0xUO43ga4Feoskpk00jsBzheUQ" 


            token={makePayment}
            name="BUYYY REACTTT" 
            amount={product.price*100}>







<button className="btn-large purple">BUY REACTTT IN ${product.price}</button>

       </StripeCheckout>
            {/* <button id="PayButton" className="btn btn-block btn-success submit-button" type="submit"> */}
              {/* <span className="submit-button-lock" />
              <span className="align-middle">Pay $500.00</span> */}



            {/* </button> */}
          </form>
        </div>
      </div>


{/*  */}

       
      </header>
    </div>
  );
}
// }

export default CARDDBROOO;
