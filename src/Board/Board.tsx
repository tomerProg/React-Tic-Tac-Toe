import { FunctionComponent, useState } from 'react';
import { GameResult, NullAblePlayer } from '../types';
import './Board.css';
import { checkWinner, cloneBoard, createNullBoard } from './utils';
import Cell from '../Cell/Cell';

const Board: FunctionComponent = () => {
    const [isPlayerX, setIsPlayerX] = useState<boolean>(true);
    const [winner, setWinner] = useState<GameResult>(null);
    const [board, setBoard] = useState<NullAblePlayer[][]>(createNullBoard());

    const playTurn = (row: number, col: number) => {
        if (!winner) {
            const player = isPlayerX ? 'X' : 'O';
            const newBoard = cloneBoard(board);
            newBoard[row][col] = player;
            setBoard(newBoard);
            console.log(newBoard);
            const isPlayerWin = checkWinner(newBoard);

            if (!isPlayerWin) {
                setIsPlayerX(!isPlayerX);
            } else {
                setWinner(isPlayerWin === 'Draw' ? 'Draw' : player);
            }
        }
    };

    const resetGame = () => {
        setBoard(createNullBoard());
        setIsPlayerX(true);
        setWinner(null);
    };

    return (
        <div id='tic_tac_toe_root'>
            <section id='tic_tac_toe_app_bar'>
                <h1 className='app_bar_h1'>
                    {winner === null
                        ? `Player's '${isPlayerX ? 'X' : 'O'}' turn`
                        : winner === 'Draw'
                        ? winner
                        : `Player '${winner}' Wins!`}
                </h1>
            </section>

            <div id='board'>
                {board.map((boardRow, row) => (
                    <div className='board_row' key={`board_row_${row}`}>
                        {boardRow.map((cellValue, col) => (
                            <Cell
                                key={`board_cell_${row}_${col}`}
                                className='cell'
                                value={cellValue}
                                setCellValue={() => playTurn(row, col)}
                            />
                        ))}
                    </div>
                ))}
            </div>

            <section id='tic_tac_toe_footer'>
                <button id='reset_game_btn' onClick={resetGame}>
                    Reset Game
                </button>
            </section>
        </div>
    );
};

export default Board;
