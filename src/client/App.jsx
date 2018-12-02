/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */
 
import React, { Component } from 'react';
import MainContainer from './containers/MainContainer'

// const App = () => (
//   <div>
//     <MainContainer />
//   </div>
// )

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <MainContainer />
      </div>
    )
  }
}

export default App;