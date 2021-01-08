import React from 'react';
import './New IN.css';
import {connect} from 'react-redux';
import Arr from './Arr';

require('./New IN.css');


const NewIN = props=>{


    return(
        
        <section className="sect2">

<div className="newIN">

<h1>{props.collection} COLLECTION</h1>

<a href="#!">{props.tagLine}</a>

</div>

<div className="fourColumnsContainer">


<Arr collection={props.collection}/>



</div>


        </section>

    )


}

const mapStateToProps = state =>{

    return{

        sendArraysToNewIN : state.sendArraysToNewIN,

    }

}

const mapDispatchToProps = dispatch =>{

    return{
        
        sendCollection : value=>dispatch({type:'collection',val:value})

    }

}



export default connect(mapStateToProps,mapDispatchToProps)(NewIN);