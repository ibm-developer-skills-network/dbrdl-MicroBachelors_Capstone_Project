import './bootstrap.min.css';
import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div style={{display:"flex"}}>
        <figure class="figure">
            <img src="/cardealership.jpeg" style={{width: "300px"}} class="figure-img img-fluid rounded" alt="Our dealership in New York"></img>
            <figcaption class="figure-caption">Our Dealership in New York </figcaption>
        </figure>
        <div style={{margin:"100px"}}>
             <span style={{margin:"60px"}}>
             We are proud to offer you <mark>the best car dealership</mark>in the USA!
               </span >
        </div>

        </div>
        
      </div>
    );
  }
}

export default HomePage;
