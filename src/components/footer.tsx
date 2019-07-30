import React, { Component, CSSProperties } from 'react';
import './bookends.css';
import moment from 'moment';

export default class Footer extends Component {
  render() {
    const footerStyle: CSSProperties = {
      fontSize: '15px'
    };

    return <footer style={footerStyle} className="bookend">&copy; Jacob Kedar Krevat {moment().year()}</footer>;
  }
}
