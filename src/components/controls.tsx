import React, { Component, CSSProperties } from 'react';

interface IControlsProps {
  sortCharacter: () => void;
  handleNextTurnClick: () => void;
}

interface IControlsState {}

export default class Controls extends Component<
  IControlsProps,
  IControlsState
> {
  render() {
    const containerStyle: CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '100%',
    };

    const buttonStyle: CSSProperties = {
      height: '15%',
      width: '80%',
      fontSize: '30px',
      borderRadius: '35%',
    };

    return (
      <div style={containerStyle}>
        <button
          style={buttonStyle}
          onClick={() => this.props.handleNextTurnClick()}
        >
          Next Turn
        </button>
        <button style={buttonStyle} onClick={() => this.props.sortCharacter()}>
          Sort
        </button>
      </div>
    );
  }
}
