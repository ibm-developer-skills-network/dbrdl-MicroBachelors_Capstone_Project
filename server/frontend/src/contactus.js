import './bootstrap.min.css';
import React from 'react';

class ContactUs extends React.Component {
  render() {
    return (
      <div>
        <div style={{display:"flex"}}>
        <img src='/contatus.jpeg' style={{width: "300px"}}/>
        <div style={{margin:"100px"}}>
             <span style={{margin:"60px"}}>
             "We're located by Union Square on the corner of 13th and Broadway"
               </span >
           </div>

        </div>
        
      </div>
    );
  }
}

export default ContactUs;
