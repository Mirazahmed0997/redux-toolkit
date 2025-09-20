
import './App.css'
import { decrement, increment } from './state/feature/Counter/CounterSlice'
import type { RootState } from './state/store'
import { useAppDispatch, useAppSelector } from './state/hook'

function App() {

  const disPatch : any=useAppDispatch()
  const {count}= useAppSelector((state : RootState)=> state.counter)
  const handleIncrement=(amount:number)=>
  {
    disPatch(increment({amount:amount}))
  }
  const handleDecrement=(amount:number)=>
  {
    disPatch(decrement({amount:amount}))
  }
 
  return (
    <>
      <button onClick={()=>handleIncrement(1)}>Increament</button>
      <div>{count}</div>
      <button onClick={()=>handleDecrement(5)}>Decreament</button>
    </>
  )
}

export default App
