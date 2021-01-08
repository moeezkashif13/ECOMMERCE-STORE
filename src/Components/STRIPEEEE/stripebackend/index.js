const cors = require('cors');

const express = require('express');

const stripe = require("stripe")("sk_test_51I5zxRAEk1YEt5QdaEvDjeA42XWcUwvhGUt64SbFmWxY0mfg9QjCTlUtqlG5t6iRl3vzE3ExqMl3Chw5OvLUsjwN001B5coTAf");


const uuid = require("uuid");

const app = express();

app.use(express.json());

app.use(cors());


//ROUTESSS 

app.get("/",(req,res)=>{

    res.send("ITT WORKSS AT LEARNCODEONLINEEE");

});



app.post("/payment",(req,res)=>{

    const {product,token} = req.body;

    console.log("PRODUCTTT",product);

    console.log("PRICEEE",product.price);

    console.log("productBy",product.productBy,"gettinggg frommm frontttenddd");
    

    // const idemPontencyKey = uuid();

    
    return stripe.customers.create({
        email : token.email,
        source : token.id,

    }).then(gettingCustomerBack=>{
        stripe.charges.create({

            amount : product.price*100,
            currency : 'usd',
            customer : gettingCustomerBack.id,
            receipt_email : token.email,
            description : product.name,
            // shipping : {
                
                
            //     name : token.card.name,
            //     address : {
            //         country : token.card.address_country,
            //     },



            // }

            // ,{idemPontencyKey}
        })
    }).then(result=>res.status(200).json(result)).catch(err=>console.log(err));

})



//LISTENN

app.listen(8282,()=>console.log("LISTENINGGG ATT PORTTT 8282"))