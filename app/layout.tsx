
"use client"
import { ThemeProvider } from "@mui/material";
import { Nunito, Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import theme from "./theme";


const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  weight: ["200", "300", "400", "500", "600", "700"],
});
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto-sans",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/computer_1.png" type="image/png" />
      </head>
      <body className={`${nunito.variable} ${roboto.variable}`}>
       
           <ThemeProvider theme={theme}>
          <Header />
          {children}
        </ThemeProvider>
        
       
      </body>
    </html>
  );
}
