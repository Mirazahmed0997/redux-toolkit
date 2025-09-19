
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './state/feature/Counter/CounterSlice'
import type { RootState } from './state/store'
import { useAppDispatch, useAppSelector } from './state/hook'

function App() {

  const disPatch : any=useAppDispatch()
  const {count}= useAppSelector((state : RootState)=> state.counter)
  const handleIncrement=()=>
  {
    disPatch(increment())
  }
  const handleDecrement=()=>
  {
    disPatch(decrement())
  }
 
  return (
    <>
      <button onClick={handleIncrement}>Increament</button>
      <div>{count}</div>
      <button onClick={handleDecrement}>Decreament</button>
    </>
  )
}

export default App
