import React from 'react';

// Needs to be class based to handle user input - typing into search bar (state).
// const SearchBar=()=>{
//   return <div>Search Bar</div>;
// }
class SearchBar extends React.Component{
  render(){
    return (
    <div>
      <form>
        <input type="text" />
      </form>  
    </div>
    );
  }
}

export default SearchBar;