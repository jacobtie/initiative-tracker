import React, { Component, CSSProperties } from 'react';
import AddCharacter from './addcharacter';
import ICharacter from '../types/character';

interface ITrackerState {
  characters: Array<ICharacter>;
}

export default class Tracker extends Component<{}, ITrackerState> {
  constructor(props: any) {
    super(props);

    this.state = {
      characters: [],
    };
  }

  handleAddCharacter(character: ICharacter): void {
    this.setState({ characters: [...this.state.characters, character] });
  }

  render() {
    const containerStyle: CSSProperties = {
      backgroundColor: 'rgba(0, 0, 0, .8)',
      display: 'flex',
      flex: '1 1 auto',
    };
    return (
      <div style={containerStyle}>
        <AddCharacter
          handleAddCharacter={(character: ICharacter) =>
            this.handleAddCharacter(character)
          }
        />
      </div>
    );
  }
}
