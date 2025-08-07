// src/lib/game.ts

export const BOARD_SIZE = 8;
export const TILE_TYPES = 6;

export type Tile = {
  id: number;
  type: number;
};

export type Board = (Tile | null)[][];

export type Coords = {
  row: number;
  col: number;
};

let tileId = 0;

/**
 * Creates a new random tile.
 */
const createTile = (type?: number): Tile => {
  return {
    id: tileId++,
    type: type ?? Math.floor(Math.random() * TILE_TYPES),
  };
};

/**
 * Creates a new game board.
 */
export const createBoard = (): Board => {
  const board: Board = [];
  for (let row = 0; row < BOARD_SIZE; row++) {
    board[row] = [];
    for (let col = 0; col < BOARD_SIZE; col++) {
      board[row][col] = createTile();
    }
  }
  let matches = checkMatches(board);
  while (matches.length > 0) {
    board = removeMatches(board, matches);
    board = fillBoard(board);
    matches = checkMatches(board);
  }

  return board;
};

const areTilesEqual = (tile1: Tile, tile2: Tile) => {
  return tile1.type === tile2.type;
}

export const checkMatches = (board: Board): Coords[] => {
  const matches: Coords[] = [];

  // Check for horizontal matches
  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let col = 0; col < BOARD_SIZE - 2; col++) {
      const tile1 = board[row][col];
      const tile2 = board[row][col + 1];
      const tile3 = board[row][col + 2];
      if (tile1 && tile2 && tile3 && areTilesEqual(tile1, tile2) && areTilesEqual(tile2, tile3)) {
        matches.push({ row, col }, { row, col: col + 1 }, { row, col: col + 2 });
      }
    }
  }

  // Check for vertical matches
  for (let col = 0; col < BOARD_SIZE; col++) {
    for (let row = 0; row < BOARD_SIZE - 2; row++) {
      const tile1 = board[row][col];
      const tile2 = board[row + 1][col];
      const tile3 = board[row + 2][col];
      if (tile1 && tile2 && tile3 && areTilesEqual(tile1, tile2) && areTilesEqual(tile2, tile3)) {
        matches.push({ row, col }, { row: row + 1, col }, { row: row + 2, col });
      }
    }
  }

  return [...new Set(matches)];
};

export const swapTiles = (board: Board, from: Coords, to: Coords): Board => {
  const newBoard = [...board];
  const temp = newBoard[from.row][from.col];
  newBoard[from.row][from.col] = newBoard[to.row][to.col];
  newBoard[to.row][to.col] = temp;
  return newBoard;
}

export const getScore = (matches: Coords[]): number => {
    return matches.length * 10;
}

export const removeMatches = (board: Board, matches: Coords[]): Board => {
  const newBoard = [...board];
  matches.forEach(match => {
    newBoard[match.row][match.col] = null;
  });
  return newBoard;
}

export const fillBoard = (board: Board): Board => {
  const newBoard = [...board];
  // Drop tiles down
  for (let col = 0; col < BOARD_SIZE; col++) {
    let emptyRow = BOARD_SIZE - 1;
    for (let row = BOARD_SIZE - 1; row >= 0; row--) {
      if (newBoard[row][col]) {
        if (emptyRow !== row) {
          newBoard[emptyRow][col] = newBoard[row][col];
          newBoard[row][col] = null;
        }
        emptyRow--;
      }
    }
  }

  // Fill empty spaces
  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let col = 0; col < BOARD_SIZE; col++) {
      if (!newBoard[row][col]) {
        newBoard[row][col] = createTile();
      }
    }
  }

  return newBoard;
}
