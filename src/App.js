import React, { useState } from "react"

function App() {
    const [result, setResult] = useState(0)
    const up = () => {
        setResult(result + 1)
    }
    const down = () => {
        setResult(result - 1)
    }
    return (
        <div className="App">
            <h1>결과값 = {result}</h1>
            <input type="button" onClick={up} value="더하기 +"></input>
            <input type="button" onClick={down} value="빼기 -"></input>
        </div>
    )
}

export default App
