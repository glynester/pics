import React from 'react';

// Needs to be class based to handle user input - typing into search bar (state).
// const SearchBar=()=>{
//   return <div>Search Bar</div>;
// }
class SearchBar extends React.Component{
  state = { term: '' };

  onFormSubmit=(event)=>{
    event.preventDefault();
    console.log(this.props.onSubmit); // function onSearchSubmit(term)
      // We are in a class based component so we reference the props obj with "this.props.onSubmit" - THIS
    // onSubmit was passed in as a prop from App component  
    this.props.onSubmit(this.state.term);
  }

  render(){
    return (
    <div className="ui segment">
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