import React from 'react';
require('./Checkout.css');
// import ItemsShowingInCheckout from './ItemsShowingInCheckout/ItemsShowingInCheckout';

import ItemsShowingInCheckoutCONTAINER from './ItemsShowingInCheckoutCONTAINER/ItemsShowingInCheckoutCONTAINER';
import {connect} from 'react-redux';
import Auxx from '../Auxx/Auxx';

// Load the full build.
var lodash = require('lodash');
// Load the core build.
var lodashCore = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');
 
// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');
 
// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');

// let trees = [];
// let idsArr = [];
// let nowMainArray = [];
const Checkout = props=>{

// if(props.twoDetails!==null){
//   trees.push(props.twoDetails);
// idsArr.push(props.twoDetails.id);
// }
// let x = (names) => names.filter((v,i) => names.indexOf(v) == i)
// let newIDS = x(idsArr); // 'John', 'Paul', 'George', 'Ringo'
// let check = newIDS.map(elem=>{
//   const result = trees.filter(tree => {
//     return tree.id == elem;
//    });
//    return result;  
// })
// console.log(check);
// let avien = ch=>{
//   let mapped = ch.map(elem=>{
//    return elem.slice().pop(-1);
//   })
//   return mapped;
// }
// let mained = avien(check);
// let checkBRO = [...mained];
//   let sendToItemsShowingInCheckout;
//   if(props.sendToItemsShowingInCheckout!==null&&props.signal){
//     sendToItemsShowingInCheckout = props.sendToItemsShowingInCheckout.map((elem,index)=>{
// // totalPriceInitial={elem.totalPriceInitial}

// let one = 1;
// let oneMultiplied = 10;
// return <ItemsShowingInCheckout totalPriceInitial = {checkBRO[index]?checkBRO[index].multipliedTotal:null}  quantityInNumbers ={checkBRO[index]?checkBRO[index].quantityInNumbers:null}  itemName={elem.shoe} size={elem.size} />})
// }



  return(

    <section className="checkoutSection">

<div className="checkoutHere">
  <p>Checkout Here</p>
</div>
{/* <Auxx> */}


<div className="twoSidesFlex">

<form id="myform">
        {/* <header>Shipping Order Form</header> */}

        <header>Your Email</header> 
        <div className="row">
            <input type="text" name="email" placeholder="Enter Your Email" id="email" />
            <label htmlFor="email"></label>
          </div>

          <header>Shipping Address</header> 

        <div className="area">
          <div className="row">
            <div className="col2">
              <input placeholder="First Name" type="text" name="firstname" />
              <label htmlFor="fistname">First Name</label>
            </div>
            <div className="col2">
              <input placeholder="Last Name" type="text" name="lastname" />
              <label htmlFor="lastname">Last Name</label>
            </div>
          </div>
          <div className="row">
            <input placeholder="Phone" type="text" name="phone" id="phone" />
            <label htmlFor="phone">Phone</label>
          </div>
          <div className="row">
            <input placeholder="Address" type="text" name="address" id="address" />
            <label htmlFor="address">Address</label>
          </div>
        </div>
        <div className="area">
          <div className="ckeckarea">
            <input type="checkbox" name="checkbox1" id="checkbox1" onclick="autofilling(this.form)" />
            <label htmlFor="checkbox1">Check this box if order info and sending info are the same.</label>
          </div>
          <div className="row">
            <div className="col2">
              <input placeholder="First Name" type="text" name="newfirstname" />
              <label htmlFor="newfistname">First Name</label>
            </div>
            <div className="col2">
              <input placeholder="Last Name" type="text" name="newlastname" />
              <label htmlFor="newlastname">Last Name</label>
            </div>
          </div>
          <div className="row">
            <input placeholder="Address" type="text" name="newaddress" id="newaddress" />
            <label htmlFor="newaddress">Sending Address</label>
          </div>
        </div>
        <div className="row">
          <input type="submit" value="Continue To Shopping" className="btn" />
        </div>
      </form>

<ItemsShowingInCheckoutCONTAINER/>
  
</div>

      </section>

  )


}

export default Checkout;
