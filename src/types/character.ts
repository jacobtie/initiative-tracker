import PlayerType from './playertype';

export default interface ICharacter {
  characterName: string;
  playerType: PlayerType;
  initiativeMod: number;
}
