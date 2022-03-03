import React from 'react';

// Needs to be class based to handle user input - typing into search bar (state).
// const SearchBar=()=>{
//   return <div>Search Bar</div>;
// }
class SearchBar extends React.Component{
  state = { term: '' };
  // onInputChange(event){
  //   console.log(event.target.value);  // Text that user added to input
  // }
// Alternate callback for onChange - pass an arrow fn directly
// (event)=>console.log(event.target.value)
  render(){
    return (
    <div className="ui segment">
      <form className="ui form">
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