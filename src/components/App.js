import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
// callback to be passed to SearchBar component
  onSearchSubmit(term){
    console.log(term);
  }

  // onSubmit below could have been named something else
  render(){ 
    return (
    <div className="ui container" style={{ marginTop: '10px'}}>
      <SearchBar onSubmit={this.onSearchSubmit}/>
    </div>
    );
  }
}

export default App;