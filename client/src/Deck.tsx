import React, {useEffect, useState} from 'react';
import  createCards from './api/createCards';
import { useParams } from 'react-router-dom';
import getDeck from './api/getDeck';
import deleteCard from './api/deleteCard';
import './Deck.css';

function Deck() {
  const [deck, setDeck] = useState <TDeck | undefined>();
  const [cards, setCards] = useState <string []>([]);
  const [text, setText] = useState("");
  const { deckID } = useParams();
  //console.log(deckID)

  async function handleCreateDeck(e: React.FormEvent){
       e.preventDefault();
       const {cards: serverCards} = await createCards(deckID!, text);
       setCards(serverCards)
       setText("");
  }
 
  async function handleDeleteCard(index: number) {
    if(!deckID) return;
    const newDeck = await deleteCard(deckID, index)
   setCards(newDeck.cards);
  }
//getDeck


  useEffect(()=>{
     async function fetchDeck() {
     if (!deckID) return;
      const newDeck = await getDeck(deckID)
      setDeck(newDeck)
      setCards(newDeck.cards)
     }
     fetchDeck();
  }, [deckID])

  
  return (
<div className="Deck">
      <ul className="cards">
       {cards.map((card, index) => (
          <li key={index}>
            <button onClick={()=>handleDeleteCard(index)}>X</button>
            {card}
          
          </li>
          ))}
         
      </ul>
        <form onSubmit={handleCreateDeck}> 
        <label htmlFor='card-text'>Card Text</label>
        <input id="card-text"
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
         setText(e.target.value)
        }
        }
        />
        <button>Create Deck</button>
      </form>
  </div>
  
  )

}

export default Deck
