import React, { Component } from 'react';
require('./ItemsShowingInCheckout.css');
import {connect} from 'react-redux';
class ItemsShowingInCheckout extends Component{


    
    render(){

        

    // let quantity,totalPrice;

    // if(this.props.twoDetails!==null){

    //     let replicate = {...this.props.twoDetails};

    //     quantity = replicate.quantityInNumbers;

    //     totalPrice = replicate.multipliedTotal+`.00`;


    // }

    

    return(
        <div className="containerOfThree">

<div className="imageInCheckout">

{/* <div className="circle"> {this.props.twoDetails?quantity:1}</div> */}

<div className="circle">{this.props.quantityInNumbers}</div>


    <img src="https://cdn.shopify.com/s/files/1/1241/4530/products/AlphaBeat_Black_x190.jpg?v=1604398161" alt="..."/>
</div>

<div className="othersInCheckout" >

<p>{this.props.itemName}</p>

<div className="bothPriceAndSizeFlex">
    <p>{this.props.size}</p>
    {/* <p style={{marginLeft:'auto',marginTop:'-12.5px',fontSize:'20px'}}>Total : $95.00</p> */}

    {/* <p style={{marginLeft:'auto',marginTop:'-12.5px',fontSize:'20px'}}>Total : ${this.props.twoDetails?totalPrice:this.props.totalPriceInitial}</p> */}

    <p style={{marginLeft:'auto',marginTop:'-12.5px',fontSize:'20px'}}>Total : ${this.props.totalPriceInitial}.00</p>


</div>


</div>


        </div>
    )
}
}

const mapStateToProps = state=>{

    return{
    }

}

const mapDispatchToProps = dispatch=>{

    return{


    }

}

export default connect(mapStateToProps,mapDispatchToProps)(ItemsShowingInCheckout);