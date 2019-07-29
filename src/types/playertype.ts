enum PlayerType {
  PC,
  NPC,
}

export default PlayerType;

export const getStringFromPlayerType = (playerType: PlayerType): string => {
  let retVal;
  if (playerType === PlayerType.PC) {
    retVal = 'PC';
  } else {
    retVal = 'NPC';
  }
  return retVal;
};
