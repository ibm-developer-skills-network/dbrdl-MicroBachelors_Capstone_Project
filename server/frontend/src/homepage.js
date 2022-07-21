import './bootstrap.min.css';
import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div style={{display:"flex"}}>
        <img src='/cardealership.jpeg' style={{width: "300px"}}/>
        <div style={{margin:"100px"}}>
             <span style={{margin:"60px"}}>
             "We are proud to offer you the best car dealership in the USA"
               </span >
           </div>

        </div>
        
      </div>
    );
  }
}

export default HomePage;
