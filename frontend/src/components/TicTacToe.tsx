import { useCallback, useEffect, useRef, useState } from "react";

type Cell = "X" | "O" | null;
type GameStatus = "playing" | "x-win" | "o-win" | "draw";

const WINS: readonly [number, number, number][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function outcome(board: Cell[]): GameStatus | null {
  for (const [a, b, c] of WINS) {
    const p = board[a];
    if (p !== null && p === board[b] && p === board[c]) {
      return p === "X" ? "x-win" : "o-win";
    }
  }
  if (board.every((c) => c !== null)) return "draw";
  return null;
}

function pickBotMove(board: Cell[]): number {
  const empty = board
    .map((c, i) => (c === null ? i : -1))
    .filter((i) => i >= 0);

  const winningMove = (player: "X" | "O"): number | null => {
    for (const i of empty) {
      const next = [...board];
      next[i] = player;
      const o = outcome(next);
      if (o === "x-win" && player === "X") return i;
      if (o === "o-win" && player === "O") return i;
    }
    return null;
  };

  const win = winningMove("O");
  if (win !== null) return win;

  const block = winningMove("X");
  if (block !== null) return block;

  if (empty.includes(4)) return 4;

  const corners = [0, 2, 6, 8].filter((i) => empty.includes(i));
  if (corners.length > 0) {
    return corners[Math.floor(Math.random() * corners.length)];
  }

  return empty[Math.floor(Math.random() * empty.length)];
}

const initialBoard = (): Cell[] => Array<Cell>(9).fill(null);

export default function TicTacToe() {
  const [board, setBoard] = useState<Cell[]>(initialBoard);
  const [status, setStatus] = useState<GameStatus>("playing");
  const [turn, setTurn] = useState<"user" | "bot">("user");
  const botTimerRef = useRef<number | null>(null);

  const reset = useCallback(() => {
    if (botTimerRef.current !== null) {
      window.clearTimeout(botTimerRef.current);
      botTimerRef.current = null;
    }
    setBoard(initialBoard());
    setStatus("playing");
    setTurn("user");
  }, []);

  useEffect(() => {
    return () => {
      if (botTimerRef.current !== null) window.clearTimeout(botTimerRef.current);
    };
  }, []);

  function handleCellClick(index: number) {
    if (status !== "playing" || turn !== "user") return;
    if (board[index] !== null) return;

    const next = [...board];
    next[index] = "X";
    setBoard(next);

    const userResult = outcome(next);
    if (userResult) {
      setStatus(userResult);
      return;
    }

    setTurn("bot");
    botTimerRef.current = window.setTimeout(() => {
      botTimerRef.current = null;
      setBoard((prev) => {
        const idx = pickBotMove(prev);
        const afterBot = [...prev];
        afterBot[idx] = "O";
        const botResult = outcome(afterBot);
        if (botResult) setStatus(botResult);
        else setTurn("user");
        return afterBot;
      });
    }, 350);
  }

  const message =
    status === "x-win"
      ? "You win"
      : status === "o-win"
        ? "Bot wins"
        : status === "draw"
          ? "Draw"
          : turn === "user"
            ? "Your turn"
            : "Bot thinking…";

  return (
    <div className="flex flex-col items-end gap-4 w-full max-w-[280px] ml-auto">
      <div className="flex items-center justify-between w-full gap-3">
        <p className="text-sm text-text/50">Tic tac toe</p>
        <button
          type="button"
          onClick={reset}
          className="text-xs px-2.5 py-1 rounded-lg border border-text/20 hover:border-emerald-600 transition-colors duration-300 text-text/80"
        >
          New game
        </button>
      </div>

      <div
        className="grid grid-cols-3 gap-2 p-3 rounded-2xl border border-text/15 bg-text/3"
        role="grid"
        aria-label="Tic tac toe board"
      >
        {board.map((cell, i) => (
          <button
            key={i}
            type="button"
            role="gridcell"
            disabled={cell !== null || status !== "playing" || turn !== "user"}
            onClick={() => handleCellClick(i)}
            className="size-[72px] sm:size-20 rounded-xl border border-text/20 text-2xl font-semibold text-text hover:border-emerald-600 disabled:hover:border-text/20 disabled:cursor-default transition-colors duration-300 flex items-center justify-center bg-bg/80"
          >
            {cell}
          </button>
        ))}
      </div>

      <p className="text-xs text-text/45 min-h-4 w-full text-right">{message}</p>
    </div>
  );
}
