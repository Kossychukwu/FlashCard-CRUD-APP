import React, { ReactNode, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import createDecks from './api/createDecks';
import deleteDeck from './api/deleteDeck';
import getDecks from './api/getDecks';
import { TDeck } from './api/getDecks';
import './App.css'


function App() {
  const [decks, setDecks] = useState <TDeck[]>([]);
  const [title, setTitle] = useState("");

  async function handleCreateDeck (e: React.FormEvent){
       e.preventDefault();
       const deck = await createDecks(title)
       setDecks([...decks, deck])
       setTitle("")
  }
 
//getDeck
  useEffect(()=>{
     async function fetchDecks() {
    
      const newDecks = await getDecks()

      setDecks(newDecks)

     }
     fetchDecks();
    
  }, [])

  async function handleDelete(deckID: string) {
     await deleteDeck(deckID);
   setDecks(decks.filter((deck)=> deck._id !== deckID));
  }

  
  return (
    <div className="App">
      <ul className="decks">
        {decks.map((deck) => (
          <li key={deck._id}>
            <button onClick={()=>handleDelete(deck._id)}>X</button>
          <Link to={`decks/${deck._id}`}>{deck.title}</Link>
          
          </li>
          ))}
         
      </ul>
      <form onSubmit={handleCreateDeck}>
        <label htmlFor='deck-title'>Deck Title</label>
        <input id="deck-title"
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setTitle(e.target.value)
        }
        }
        />
        <button>Create Deck</button>
      </form>
    </div>
  )
  }
export default App;