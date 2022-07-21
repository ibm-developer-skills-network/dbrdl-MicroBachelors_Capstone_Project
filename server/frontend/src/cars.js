import './bootstrap.min.css';
import React from 'react';

class Cars extends React.Component {
  render() {
    return (
      <div>
        <div style={{display:"flex"}}>
        <img src='/car.png' style={{width: "500px"}}/>
        <div style={{margin:"100px"}}>
             <span style={{margin:"60px"}}>
             "Here you'll find all our cars on sale"
               </span >
           </div>

        </div>
        
      </div>
    );
  }
}

export default Cars;
