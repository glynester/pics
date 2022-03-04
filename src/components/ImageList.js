import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList=(props)=>{
  console.log("ImageList",props.images)
  props.images.forEach(v=>console.log(v.urls.raw,v.id))
  const images = props.images.map((image)=>{
  // const images = props.images.map(({urls, alt_description, id})=>{
    // return <img src={urls.regular} alt={alt_description} key={id}  style={{width:'300px'}}/>;
    return <ImageCard key={image.id} image={image}/>
  });
// console.log("images",images)
  return <div className="image-list">{images}</div>
};


export default ImageList;