import { useState } from 'react'
import CounterButton from './components/CounterButton'
import CounterDisplay from './components/CounterDisplay'

const App:React.FC = () =>{
  const [count, setCount] = useState<number>(0);

  const incrementCount = () =>{
    setCount(prevCount => prevCount+1);
  };

  return(
    <div className='App'>
      <h1>Counter App</h1>
      <CounterDisplay count={count} />
      <CounterButton onIncrement = {incrementCount} />
    </div>
  );
}

export default App
