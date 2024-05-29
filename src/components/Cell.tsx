import { GridContext } from "@/context/GridContext";
import { useContext, useEffect, useState } from "react";

export default function Cell({
  value,
  x,
  y,
}: {
  value: number;
  x: number;
  y: number;
}) {
  const { cellGrid, setCellGrid } = useContext(GridContext);

  const [alive, setAlive] = useState(value ? true : false);

  const toggle = () => {
    setAlive(!alive);
    const newGrid = [...cellGrid];
    newGrid[y][x] = alive ? 0 : 1;
    setCellGrid(newGrid);
  };

  useEffect(() => {
    setAlive(value ? true : false);
  }, [value]);

  return (
    <button
      onClick={toggle}
      className={`m-2 flex justify-center items-center w-10 h-10 rounded-full border-4 border-gray-300 text-center ${
        alive ? "bg-green-300" : "bg-white"
      }`}
    />
  );
}
