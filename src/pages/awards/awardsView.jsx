
import React, { PropTypes } from 'react';
import Navbar from '../../components/Navbar/NavbarPage'

class AwardsView extends React.Component {
   constructor(props){
        super(props);
   }   
  render() {
    return( 
     <div>
       <Navbar/>
       <div>Warm Welcome Guys ! From AwardsView</div>
     </div>
    );    
  }
}  

export default AwardsView
