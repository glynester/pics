// Shows one image by itself

import { render } from '@testing-library/react';
import React from 'react';

class ImageCard extends React.Component {
  render(){
    const { alt_description:description, urls } = this.props.image;
    return (
     <div>
       <img 
        // alt={this.props.image.alt_description} 
        // src={this.props.image.urls.regular} 
        alt={description} 
        src={urls.regular} 
       />
     </div>
    )
  }
}

export default ImageCard;
