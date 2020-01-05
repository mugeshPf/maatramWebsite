
import React, { PropTypes } from 'react';
import Navbar from '../../components/Navbar/NavbarPage'

class ContactView extends React.Component {
   constructor(props){
        super(props);
   }   
  render() {
    return( 
     <div>
       <Navbar/>
       <div>Warm Welcome Guys ! From ContactView</div>
     </div>
    );    
  }
}  

export default ContactView
