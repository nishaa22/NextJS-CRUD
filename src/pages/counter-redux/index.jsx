import { useAppSelector } from "@/hooks/reduxHooks"
import { useAppDispatch } from './../../hooks/reduxHooks';
import { decrement, increment, reset } from "@/redux/slices/counter";

const CounterRedux = () => {
  const count = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-cyan-50'>
      <h1 className='text-2xl font-bold underline mb-2'>Counter using Redux Toolkit</h1>
      <p>Count: {count}</p>
      <button className='cursor-pointer px-2 py-1 bg-black text-white rounded-md m-1' onClick={() => dispatch(increment())}>increase</button>
      <button className='cursor-pointer px-2 py-1 bg-black text-white rounded-md m-1' onClick={() => dispatch(decrement())}>decrease</button>
      <button className='cursor-pointer px-2 py-1 bg-black text-white rounded-md m-1' onClick={() => dispatch(reset())}>reset</button>
    </div>
  )
}

export default CounterRedux