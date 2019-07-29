import React, { Component, CSSProperties } from 'react';
import AddCharacter from './addcharacter';
import ICharacter from '../types/character';
import CharactersList from './characterslist';
import PlayerType from '../types/playertype';

interface ITrackerProps {}

interface ITrackerState {
  characters: Array<ICharacter>;
}

export default class Tracker extends Component<ITrackerProps, ITrackerState> {
  constructor(props: ITrackerProps) {
    super(props);

    this.state = {
      characters: [],
    };
  }

  sortCharacters() {
    const sortableCharacters = [...this.state.characters];

    sortableCharacters.sort(
      (a: ICharacter, b: ICharacter): number => {
        let retVal: number;
        if (a.score > b.score) {
          retVal = -1;
        } else if (a.score < b.score) {
          retVal = 1;
        } else {
          if (
            a.playerType === PlayerType.PC &&
            b.playerType === PlayerType.NPC
          ) {
            retVal = -1;
          } else if (
            a.playerType === PlayerType.NPC &&
            b.playerType === PlayerType.PC
          ) {
            retVal = 1;
          } else {
            retVal = 0;
          }
        }

        return retVal;
      }
    );

    this.setState({ characters: sortableCharacters });
  }

  setInitiative(id: number, value: number): void {
    this.setState(
      {
        characters: this.state.characters.map(character => {
          let retVal;
          if (character.id === id) {
            retVal = {
              ...character,
              score: value,
            };
          } else {
            retVal = character;
          }
          return retVal;
        }),
      },
      () => this.sortCharacters()
    );
  }

  removeCharacter(id: number): void {
    this.setState(
      {
        characters: this.state.characters.filter(
          character => character.id !== id
        ),
      },
      () => this.sortCharacters()
    );
  }

  handleAddCharacter(character: ICharacter): void {
    this.setState(
      {
        characters: [
          ...this.state.characters,
          { ...character, id: this.state.characters.length },
        ],
      },
      () => this.sortCharacters()
    );
  }

  render() {
    const containerStyle: CSSProperties = {
      backgroundColor: 'rgba(0, 0, 0, .8)',
      display: 'flex',
      flexDirection: 'column',
      flex: '1 1 auto',
    };

    const contentStyle: CSSProperties = {
      display: 'flex',
      flexDirection: 'row',
      flex: '1 1 auto',
    };

    return (
      <div style={containerStyle}>
        <AddCharacter
          handleAddCharacter={(character: ICharacter) =>
            this.handleAddCharacter(character)
          }
        />
        <div style={contentStyle}>
          <CharactersList
            characters={this.state.characters}
            setInitiative={(id, number) => this.setInitiative(id, number)}
            removeCharacter={id => this.removeCharacter(id)}
          />
        </div>
      </div>
    );
  }
}
