import { NullAblePlayer } from '../types';

export const createNullBoard = () => Array(3).fill(Array(3).fill(null));

const isRowCellAreSame = (board: NullAblePlayer[][]) => (row: number) =>
    board[row][0] != null &&
    board[row][0] == board[row][1] &&
    board[row][1] == board[row][2];

const isColCellAreSame = (board: NullAblePlayer[][]) => (col: number) =>
    board[0][col] != null &&
    board[0][col] == board[1][col] &&
    board[1][col] == board[2][col];

export const checkWinner = (board: NullAblePlayer[][]): boolean | 'Draw' => {
    const isRowWinner = isRowCellAreSame(board);
    const isColWinner = isColCellAreSame(board);

    for (let index = 0; index < 3; index++) {
        if (isRowWinner(index) || isColWinner(index)) {
            return true;
        }
    }

    const isFirstDiagonalsWins =
        board[0][0] != null &&
        board[0][0] == board[1][1] &&
        board[1][1] == board[2][2];
    const isSecondDiagonalsWins =
        board[0][2] != null &&
        board[0][2] == board[1][1] &&
        board[1][1] == board[2][0];

    if (isFirstDiagonalsWins || isSecondDiagonalsWins) {
        return true;
    }

    return board.some((row) => row.some((cell) => cell === null))
        ? false
        : 'Draw';
};

export const cloneBoard = (board: NullAblePlayer[][]) =>
    board.map((row) => [...row]);
