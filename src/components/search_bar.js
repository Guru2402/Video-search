import React, { Component } from 'react';
//==============================================================================
class SearchBar extends Component {
//==============================================================================
constructor(props){
  super(props);
  this.state = {
    term:''
  }
}
//==============================================================================
onSubmitInput(event){
  this.setState({term:event.target.value})
  return this.props.onSubmit(event.target.value);
}
//==============================================================================
  render(){
    return(
      <div className=" search_bar" >
        <input
          type="text"
          className="form-control"
          placeholder="Search for..."
          value={this.state.term}
          onChange={(event)=> this.onSubmitInput(event) }
        />
      </div>
    );
  }
}
//==============================================================================
export {SearchBar};
