import React, { Component, CSSProperties } from 'react';
import ICharacter from '../types/character';
import CharacterCard from './charactercard';

interface ICharactersListProps {
  characters: Array<ICharacter>;
  setInitiative: (id: number, value: number) => void;
  removeCharacter: (id: number) => void;
  turn: number;
}

interface ICharactersListState {}

export default class CharactersList extends Component<
  ICharactersListProps,
  ICharactersListState
> {
  render() {
    const containerStyle: CSSProperties = {
      padding: '15px',
      width: '50%',
      borderLeft: '2px solid white',
      borderRight: '2px solid white',
    };

    return (
      <div style={containerStyle}>
        {this.props.characters.map(
          (character: ICharacter, index: number): JSX.Element => (
            <CharacterCard
              key={index}
              character={character}
              setInitiative={this.props.setInitiative}
              removeCharacter={this.props.removeCharacter}
              turn={this.props.turn === index}
            />
          )
        )}
      </div>
    );
  }
}
