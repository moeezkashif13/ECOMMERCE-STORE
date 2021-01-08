import React from 'react';

import Auxx from '../Auxx/Auxx';

import EachShoe from './EachShoe/EachShoe';

import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  


const URL = 'https://cdn.shopify.com/s/files/1/1241/4530/products/AlphaBeat_Black_x190.jpg?v=1604398161';
const URL1='https://cdn.shopify.com/s/files/1/1241/4530/products/MateriaBootBluePerfil_720x.jpg?v=1570440660';
const URL2 = 'https://cdn.shopify.com/s/files/1/1241/4530/products/perfilblack_1024x1024@2x.jpg?v=1531731011';
const URL3= 'https://cdn.shopify.com/s/files/1/1241/4530/products/PocketYBlue1_1024x1024@2x.jpg?v=1571143899';
const URL4 = 'https://cdn.shopify.com/s/files/1/1241/4530/products/TokioDarkGrey_front_1024x1024@2x.jpg?v=1580749367';
let trying = [

    [
    {itemName:'First Sneaker',url:URL,size:'XS',price:'30',totalPriceInitial:'30.00'},
    {itemName:'Second Sneaker',url:URL,size:'SM',price:'30',totalPriceInitial:'30.00'},
    {itemName:'Third Sneaker',url:URL,size:'ML',price:'30',totalPriceInitial:'30.00'},
    {itemName:'Fourth Sneaker',url:URL,size:'XL',price:'30',totalPriceInitial:'30.00'},
],[
    {itemName:'First Boot',url:URL1,size:'XS',price:'40',totalPriceInitial:'40.00'},
    {itemName:'Second Boot',url:URL1,size:'SM',price:'40',totalPriceInitial:'40.00'},
    {itemName:'Third Boot',url:URL1,size:'ML',price:'40',totalPriceInitial:'40.00'},
    {itemName:'Fourth Boot',url:URL1,size:'XL',price:'40',totalPriceInitial:'40.00'},
]

,[
    {itemName:'First Shoe',url:URL2,size:'XS',price:'60',totalPriceInitial:'60.00'},
    {itemName:'Second Shoe',url:URL2,size:'SM',price:'60',totalPriceInitial:'60.00'},
    {itemName:'Third Shoe',url:URL2,size:'ML',price:'60',totalPriceInitial:'60.00'},
    {itemName:'Fourth Shoe',url:URL2,size:'XL',price:'60',totalPriceInitial:'60.00'},
]

,[
    {itemName:'First Accessory',url:URL3,size:'XS',price:'80',totalPriceInitial:'80.00'},
    {itemName:'Second Accessory',url:URL3,size:'SM',price:'80',totalPriceInitial:'80.00'},
    {itemName:'Third Accessory',url:URL3,size:'ML',price:'80',totalPriceInitial:'80.00'},
    {itemName:'Fourth Accessory',url:URL3,size:'XL',price:'80',totalPriceInitial:'80.00'},
]

,[
    {itemName:'First Wear',url:URL4,size:'XS',price:'40',totalPriceInitial:'40.00'},
    {itemName:'Second Wear',url:URL4,size:'SM',price:'10',totalPriceInitial:'10.00'},
    {itemName:'Third Wear',url:URL4,size:'ML',price:'80',totalPriceInitial:'80.00'},
    {itemName:'Fourth Wear',url:URL4,size:'XL',price:'10',totalPriceInitial:'10.00'},
]

]


const Arr = props=>{

    let check;


    // RENDERINGGG SNEAKERSSS
    if(props.collection==='BOOT'){
    
        check = trying[1].map((elem,index)=>{

            return(


                <Auxx>
    
            {/* <EachShoe key={index} shoe={elem.itemName} pic={elem.url}/>          */}
            <EachShoe price={elem.price}  key={index} size={elem.size} totalPriceInitial = {elem.totalPriceInitial} shoe={elem.itemName} pic={elem.url}/>
           </Auxx>

            
)
        })

    // RENDERINGGG BOOTTSSS

    }else if(props.collection==='SNEAKERS'){
        check = trying[0].map((elem,index)=>{

            return( <Auxx>
    
            {/* <EachShoe key={index} shoe={elem.itemName} pic={elem.url}/>          */}
            <EachShoe  price={elem.price} key={index} size={elem.size} totalPriceInitial = {elem.totalPriceInitial} shoe={elem.itemName} pic={elem.url}/>
           </Auxx>
)
        })
    
    }


    // RENDERINGGG COMINGG SOONN

    else if(props.collection==='SHOES'){
        check = trying[2].map((elem,index)=>{

            return( <Auxx>
    
            {/* <EachShoe key={index} shoe={elem.itemName} pic={elem.url}/>          */}
               
            <EachShoe price={elem.price} key={index} size={elem.size} totalPriceInitial = {elem.totalPriceInitial} shoe={elem.itemName} pic={elem.url}/>
           </Auxx>
)
        })
    
    }


    // 

    else if(props.collection==='ACCESSORIES'){
        check = trying[3].map((elem,index)=>{

            return( <Auxx>
    
            {/* <EachShoe key={index} shoe={elem.itemName} pic={elem.url}/>       */}

            <EachShoe price={elem.price}  key={index} size={elem.size} totalPriceInitial = {elem.totalPriceInitial} shoe={elem.itemName} pic={elem.url}/>   
               
           </Auxx>
)
        })
    
    }


    // 
    else if(props.collection==='WEAR'){
        check = trying[4].map((elem,index)=>{

            return( <Auxx>
    
            <EachShoe price={elem.price} key={index} size={elem.size} totalPriceInitial = {elem.totalPriceInitial} shoe={elem.itemName} pic={elem.url}/>         
               
           </Auxx>
)
        })
    
    }

return <Auxx>{check}</Auxx>


}


export default Arr;