
import React, { PropTypes } from 'react';
import Navbar from '../../components/Navbar/NavbarPage'

class NewsAndEventsView extends React.Component {
   constructor(props){
        super(props);
   }   
  render() {
    return( 
     <div>
       <Navbar/>
       <div>Warm Welcome Guys ! From Home</div>
     </div>
    );    
  }
}  

export default NewsAndEventsView
