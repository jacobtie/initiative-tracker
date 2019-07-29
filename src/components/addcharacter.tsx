import React, { Component, ChangeEvent, CSSProperties } from 'react';
import ICharacter from '../types/character';
import PlayerType from '../types/playertype';

interface IAddCharacterProps {
  handleAddCharacter: (character: ICharacter) => void;
}

interface IAddCharacterState {
  character: ICharacter;
}

export default class AddCharacter extends Component<
  IAddCharacterProps,
  IAddCharacterState
> {
  constructor(props: IAddCharacterProps) {
    super(props);

    this.state = {
      character: {
        id: 0,
        characterName: '',
        playerType: PlayerType.PC,
        initiativeMod: 0,
        score: 0,
      },
    };
  }

  modOptions: number = 10;

  getModOptionDisplay = (option: number): string => {
    return option < 0 ? `${option}` : `+${option}`;
  };

  renderModOptions(): Array<JSX.Element> {
    const options: Array<JSX.Element> = [];

    // Add all negative values
    for (let i = 0; i < this.modOptions; i++) {
      const value: number = i - 10;
      options.push(
        <option key={value} value={value}>
          {this.getModOptionDisplay(value)}
        </option>
      );
    }

    // Add zero and all positive values
    for (let i = 0; i < this.modOptions + 1; i++) {
      options.push(
        <option key={i} value={i}>
          {this.getModOptionDisplay(i)}
        </option>
      );
    }

    return options;
  }

  handleChangeName(characterName: string): void {
    this.setState({ character: { ...this.state.character, characterName } });
  }

  handlePlayerTypeChange(playerType: PlayerType): void {
    this.setState({ character: { ...this.state.character, playerType } });
  }

  handleInitiativeModChange(initiativeMod: number): void {
    this.setState({ character: { ...this.state.character, initiativeMod } });
  }

  handleAddCharacter(): void {
    this.props.handleAddCharacter(this.state.character);
    this.setState({
      character: {
        ...this.state.character,
        characterName: '',
        playerType: PlayerType.PC,
        initiativeMod: 0,
      },
    });
  }

  render() {
    const containerStyle: CSSProperties = {
      display: 'flex',
      flexDirection: 'row',
      height: '2.5rem',
      width: '100%',
    };

    return (
      <div style={{ width: '100%' }}>
        <div style={containerStyle}>
          <input
            value={this.state.character.characterName}
            placeholder="Character Name"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              this.handleChangeName(e.currentTarget.value)
            }
            style={{ width: '50%', padding: '8px' }}
          />
          <select
            value={this.state.character.playerType}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              this.handlePlayerTypeChange(Number(e.currentTarget.value))
            }
            style={{ width: '10%' }}
          >
            <option value={PlayerType.PC}>PC</option>
            <option value={PlayerType.NPC}>NPC</option>
          </select>
          <select
            value={this.state.character.initiativeMod}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              this.handleInitiativeModChange(Number(e.currentTarget.value))
            }
            style={{ width: '10%' }}
          >
            {this.renderModOptions()}
          </select>
          <button
            style={{ width: '30%' }}
            onClick={() => this.handleAddCharacter()}
            disabled={this.state.character.characterName.length === 0}
          >
            Add Character
          </button>
        </div>
      </div>
    );
  }
}
