import React from 'react'

const Notelist = ({ notesList }) => {

  return (
    <>
      <div className='text-2xl mt-5'>Notes List</div>
      <div className='flex flex-wrap justify-center items-start gap-3 my-3'>{notesList.map((note) => {
        return (
          <div key={note.id} className='shadow-xl p-3 rounded-xl bg-blue-100 w-[400px]'>
            <div>
              <p className='break-all'><span className='font-bold '>Title:</span>{note.title}</p>
              <p className='break-all'><span className='font-bold'>Description:</span>{note.desc}</p>
            </div>
            <div>
            </div>
          </div>
        )
      })}</div>
    </>
  )
}

export default Notelist