
import React, { PropTypes } from 'react';
import Navbar from '../../components/Navbar/NavbarPage'

class BlogView extends React.Component {
   constructor(props){
        super(props);
   }   
  render() {
    return( 
     <div>
       <Navbar/>
       <div>Warm Welcome Guys ! From BlogView</div>
     </div>
    );    
  }
}  

export default BlogView
