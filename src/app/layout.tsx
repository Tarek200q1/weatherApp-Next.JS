'use client'
import { Provider } from "react-redux";
import { store } from "../store/store";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '../lib/fontawesome'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`m-0 p-0 ${geistSans.variable} ${geistMono.variable}`} >
      <Provider store={store}>
      {children}
    </Provider>
    
      </body>
    </html>
  );
}
