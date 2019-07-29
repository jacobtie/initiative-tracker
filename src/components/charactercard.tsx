import React, { Component, CSSProperties } from 'react';
import ICharacter from '../types/character';
import { getStringFromPlayerType } from '../types/playertype';

interface ICharacterCardProps {
  character: ICharacter;
  setInitiative: (id: number, initiative: number) => void;
  removeCharacter: (id: number) => void;
}

interface ICharacterCardState {}

export default class CharacterCard extends Component<
  ICharacterCardProps,
  ICharacterCardState
> {
  rollInitiative(id: number): void {
    const roll =
      Math.floor(Math.random() * 20 + 1) + this.props.character.initiativeMod;
    this.props.setInitiative(this.props.character.id, roll);
  }

  removeCharacter(id: number): void {
    this.props.removeCharacter(id);
  }

  render() {
    const { character } = this.props;

    const containerStyle: CSSProperties = {
      margin: '15px',
      padding: '5px',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      width: '85%',
      height: '3.4rem',
      border: '2px solid black',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    };

    const statsStyle: CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '50%',
      fontWeight: 'bold',
      paddingRight: '10%',
      borderRight: '2px solid black',
    };

    const controlStyle: CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '40%',
    };

    return (
      <div style={containerStyle}>
        <div style={statsStyle}>
          <span>{character.characterName}</span>
          <span>{getStringFromPlayerType(character.playerType)}</span>
          <span>
            {character.initiativeMod < 0
              ? `${character.initiativeMod}`
              : `+${character.initiativeMod}`}
          </span>
        </div>
        <div style={controlStyle}>
          <i
            className="fas fa-dice-d20"
            style={{ cursor: 'pointer' }}
            onClick={() => this.rollInitiative(character.id)}
          />
          <span>{character.score}</span>
          <i
            className="fas fa-trash-alt"
            style={{ cursor: 'pointer' }}
            onClick={() => this.removeCharacter(character.id)}
          />
        </div>
      </div>
    );
  }
}
