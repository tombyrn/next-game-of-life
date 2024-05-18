import { GridContext, initGrid } from "@/context/GridContext";
import { IconButton, Typography } from "@mui/material";
import { useContext } from "react";

export default function ChangeRows() {
    const {rows, setRows, cols, cellGrid, setCellGrid} = useContext(GridContext);

    const inc = () => {
        setRows(rows+1); setCellGrid(initGrid(rows+1, cols, cellGrid))
    }
    const dec = () => {
        setRows(rows-1); setCellGrid(initGrid(rows-1, cols, cellGrid))
    }

    return (<>
        <IconButton onClick={inc} title="Increase Rows">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
        </IconButton>
        <Typography variant="overline">Rows</Typography>
        <IconButton onClick={dec} title="Decrease Rows">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        </IconButton>
    </>)
}