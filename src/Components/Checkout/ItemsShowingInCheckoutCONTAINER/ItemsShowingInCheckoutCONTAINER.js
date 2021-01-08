import React from 'react';
import Auxx from '../../Auxx/Auxx';
import {connect} from 'react-redux';
import ItemsShowingInCheckout from '../ItemsShowingInCheckout/ItemsShowingInCheckout';


require('../Checkout.css');



let trees = [];
let idsArr = [];
let nowMainArray = [];

const ItemsShowingInCheckoutCONTAINER = props=>{

if(props.twoDetails!==null){
  trees.push(props.twoDetails);
idsArr.push(props.twoDetails.id);
}
let x = (names) => names.filter((v,i) => names.indexOf(v) == i)
let newIDS = x(idsArr); // 'John', 'Paul', 'George', 'Ringo'
let check = newIDS.map(elem=>{
  const result = trees.filter(tree => {
    return tree.id == elem;
   });
   return result;  
})
console.log(check);
let avien = ch=>{
  let mapped = ch.map(elem=>{
   return elem.slice().pop(-1);
  })
  return mapped;
}
let mained = avien(check);
let checkBRO = [...mained];
  let sendToItemsShowingInCheckout;
  if(props.sendToItemsShowingInCheckout!==null&&props.signal){
    sendToItemsShowingInCheckout = props.sendToItemsShowingInCheckout.map((elem,index)=>{
// totalPriceInitial={elem.totalPriceInitial}

let one = 1;
let oneMultiplied = 10;
return <ItemsShowingInCheckout totalPriceInitial = {checkBRO[index]?checkBRO[index].multipliedTotal:null}  quantityInNumbers ={checkBRO[index]?checkBRO[index].quantityInNumbers:null}  itemName={elem.shoe} size={elem.size} />})
}



    return(

        <Auxx>
    <div className="discountCodeEtcOptions">
<div className="ItemsShowingInCheckout">

{/* <ItemsShowingInCheckout /> */}

{sendToItemsShowingInCheckout}


</div>


<div className="row"  style={{margin:'40px 0'}}>
          {/* <input type="submit" defaultValue="Submit" className="btn" />
          <input type="submit" defaultValue="cancel" className="btn" /> */}


<div className="col2" style={{width:'75%'}}>
              <input type="text" />
            </div>
            
            <div className="col1" style={{textAlign:'right'}}>

          <input placeholder="Enter Discount Code" style={{width:'20%',marginRight:'0px',margin:'0',padding:'12px'}} type="submit" className="btn" value="Apply" />

            </div>



        </div>


        <div className="totalInCheckout">

<p>Total</p>

<h2 style={{marginLeft:'auto'}}>$95.00</h2>

</div>
</div>

</Auxx>




        )
} 


      const mapStateToProps = state=>{

        return{
      
            // sendItToAppJS : state.sendItToAppJS,
      
            sendToItemsShowingInCheckout : state.sendToItemsShowingInCheckout,
      
            signal: state.signal,
      
      
            twoDetails : state.twoDetails,
      
      
        }
      
      }
      
      
      const mapDispatchToProps = dispatch=>{
      
        return{
      
      
      
        }
      
      }
      
export default connect(mapStateToProps,mapDispatchToProps)(ItemsShowingInCheckoutCONTAINER);
      