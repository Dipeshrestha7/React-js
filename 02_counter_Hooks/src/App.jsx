import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  //let counter = 15

  const addValue = ()=>{
    if(counter>19){
      counter =20;
      setCounter(counter);

    }else{
    counter = counter +1
    setCounter(counter)
    console.log("clicked",counter)
    }
  }

  const removeValue = () =>{
    if(counter<1){
      counter=0;
      setCounter(counter)
    }else{
      counter = counter -1
      setCounter(counter);
    }
    
  }

  return (
    <>

      <h1>Lets start React</h1>
      <h2>Counter Value :{counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Decrease Value</button>

    </>
  )
}

export default App
