import React, { Component, CSSProperties } from 'react';
import AddCharacter from './addcharacter';
import ICharacter from '../types/character';
import CharactersList from './characterslist';
import PlayerType from '../types/playertype';
import Controls from './controls';

interface ITrackerProps {}

interface ITrackerState {
  characters: Array<ICharacter>;
  turn: number;
  idCounter: number;
}

export default class Tracker extends Component<ITrackerProps, ITrackerState> {
  constructor(props: ITrackerProps) {
    super(props);

    this.state = {
      characters: [],
      turn: 0,
      idCounter: 0,
    };
  }

  sortCharacters(): void {
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
    this.setState({
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
    });
  }

  removeCharacter(id: number): void {
    let removedIndex = -1;
    for (let i = 0; i < this.state.characters.length; i++) {
      if (this.state.characters[i].id === id) {
        removedIndex = i;
        break;
      }
    }

    let turn;
    if (
      removedIndex === this.state.turn &&
      removedIndex === this.state.characters.length - 1
    ) {
      turn = 0;
    } else if (removedIndex === turn) {
      turn = this.state.turn;
    } else if (removedIndex < this.state.turn) {
      turn = this.state.turn - 1;
    } else {
      turn = this.state.turn;
    }

    this.setState({
      characters: this.state.characters.filter(
        character => character.id !== id
      ),
      turn: turn,
    });
  }

  addCharacter(character: ICharacter): void {
    this.setState({
      characters: [
        ...this.state.characters,
        { ...character, id: this.state.idCounter },
      ],
      idCounter: this.state.idCounter + 1,
    });
  }

  advanceTurn(): void {
    this.setState({
      turn:
        this.state.turn >= this.state.characters.length - 1
          ? 0
          : this.state.turn + 1,
    });
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
            this.addCharacter(character)
          }
        />
        <div style={contentStyle}>
          <CharactersList
            characters={this.state.characters}
            setInitiative={(id, number) => this.setInitiative(id, number)}
            removeCharacter={id => this.removeCharacter(id)}
            turn={this.state.turn}
          />
          <div style={contentStyle}>
            {this.state.characters.length > 0 && (
              <Controls
                sortCharacter={() => this.sortCharacters()}
                handleNextTurnClick={() => this.advanceTurn()}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
