import { GridContext } from "@/context/GridContext";
import { Slider, Typography } from "@mui/material";
import { useContext } from "react";

export default function DelaySlider() {
  const { delay, setDelay } = useContext(GridContext);

  return (
    <div className="m-2 p-1 w-40 flex flex-col justify-start">
      <Typography variant="body2">Delay (seconds)</Typography>
      <Slider
        className="w-4"
        min={1}
        max={20}
        marks
        valueLabelDisplay="auto"
        step={1}
        value={delay}
        onChange={(e) => setDelay(Number((e.target as HTMLInputElement).value))}
      />
    </div>
  );
}
