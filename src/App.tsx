import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [seconds, setSeconds] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)
  const [hours, setHours] = useState<number>(0)

  const updateTime = () => {
    const time = new Date()
    setSeconds(time.getSeconds())
    setMinutes(time.getMinutes())
    setHours(time.getHours())
  }

  useEffect(() => {
    const handler = setInterval(() => {
      updateTime()
    }, 1000)
    return () => clearInterval(handler)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo">
          <div className="hide"/>
          <div className="second" style={{ transform: `rotate(${90 + 6 * seconds}deg)` }}>
            <div />
          </div>
          <div className="minute" style={{ transform: `rotate(${90 + 6 * minutes}deg)` }}>
            <div />
          </div>
          <div className="hour" style={{ transform: `rotate(${90 + 30 * hours}deg)` }}>
            <div />
          </div>
        </div>
        <p>
          {hours < 10 && '0'}{hours}:{minutes < 10 && '0'}{minutes}:{seconds < 10 && '0'}{seconds}
        </p>
      </header>
    </div>
  )
}

export default App
