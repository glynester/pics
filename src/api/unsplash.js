// axios config for unsplash

import axios from 'axios';

// creates customised instance of axios client
export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: process.env.REACT_APP_UNSPLASH_API
  }
});

// One approach we could use
// const searchImages = (term) => {

// }


