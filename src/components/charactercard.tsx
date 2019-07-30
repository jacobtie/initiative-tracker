import React, { Component, CSSProperties, KeyboardEvent } from 'react';
import ICharacter from '../types/character';
import { getStringFromPlayerType } from '../types/playertype';

interface ICharacterCardProps {
  character: ICharacter;
  setInitiative: (id: number, initiative: number) => void;
  removeCharacter: (id: number) => void;
  turn: boolean;
}

interface ICharacterCardState {
  newScore: string;
  editScore: boolean;
}

export default class CharacterCard extends Component<
  ICharacterCardProps,
  ICharacterCardState
> {
  constructor(props: ICharacterCardProps) {
    super(props);

    this.state = {
      newScore: String(this.props.character.score),
      editScore: false,
    };
  }

  inputRef = React.createRef<HTMLInputElement>();

  rollInitiative(id: number): void {
    const roll =
      Math.floor(Math.random() * 20 + 1) + this.props.character.initiativeMod;
    this.props.setInitiative(this.props.character.id, roll);
  }

  removeCharacter(id: number): void {
    this.props.removeCharacter(id);
  }

  handleKeyUp(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      this.changeScore();
    }
  }

  handleScoreChange(value: string): void {
    if (/^[0-9]*$/.test(value)) {
      console.log('We got here');
      this.setState({ newScore: value });
    }
  }

  changeScore(): void {
    this.props.setInitiative(
      this.props.character.id,
      Number(this.state.newScore)
    );
    this.toggleEdit();
  }

  toggleEdit(): void {
    this.setState({ editScore: !this.state.editScore }, () => {
      if (this.inputRef.current !== null) {
        this.inputRef.current.focus();
        this.setState({ newScore: String(this.props.character.score) });
      }
    });
  }

  render() {
    const { character, turn } = this.props;

    const containerStyle: CSSProperties = {
      margin: '15px',
      padding: '5px',
      backgroundColor: turn
        ? 'rgba(128, 0, 0, 0.5)'
        : 'rgba(255, 255, 255, 0.5)',
      width: '85%',
      height: '3.4rem',
      border: '2px solid black',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      color: turn ? 'white' : 'black',
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
          {this.state.editScore ? (
            <span>
              <input
                type="text"
                value={this.state.newScore}
                onChange={e => this.handleScoreChange(e.target.value)}
                onKeyUp={e => this.handleKeyUp(e)}
                onBlur={() => this.changeScore()}
                style={{ width: '20px' }}
                ref={this.inputRef}
              />
            </span>
          ) : (
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => this.toggleEdit()}
            >
              {character.score}
            </span>
          )}
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
