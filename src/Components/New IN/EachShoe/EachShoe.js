import React from 'react';
import {connect} from 'react-redux';
require('./EachShoe.css');

// import MainPage from './Components/MainPage/MainPage';
import {Link} from 'react-router-dom';


const EachShoe = props=>{

    const changeMainPage = ()=>{

        props.sendItToAppJS(props);

    }

    return(
        <div className="column firstColumn" onClick={changeMainPage}>


<a href="#!">

<div className="pic" style={{backgroundImage:`url(${props.pic})`}}></div>

<h6>{props.shoe}</h6>

</a>

</div>


    )

}

const mapStateToProps = state=>{
    return{

    }
}


const mapDispatchToProps = dispatch=>{
    return{

        sendItToAppJS : mainObj=>dispatch({type:'sendItToAppJS',main:mainObj})

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(EachShoe);