import './App.css'
import { useEffect, useState } from 'react'
import welcomeMessages from './info.json'
import { CSSTransition } from 'react-transition-group'
import MainInfo1 from './components/maininfo1'

function App() {
  const [messages, setMessages] = useState([])
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  useEffect(() => {
    setMessages(welcomeMessages)

    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => {
        return (prevIndex + 1) % messages.length
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [messages.length])

  return (
    <div className="App">
      <header className="header">
        <img src={process.env.PUBLIC_URL + '/로고검정.png'} alt="로고 이미지" />
        <div className="iconbox">
          <p>@@</p>
          <p>##</p>
          <p>$$</p>
        </div>
      </header>
      <div className="infobox">
        <div>
          <h3>{messages[currentMessageIndex]?.title}</h3>
          <p>{messages[currentMessageIndex]?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default App
