'use client'
import {GridContext, initGrid} from "@/context/GridContext";
import { IconButton } from "@mui/material";
import { useContext } from "react";
import ChangeRows from "./ChangeRows";
import ChangeCols from "./ChangeCols";
import RandomSeed from "./RandomSeed";

export default function Footer() {
    return (
        <footer className="w-full h-1/12 flex flex-col justify-center items-center h-24">
            <div className="w-full flex flex-row justify-center items-center">
                <ChangeRows />
                <ChangeCols />
                <RandomSeed />
            </div>
            <p className="text-sm text-center">
                &copy; 2024 Game of Life
            </p>
        </footer>
    )
}