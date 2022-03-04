import React from 'react';

const ImageList=(props)=>{
  console.log("ImageList",props.images)
  props.images.forEach(v=>console.log(v.urls.raw,v.id))
  // const images = props.images.map(image=>{   // Destructure vars we need.
  const images = props.images.map(({urls, alt_description, id})=>{
    return <img src={urls.regular} alt={alt_description} key={id}  style={{width:'300px'}}/>;
  });
// console.log("images",images)
  return <div>{images}</div>
};


export default ImageList;