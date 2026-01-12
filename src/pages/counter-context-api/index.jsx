import { CounterContext } from '@/context/Counter'
import React, { useContext } from 'react'

const Counter = () => {
  const { count, setCount } = useContext(CounterContext)
  console.log(count)
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-cyan-50'>
      <h1 className='text-2xl font-bold underline mb-2'>Counter using context API</h1>
      <p>Count: {count}</p>
      <button className='cursor-pointer px-2 py-1 bg-black text-white rounded-md m-1' onClick={() => setCount(count + 1)}>increase</button>
      <button className='cursor-pointer px-2 py-1 bg-black text-white rounded-md m-1' onClick={() => setCount(count - 1)}>decrease</button>
      <button className='cursor-pointer px-2 py-1 bg-black text-white rounded-md m-1' onClick={() => setCount(0)}>reset</button>
    </div>
  )
}

export default Counter