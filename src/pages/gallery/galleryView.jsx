
import React, { PropTypes } from 'react';
import Navbar from '../../components/Navbar/NavbarPage'

class GalleryView extends React.Component {
   constructor(props){
        super(props);
   }   
  render() {
    return( 
     <div>
       <Navbar/>
       <div>Warm Welcome Guys ! From GalleryView</div>
     </div>
    );    
  }
}  

export default GalleryView
