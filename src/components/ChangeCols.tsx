import { GridContext, initGrid } from "@/context/GridContext";
import { IconButton, Typography } from "@mui/material";
import { useContext } from "react";

export default function ChangeCols() {
  const { rows, cols, setCols, cellGrid, setCellGrid } =
    useContext(GridContext);

  const inc = () => {
    setCols(cols + 1);
    setCellGrid(initGrid(rows, cols + 1, cellGrid));
  };
  const dec = () => {
    setCols(cols - 1);
    setCellGrid(initGrid(rows, cols - 1, cellGrid));
  };

  return (
    <>
      <IconButton onClick={inc} title="Increase Rows">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </IconButton>
      <Typography variant="overline">Cols</Typography>
      <IconButton onClick={dec} title="Decrease Rows">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </IconButton>
    </>
  );
}
