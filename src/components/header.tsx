import React, { Component, CSSProperties } from 'react';

export default class Header extends Component {
  render() {
    const headerStyle: CSSProperties = {
      backgroundColor: 'black',
      border: '5px solid red',
      textAlign: 'center',
      color: 'white',
      width: '100%',
    };
    return <div style={headerStyle}>D&amp;D Initiative Tracker</div>;
  }
}
