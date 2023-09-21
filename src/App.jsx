import { useState, useEffect } from 'react'
import SparklesIcon from './assets/sparkles.svg'
import Challenges from './static/challenges.json'
import Logo from './static/logoRemoved.png'
import Party from './static/party.jpg'
import './App.css'

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [challenges, setChallenges] = useState([])
  const [currentChallenge, setCurrentChallenge] = useState("")
  const [counter, setCounter] = useState(0)

  const getNextChallenge = () => {
    if (counter >= Challenges.length) {
      return;
    }

    const randomIndex = Math.floor(Math.random() * challenges.length);
    setCurrentChallenge(challenges[randomIndex])
    setChallenges(challenges.filter((item, index) => index !== randomIndex));
    setCounter(counter + 1);
  }

  const startGame = () => {
    getNextChallenge();
    setIsGameStarted(true)
  }

  useEffect(() => {
    setChallenges(Challenges)
  }, [])


  return (
    <>
      {!isGameStarted ?
        <div className="menu">
          <div className="title">
            <img src={SparklesIcon} alt="" />
            <h1>Sparkling Sips</h1>
            <img src={SparklesIcon} alt="" />
          </div>
          <img className="logo" src={Logo} alt="" />
          <button onClick={startGame}>Start game</button>
        </div>
        :
        <div className="questions">
          <h3>{counter} / {Challenges.length}</h3>
          <img className="logo" src={Party} alt="" />
          <p>{currentChallenge}</p>
          <button onClick={getNextChallenge}>Next challenge</button>
        </div>}
    </>
  )
}

export default App
