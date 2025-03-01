import { WINNER_COMBOS } from "../constants";
export const checkWinnerFrom = (boardToCheck) => {
  // check every winner combo to check who won
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] == boardToCheck[b] &&
      boardToCheck[a] == boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  return null;
};

export const checkEndGame = (newBoard) => {
  // check if there's an odds
  // not more empty spaces in the board
  return newBoard.every((square) => square != null);
};
