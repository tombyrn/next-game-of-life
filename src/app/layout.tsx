import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import {ThemeProvider} from "@mui/material/styles";
import theme from "@/theme";
import GridProvider from "@/context/GridContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Game of Life",
  description: "Conway's Game of Life in TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <GridProvider>
              {children}
            </GridProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
    </html>
  );
}
