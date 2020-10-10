import React, { useState } from "react"

function App() {
    const [firstValue, setFirstValue] = useState("")
    const [secondValue, setSecondValue] = useState("")
    const [result, setResult] = useState("")
    const calculate = (event) => {
        event.preventDefault()
        const {
            target: { name },
        } = event
        console.log(name)
        if (name === "plus") {
            setResult(firstValue + secondValue)
            alert(firstValue + secondValue)
        }
        if (name === "minus") {
            setResult(firstValue - secondValue)
            alert(firstValue - secondValue)
        }
    }
    const onChange = (event) => {
        const {
            target: { value, name },
        } = event
        if (name === "firstText") {
            setFirstValue(Number(value))
        } else if (name === "secondText") {
            setSecondValue(Number(value))
        }
    }
    const submited = (event) => {
        event.preventDefault()
        alert(result)
    }
    return (
        <div className="App">
            <form onSubmit={submited}>
                <input
                    type="text"
                    value={firstValue}
                    name={"firstText"}
                    onChange={onChange}
                    required
                ></input>
                <input
                    type="text"
                    value={secondValue}
                    name={"secondText"}
                    onChange={onChange}
                    required
                ></input>
                <hr></hr>
                <button name="plus" onClick={calculate}>
                    +
                </button>
                <button name="minus" onClick={calculate}>
                    -
                </button>
            </form>
            <p>첫번째 값 : {firstValue}</p>
            <p>두번째 값 : {secondValue}</p>
            <h1>현재 결과 : {result}</h1>
        </div>
    )
}

export default App
