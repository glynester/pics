import React from 'react';
import {getRandom, Constants} from '../gbHelperCode/gbHelper';


// Needs to be class based to handle user input - typing into search bar (state).
// const SearchBar=()=>{
//   return <div>Search Bar</div>;
// }
class SearchBar extends React.Component{
  constructor(){
    super()
    this.firstLoad=true;
    this.state = { term: '' };
  }
  
  componentDidMount(){
    if (this.firstLoad){
      const word = getRandom(Constants.SEARCH_WORDS,1)[0]
      this.setState({ term: word}); // Comment out to hide intial search term
      this.props.onSubmit(word);
      this.firstLoad=false;
    }
  }

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
          <>Enter a search term below, then press enter</>
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