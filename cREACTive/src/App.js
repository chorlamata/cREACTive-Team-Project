import React, { Component } from 'react';
import Header from './components/common/Header';
import {Link} from 'react-router';



class App extends Component {
  render() {
    return (
      <div className="App">
          <Header>
              <Link to="/">Home</Link>
          </Header>
          {this.props.children}
      </div>
    );
  }
}

export default App;
