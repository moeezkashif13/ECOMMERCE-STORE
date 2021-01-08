import React from 'react';
import {connect} from 'react-redux';

// Reusable Dropdown
class Dropdown extends React.Component {


  // selectValue => current selected value
  // filterData => choices in the dropdown
  // setFilteredData => function to change the selectValue

  handleChange = e => {
    this.props.setFilteredData(e.target.value);


  };

  render() {
  const { selectValue, filterData } = this.props;

  setTimeout(() => {
    document.querySelector('option').setAttribute('selected','selected');
    
  }, 100);
  
    return (
    <div className='ddown'>
      <select value={selectValue} onChange={this.handleChange}>
        {/* <option hidden>Select your option</option> */}
        {filterData.map(data => {
          return (
            <option key={data} value={data}>
              {data}
            </option>
          );
        })}
      </select>
    </div>
  );




  }
  
};



class Parentttt extends React.Component {
  constructor() {
    super();
    this.state = {
      selectValue: 1, 
      filterData: [1,2,3,4],
    };
  }

  onChangeHandle = (name) => {
    this.setState({ selectValue: name });

    this.props.sendQuantityToCartItems(name);
    

    


  };

  componentDidMount = ()=>{

    console.log(this);


    

  }

  trying = event=>{

  
    let eachContainerPrice = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[3];

    this.props.eachContainerTotalPrice(eachContainerPrice);
  
    let individualMainPrices = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1];

    this.props.individualMainPrices(individualMainPrices);    
  
  }

check = event=>{
  console.log('checkkkk');

  this.trying(event);
  
}

  render() {
    return (
      <div className='parent' onClick={this.trying}  onMouseEnter={this.check}>
        {/* Please select your country:  */}
        <Dropdown selectValue={this.state.selectValue} filterData={this.state.filterData} setFilteredData={this.onChangeHandle} />
        <div>{this.state.selectValue ? ``: ''}</div>
      </div>
    );
  }
}


const mapStateToProps = state=>{

  return{



  }

}


const mapDispatchToProps = dispatch=>{

  return{
    sendQuantityToCartItems : val=>dispatch({type:'sendQuantityToCartItems',val:val,}),
    eachContainerTotalPrice : value=>dispatch({type:'eachContainerTotalPrice',value}),

    individualMainPrices : mainIndividualPrice=>dispatch({type:'individualMainPrices',individual:mainIndividualPrice})

  }

}






export default connect(mapStateToProps,mapDispatchToProps)(Parentttt);