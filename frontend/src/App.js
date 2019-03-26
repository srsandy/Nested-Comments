import React, { Component } from 'react';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
       <div>
       		<h1>Nested-Comments</h1>
       		<Post></Post>
       </div>
    );
  }
}

export default App;
