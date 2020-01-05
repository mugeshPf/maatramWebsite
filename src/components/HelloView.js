
import React, { PropTypes } from 'react';

class Hello extends React.Component {
   constructor(props){
        super(props);
   }   
  render() {
    return( 
     <div>
       <button  onClick={()=>this.props.onClick()}>click</button>
       {alert(this.props.message)}
       <button onClick={()=>this.props.onReset()}>reset</button>
     </div>
    );    
  }
}  

export default Hello