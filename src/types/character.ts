import PlayerType from './playertype';

export default interface ICharacter {
  id: number;
  characterName: string;
  playerType: PlayerType;
  initiativeMod: number;
  score: number;
}
