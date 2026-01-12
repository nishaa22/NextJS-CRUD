import React, { useState } from 'react'
import { Geist, Geist_Mono } from "next/font/google";
import Notelist from './notelist';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const NotesApp = () => {
  const [notes, setNotes] = useState({ id: "", title: "", desc: "" })
  const [notesList, setNotesList] = useState([])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNotes((prev) => {
      return {
        ...prev,
        id: Math.random() * 100,
        created_at: new Date(Date.now()),
        [name]: value
      }
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setNotesList((prev) => [...prev, notes])
    setNotes({ id: "", title: "", desc: "" })
  }
  console.log(notes, notesList)
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} flex flex-col justify-center items-center p-5`}
    >
      <h1 className="text-4xl font-bold mt-5 bg-green-800 text-white">WELCOME TO THE NOTES APP !!</h1>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-2 mt-5'>
        <input value={notes.title} name="title" onChange={(e) => handleChange(e)} className='px-2 border border-black rounded-md w-[500px]' placeholder='Enter the title' required />
        <textarea value={notes.desc} name="desc" onChange={(e) => handleChange(e)} className='px-2 border border-black rounded-md w-[500px]' placeholder='Enter the description' required />
        <button className='bg-green-800 text-white px-5 w-fit py-2 rounded-xl' type="submit">add</button>
      </form>
      {notesList.length > 0 &&
        <Notelist notesList={notesList} />}
    </div>
  )
}

export default NotesApp