import { GridContext } from "@/context/GridContext";
import { IconButton } from "@mui/material";
import { useContext } from "react";

export default function RandomSeed() {
    const {cellGrid, setCellGrid} = useContext(GridContext);

    const randomize = () => {
        let grid = [...cellGrid];
        for(let i = 0; i < grid.length; i++) {
            let row = grid[i];
            for(let j = 0; j < row.length; j++)
                row[j] = Math.round(Math.random())
                
        }
        setCellGrid(grid);
    }

    return (
        <IconButton onClick={randomize} title="Random Seed">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
        </IconButton>
    )
}