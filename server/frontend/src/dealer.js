import './bootstrap.min.css';
import React from 'react';

class Dealer extends React.Component {
  render() {
    return (
      <div>
        <div style={{display:"flex"}}>
        <img src='/dealer.jpeg' style={{width: "300px"}}/>
        <div style={{margin:"100px"}}>
             <span style={{margin:"60px"}}>
             "Here you'll find all our dealerships soon"
               </span >
           </div>

        </div>
        
      </div>
    );
  }
}

export default Dealer;
