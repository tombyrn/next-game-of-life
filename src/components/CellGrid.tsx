'use client'
import { useContext, useState } from "react"
import Cell from "@/components/Cell";
import useInterval from "@/hooks/useInterval";
import { GridContext, initGrid } from "@/context/GridContext";

/**
 * @param grid: number[][] 
 * @param x: number
 * @param y: number
 * @returns: number - count of all alive surrounding neighbors
 */
const findNeighbors = (grid: number[][], x: number, y: number) => {
    let neighbors = 0;
    for(let i = x - 1; i <= x + 1; i++) {
        for(let j = y - 1; j <= y + 1; j++) {
            if(i >= 0 && i < grid.length && j >= 0 && j < grid[i].length) {
                if((i !== x || j !== y) && (grid[i][j] === 1)) {
                    neighbors += grid[i][j];
                }
            }
        }
    }
    return neighbors;
}

export default function CellGrid() {

    const {cellGrid, setCellGrid} = useContext(GridContext);

    useInterval(() => {
        let grid = [...cellGrid];

        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[i].length; j++) {
                let currentCell = grid[i][j];
                let neighbors = findNeighbors(grid, i, j);
                
                if(currentCell) {
                    if(neighbors < 2 || neighbors > 3) {
                        grid[i][j] = 0;
                    }
                }
                else {
                    if(neighbors === 3) {
                        grid[i][j] = 1;
                    }
                }
            }
        }

        setCellGrid(grid);
    }, 5000)


    return (
        <div className="mb-32 w-fit flex flex-col justify-center items-center lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
            {cellGrid.map((row, rowIndex) => {
                return (
                    <div key={rowIndex} className="flex flex-row">
                        {row.map((cell, cellIndex) => {
                            return (
                            <Cell key={cellIndex} value={cell} x={cellIndex} y={rowIndex}/>
                            )
                        })}
                    </div>
                )
            })}
            
        </div>
    )
}