"use client";
import { Typography } from "@mui/material";
import ChangeRows from "@/components/ChangeRows";
import ChangeCols from "@/components/ChangeCols";
import RandomSeed from "@/components/RandomSeed";
import DelaySlider from "@/components/DelaySlider";

export default function Footer() {
  return (
    <footer className="w-full h-1/12 flex flex-col justify-center items-center h-24">
      <div className="w-full flex flex-row justify-center items-center">
        <ChangeRows />
        <ChangeCols />
        <RandomSeed />
        <DelaySlider />
      </div>
      <Typography className="text-sm text-center">
        &copy; 2024 Game of Life
      </Typography>
    </footer>
  );
}
