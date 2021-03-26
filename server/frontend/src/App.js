import './bootstrap.min.css';
import React from 'react';

/*


Paste the Watson Assitant Code here

*/

class App extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
                {/* 
                
                
                Add more relevant links to tabs here and add code 
                to make it more functional 
                
                
                */}
              <li class="nav-item">
                <a class="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
