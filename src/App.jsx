import { useState } from "react"
import { CountContext } from "./contexts"
import { useContext } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CountContext.Provider value={count}>
      <Count count = {count} setCount = {setCount} />
    </CountContext.Provider>
    </>
  )
}

function Count({setCount}) {
  return <>
  <CountRenderer />
  <Button setCount = {setCount} />
  </>
}

function CountRenderer() {
  const count = useContext(CountContext);

  return <div>
  {count}
  </div>
}

function Button({setCount}) {
  const count = useContext(CountContext)
  return <>
  <button onClick={() => {
    setCount(count + 1)
  }}>Increase</button>
  <button onClick={() => {
    setCount(count - 1)
  }}>Decrease</button>
  </>
}

export default App
