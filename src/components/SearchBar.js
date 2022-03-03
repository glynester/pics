import React from 'react';

// Needs to be class based to handle user input - typing into search bar (state).
// const SearchBar=()=>{
//   return <div>Search Bar</div>;
// }
class SearchBar extends React.Component{
  state = { term: '' };

  // Makes a new function with the correct value of "this" - overwrites old function.
  // constructor(){
  //   super();
  //  this.onFormSubmit=this.onFormSubmit.bind(this); 
  // }


  // Incorrect value of "this" if callback is not an arrow function
  // onFormSubmit(event){
  //   event.preventDefault();
  //   console.log(this.state.term)
  // }

  onFormSubmit=(event)=>{
    event.preventDefault();
    console.log(this.state.term)
  }

  render(){
    return (
    <div className="ui segment">
      {/* {<form onSubmit={(event)=>this.onFormSubmit(event)}  */}
      <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="field">
          <label>Image Search</label>
          <input 
            type="text" 
            value={this.state.term} 
            onChange={(e)=>this.setState({ term: e.target.value})}/>
        </div>
      </form>  
    </div>
    );
  }
}

export default SearchBar;