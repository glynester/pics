import React from 'react';
// import axios from 'axios';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';


class App extends React.Component {
  state = { images: [] }
// callback to be passed to SearchBar component
onSearchSubmit = async(term)=>{
    console.log(term);
    const response=await unsplash.get('/search/photos',{
      params: { query: term },
    // const response=await axios.get('https://api.unsplash.com/search/photos',{
    //   params: { query: term },
      // headers: {
      //   Authorization: 'Client-ID u0pvA-<api_key_here>'
      // }
    });
    console.log(response.data.results);
    console.log("THIS",this);
    this.setState({images: response.data.results })
  }

  // onSubmit below could have been named something else
  render(){ 
    return (
    <div className="ui container" style={{ marginTop: '10px'}}>
      <SearchBar onSubmit={this.onSearchSubmit} hangOn="WhyAmIThis???"/>
      Found: {this.state.images.length} images
    </div>
    );
  }
}

export default App;