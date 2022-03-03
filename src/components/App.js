import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
// callback to be passed to SearchBar component
  onSearchSubmit(term){
    console.log(term);
    axios.get('https://api.unsplash.com/search/photos',{
      params: { query: term },
      headers: {
        Authorization: 'Client-ID u0pvA-mBrIpcFo9Z1TfIPlzz_CRTOEmWrIwbDaAykKk'
      }
    });
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