import React from 'react'
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const NotesApp = () => {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} flex flex-col justify-center items-center p-5`}
    >
      <h1 className="text-4xl font-bold mt-5 bg-green-800 text-white">WELCOME TO THE NOTES APP !!</h1>
    </div>
  )
}

export default NotesApp