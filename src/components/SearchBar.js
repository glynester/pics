import React from 'react';

// Needs to be class based to handle user input - typing into search bar (state).
// const SearchBar=()=>{
//   return <div>Search Bar</div>;
// }
class SearchBar extends React.Component{
onInputChange(event){
  console.log(event.target.value);  // Text that user added to input
}

onInputClick(event){
  console.log("Input was clicked");
}

  render(){
    return (
    <div className="ui segment">
      <form className="ui form">
        <div className="field">
          <label>Image Search</label>
          <input type="text" onClick={this.onInputClick} onChange={this.onInputChange}/>
        </div>
      </form>  
    </div>
    );
  }
}

export default SearchBar;