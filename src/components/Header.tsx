import { Typography } from "@mui/material";

export default function Header() {
  return (
    <div className="z-10 h-1/6 w-full max-w-5xl items-center justify-center text-center font-mono text-sm lg:flex">
      <Typography variant="h1" gutterBottom>
        Game of Life
      </Typography>
    </div>
  );
}
