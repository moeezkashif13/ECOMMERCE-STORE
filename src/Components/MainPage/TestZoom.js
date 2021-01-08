import React,{Component} from 'react';
import Auxx from '../Auxx/Auxx';

import {
  GlassMagnifier,
} from "react-image-magnifiers";



class TestZoom extends Component{
   
  

    
      render() {
        return ( 

          <Auxx>    
          <GlassMagnifier
  imageSrc="https://cdn.shopify.com/s/files/1/1241/4530/products/AlphaBeat_Black_1024x1024@2x.jpg?v=1606432414"
  imageAlt="Example"
  // largeImageSrc="./large-image.jpg" // Optional
/>


         
</Auxx>

        );
      }
}



export default TestZoom;