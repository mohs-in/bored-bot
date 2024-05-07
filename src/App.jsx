import './App.css'
import { useState } from 'react'


function App() {
  function getIdea() {
    fetch("https://www.boredapi.com/api/activity")
        .then(res => res.json())
        .then(data => {
            setIdea(prevIdea => data.activity);
            setTitle( "🦾 HappyBot🦿" );
        })
  }

  const [title, setTitle] = useState(`🤖 BoredBot 🤖`)
  const [idea, setIdea] = useState(`Find something to do`)

  return (
    <>
      <main>
        <h1 id="title">{title}</h1>
        <p id="idea" aria-live="polite">{idea}</p>
        <button id="get-activity" aria-label="Find a new activity." onClick={getIdea}>Click Me!</button>
      </main>
    </>
  )
}

export default App
