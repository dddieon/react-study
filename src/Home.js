import React from "react"
import { useLocation } from "react-router-dom"

const Home = () => {
    const location = useLocation()
    console.log(location)
    return (
        <div>
            <h1>홈</h1>
            <p>이곳은 홈이에요. 가장 먼저 보여지는 페이지죠.</p>
            <h2>찐과제로 출력 1 : {location.pathname}</h2>
        </div>
    )
}

export default Home
