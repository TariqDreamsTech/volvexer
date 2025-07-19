import React, { useState, useEffect, useCallback, useMemo } from 'react';

function AnimatedServicesSection() {
    const [board, setBoard] = useState(initializeBoard());
    const [currentPlayer, setCurrentPlayer] = useState('white');
    const [gameStatus, setGameStatus] = useState('playing');
    const [currentService, setCurrentService] = useState(null);
    const [showServiceAnimation, setShowServiceAnimation] = useState(false);
    const [isAutoPlaying] = useState(true);

    // Service mapping for each piece
    const pieceServices = useMemo(() => ({
        '♔': { name: 'Strategic Planning', icon: 'fas fa-chess', color: '#A855F7' },
        '♚': { name: 'Strategic Planning', icon: 'fas fa-chess', color: '#A855F7' },
        '♕': { name: 'Change Management', icon: 'fas fa-exchange-alt', color: '#7C3AED' },
        '♛': { name: 'Change Management', icon: 'fas fa-exchange-alt', color: '#7C3AED' },
        '♗': { name: 'Digital Transformation', icon: 'fas fa-sync', color: '#6D28D9' },
        '♝': { name: 'Digital Transformation', icon: 'fas fa-sync', color: '#6D28D9' },
        '♘': { name: 'Process Optimization', icon: 'fas fa-stream', color: '#5B21B6' },
        '♞': { name: 'Process Optimization', icon: 'fas fa-stream', color: '#5B21B6' },
        '♖': { name: 'Quality Assurance', icon: 'fas fa-check-double', color: '#4C1D95' },
        '♜': { name: 'Quality Assurance', icon: 'fas fa-check-double', color: '#4C1D95' },
        '♙': { name: 'AI Engineering', icon: 'fas fa-robot', color: '#8B5CF6' },
        '♟': { name: 'AI Engineering', icon: 'fas fa-robot', color: '#8B5CF6' }
    }), []);

    function initializeBoard() {
        const initialBoard = Array(8).fill(null).map(() => Array(8).fill(null));

        // Set up black pieces (top)
        initialBoard[0] = ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'];
        initialBoard[1] = ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'];

        // Set up white pieces (bottom)
        initialBoard[6] = ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'];
        initialBoard[7] = ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'];

        return initialBoard;
    }

    function getPieceColor(piece) {
        if (!piece) return null;
        const blackPieces = ['♜', '♞', '♝', '♛', '♚', '♟'];
        return blackPieces.includes(piece) ? 'black' : 'white';
    }

    const isValidMove = useCallback((fromRow, fromCol, toRow, toCol, piece) => {
        if (!piece) return false;

        const pieceColor = getPieceColor(piece);
        const targetPiece = board[toRow][toCol];
        const targetColor = getPieceColor(targetPiece);

        // Can't capture your own piece
        if (targetColor === pieceColor) return false;

        // Basic movement validation (simplified)
        const rowDiff = Math.abs(toRow - fromRow);
        const colDiff = Math.abs(toCol - fromCol);

        switch (piece) {
            case '♔': // White King
            case '♚': // Black King
                return rowDiff <= 1 && colDiff <= 1;

            case '♕': // White Queen
            case '♛': // Black Queen
                return rowDiff === 0 || colDiff === 0 || rowDiff === colDiff;

            case '♖': // White Rook
            case '♜': // Black Rook
                return rowDiff === 0 || colDiff === 0;

            case '♗': // White Bishop
            case '♝': // Black Bishop
                return rowDiff === colDiff;

            case '♘': // White Knight
            case '♞': // Black Knight
                return (rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2);

            case '♙': // White Pawn
                if (colDiff === 0 && !targetPiece) {
                    return fromRow === 6 ? rowDiff <= 2 : rowDiff === 1;
                }
                if (colDiff === 1 && rowDiff === 1 && targetPiece) {
                    return true;
                }
                return false;

            case '♟': // Black Pawn
                if (colDiff === 0 && !targetPiece) {
                    return fromRow === 1 ? rowDiff <= 2 : rowDiff === 1;
                }
                if (colDiff === 1 && rowDiff === 1 && targetPiece) {
                    return true;
                }
                return false;

            default:
                return false;
        }
    }, [board]);

    const triggerServiceAnimation = useCallback((piece) => {
        const service = pieceServices[piece];
        if (service) {
            setCurrentService(service);
            setShowServiceAnimation(true);

            // Hide animation after 3 seconds
            setTimeout(() => {
                setShowServiceAnimation(false);
                setCurrentService(null);
            }, 3000);
        }
    }, [pieceServices]);

    const getValidMoves = useCallback((piece, row, col) => {
        const validMoves = [];
        for (let toRow = 0; toRow < 8; toRow++) {
            for (let toCol = 0; toCol < 8; toCol++) {
                if (isValidMove(row, col, toRow, toCol, piece)) {
                    validMoves.push({ row: toRow, col: toCol });
                }
            }
        }
        return validMoves;
    }, [isValidMove]);

    const getAllValidMovesForPlayer = useCallback((player) => {
        const validMoves = [];
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const piece = board[row][col];
                if (piece && getPieceColor(piece) === player) {
                    const moves = getValidMoves(piece, row, col);
                    moves.forEach(move => {
                        validMoves.push({
                            from: { row, col },
                            to: move,
                            piece: piece
                        });
                    });
                }
            }
        }
        return validMoves;
    }, [board, getValidMoves]);

    const makeRandomMove = useCallback(() => {
        if (gameStatus !== 'playing') return;

        const validMoves = getAllValidMovesForPlayer(currentPlayer);
        if (validMoves.length === 0) {
            setGameStatus('stalemate');
            return;
        }

        // Select a random move
        const randomMove = validMoves[Math.floor(Math.random() * validMoves.length)];
        const { from, to, piece } = randomMove;

        // Show service animation for the moving piece
        triggerServiceAnimation(piece);

        // Make the move
        const newBoard = board.map(row => [...row]);
        newBoard[to.row][to.col] = piece;
        newBoard[from.row][from.col] = null;

        setBoard(newBoard);
        setCurrentPlayer(currentPlayer === 'white' ? 'black' : 'white');

        // Check for checkmate or stalemate (simplified)
        if (isCheckmate(newBoard, currentPlayer === 'white' ? 'black' : 'white')) {
            setGameStatus('checkmate');
        }
    }, [board, currentPlayer, gameStatus, getAllValidMovesForPlayer, triggerServiceAnimation]);

    // Auto-play effect
    useEffect(() => {
        if (isAutoPlaying && gameStatus === 'playing') {
            const timer = setTimeout(() => {
                makeRandomMove();
            }, 2000); // Move every 2 seconds

            return () => clearTimeout(timer);
        }
    }, [board, currentPlayer, gameStatus, isAutoPlaying, makeRandomMove]);



    function isCheckmate(board, player) {
        // Simplified checkmate detection
        const kingPiece = player === 'white' ? '♔' : '♚';
        let kingFound = false;

        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                if (board[row][col] === kingPiece) {
                    kingFound = true;
                    break;
                }
            }
        }

        return !kingFound;
    }



    return (
        <section className="animated-services-section">
            <div className="container">


                <div className="chess-game-container">


                    {/* Service Animation Overlay */}
                    {showServiceAnimation && currentService && (
                        <div className="service-animation-overlay">
                            <div className="service-animation-content">
                                <i className={currentService.icon} style={{ color: currentService.color }}></i>
                                <h3>{currentService.name}</h3>
                            </div>
                        </div>
                    )}

                    <div className="chess-board-container">
                        <div className="chess-board-grid">
                            {board.map((row, rowIndex) =>
                                row.map((piece, colIndex) => {
                                    const isWhiteSquare = (rowIndex + colIndex) % 2 === 0;
                                    const pieceColor = getPieceColor(piece);

                                    return (
                                        <div
                                            key={`${rowIndex}-${colIndex}`}
                                            className={`chess-square ${isWhiteSquare ? 'white-square' : 'black-square'}`}
                                        >
                                            {piece && (
                                                <div className={`chess-piece ${pieceColor}-piece`}>
                                                    {piece}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}

export default AnimatedServicesSection; 