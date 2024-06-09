import React, { useState } from 'react';
import './styles.css';

function TicTacToe() {
    const [gameBoard, setGameBoard] = useState(Array(9).fill(''));
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [gameActive, setGameActive] = useState(true);

    const handleBoxClick = (index) => {
        if (gameBoard[index] === '' && gameActive) {
            const newBoard = [...gameBoard];
            newBoard[index] = currentPlayer;
            setGameBoard(newBoard);

            if (checkWinner(newBoard)) {
                setGameActive(false);
                setMessage(`🎉🎉 Player ${currentPlayer} wins! 🎉🎉`);
            } else if (newBoard.every(cell => cell !== '')) {
                setGameActive(false);
                setMessage("It's a draw!");
            } else {
                setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
                setMessage(`Player ${currentPlayer === 'X' ? 'O' : 'X'}'s turn`);
            }
        }
    };

    const checkWinner = (board) => {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        return winPatterns.some(pattern =>
            pattern.every(index => board[index] === currentPlayer)
        );
    };

    const restartGame = () => {
        setGameBoard(Array(9).fill(''));
        setCurrentPlayer('X');
        setGameActive(true);
        setMessage(`Player X's turn`);
    };

    const renderSquare = (index) => {
        return (
            <button className="box" onClick={() => handleBoxClick(index)}>
                {gameBoard[index]}
            </button>
        );
    };

    const [message, setMessage] = useState(`Player X's turn`);

    return (
        <div className="body">
            <div className="page">
                <div className="container">
                    {Array.from({ length: 9 }, (_, i) => renderSquare(i))}
                </div>
                <div className="popup">
                    <p className="message">{message}</p>
                    <button className="btn" id="new_game" onClick={restartGame}>New Game</button>
                </div>
            </div>
        </div>
    );
}

export default TicTacToe;
