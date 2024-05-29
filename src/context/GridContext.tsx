"use client";
import { Dispatch, SetStateAction, createContext, useState } from "react";

const DEFAULT_ROWS = 5;
const DEFAULT_COLS = 5;
const DEFAULT_DELAY = 5;

/**
 * initializes and returns a new grid of 1's and 0's
 * @param rows : number of new rows
 * @param cols : number of new cols
 * @param grid : optional grid to copy from
 * @returns : number[][]
 */
export const initGrid = (rows: number, cols: number, grid?: number[][]) => {
  let newGrid = [] as number[][];
  for (let i = 0; i < rows; i++) {
    newGrid.push([]);
    for (let j = 0; j < cols; j++) {
      newGrid[i].push(0);
    }
  }

  if (grid) {
    const minRows = Math.min(rows, grid.length);
    const minCols = Math.min(cols, grid[0].length);
    for (let i = 0; i < minRows; i++) {
      for (let j = 0; j < minCols; j++) {
        newGrid[i][j] = grid[i][j];
      }
    }
  }
  return newGrid;
};

export const GridContext = createContext({
  cellGrid: initGrid(DEFAULT_ROWS, DEFAULT_COLS),
  setCellGrid: {} as Dispatch<SetStateAction<number[][]>>,
  rows: DEFAULT_ROWS,
  setRows: {} as Dispatch<SetStateAction<number>>,
  cols: DEFAULT_COLS,
  setCols: {} as Dispatch<SetStateAction<number>>,
  delay: DEFAULT_DELAY,
  setDelay: {} as Dispatch<SetStateAction<number>>,
});

export default function GridProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [rows, setRows] = useState(DEFAULT_ROWS);
  const [cols, setCols] = useState(DEFAULT_COLS);
  const [delay, setDelay] = useState<number>(DEFAULT_DELAY);
  const [cellGrid, setCellGrid] = useState<number[][]>(initGrid(rows, cols));

  return (
    <GridContext.Provider
      value={{ cellGrid, setCellGrid, rows, setRows, cols, setCols, delay, setDelay }}
    >
      {children}
    </GridContext.Provider>
  );
}
