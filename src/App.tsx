
import { useDispatch } from 'react-redux'
import './App.css'
import { decrement, increment } from './state/feature/Counter/CounterSlice'

function App() {

  const disPatch : any=useDispatch()
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
      <div>0</div>
      <button onClick={handleDecrement}>Decreament</button>
    </>
  )
}

export default App
