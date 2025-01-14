import { NullAblePlayer } from '../types';

export const createNullBoard = () => Array(3).fill(Array(3).fill(null));

export const checkWinner = (board: NullAblePlayer[][]): boolean | 'Draw' => {
    return board[0][0] === 'X' ? 'Draw' : board[0][1] === 'X';
};

export const cloneBoard = (board: NullAblePlayer[][]) =>
    board.map((row) => [...row]);
