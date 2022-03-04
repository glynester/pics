// Shows one image by itself

import { render } from '@testing-library/react';
import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state={ spans: 0 };
    this.imageRef = React.createRef();
  }
  // check img was loaded so we can see now tall it was.
  componentDidMount(){
    // console.log("imageRef",this.imageRef.current);
    // console.log("imageRef",this.imageRef.current.clientHeight)
    // Can get height details before image has fully loaded so need to...
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  // Must be arrow function.
  setSpans=()=>{
    // console.log("this",this);
    // console.log(this.imageRef.current.clientHeight);
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height/10);    // (css)  grid-auto-rows: 10px;
    this.setState({spans}); // spans: spans
  }

  // Set div style to be as tall as the spans necessary to show the full image.
  render(){
    const { alt_description:description, urls } = this.props.image;
    return (
     <div style={{gridRowEnd: `span ${this.state.spans}`}}>
       <img 
        ref={this.imageRef}
        alt={description} 
        src={urls.regular} 
       />
     </div>
    )
  }
}

export default ImageCard;
