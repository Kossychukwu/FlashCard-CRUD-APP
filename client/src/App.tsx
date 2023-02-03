import React, { ReactNode, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

type TDeck = {
  title: string;
  _id: string;
}
function App() {
  const [decks, setDecks] = useState <TDeck[]>([]);
  const [title, setTitle] = useState("");

  async function handleCreateDeck (e: React.FormEvent){
       e.preventDefault();
       await fetch('http://localhost:5000/decks', {
        method: 'POST',
        body: JSON.stringify({
          title,
        }),
        headers:{
          "Content-Type": "application/json",
        },
       })
       setTitle("")
  }

  //mount

  useEffect(()=>{
     (async () => {
      const response = await fetch("http://localhost:5000/decks");
      const newDecks = await response.json()
      setDecks(newDecks)

     })();
    
  }, [])

  
  return (
    <div className="App">
      <ul className="decks">
        {decks.map((deck) => (
          <li key={deck._id}>{deck.title}</li>
          ))}
      </ul>
      <form onSubmit={handleCreateDeck}>
        <label htmlFor='deck-title'>Deck Title</label>
        <input id="deck-title"
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setTitle(e.target.value)
        }
        //TODO save what is typed
        }
        />
        <button>Create Deck</button>
      </form>
    </div>
  )
  }
export default App;