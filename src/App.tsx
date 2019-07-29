import React, { Component } from 'react';
import Header from './components/header';
import Tracker from './components/tracker';
import Footer from './components/footer';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Tracker />
        <Footer />
      </div>
    );
  }
}

export default App;
