const initialState = {

  collectionTextIndicator : null,

  sendItToAppJS : null,

  sendToCartJS : [],

  sendQuantityToCartItems : null,

  eachContainerTotalPrice : null,

  sendToItemsShowingInCheckout : null,

  signal : false,

  twoDetails : null,

  individualMainPrices : null,

}

const reducer = (state=initialState,action)=>{
    
    if(action.type==='collection'){

      return{
        ...state,
        collectionTextIndicator : action.val,
      }

    }


    if(action.type==='sendItToAppJS'){

      return{
        ...state,
        sendItToAppJS : action.main,
      }

    }

    if(action.type==='sendToCartJS'){

      return{
        ...state,
        sendToCartJS : action.detailsOfItem,

        

      }

    }

    

    

    
    if(action.type==='sendQuantityToCartItems'){

      return{
        ...state,
        sendQuantityToCartItems : action.val,

        

      }

    }

    if(action.type==='eachContainerTotalPrice'){

      return{
        ...state,
        eachContainerTotalPrice : action.value,

        

      }

    }


    if(action.type==='individualMainPrices'){

      return{
        ...state,
        individualMainPrices : action.individual,

        
      }

    }
    

    if(action.type==='sendToItemsShowingInCheckout'){

      return{
        ...state,
        sendToItemsShowingInCheckout : action.filteredArr,

        

      }

    }


    if(action.type==='signal'){

      return{
        ...state,
        signal : action.sign,

        

        

      }

    }

    if(action.type==='twoDetails'){

      return{
        ...state,
        twoDetails : action.main,

        
      }

    }



    

    

    return state;

}

export default reducer;