
import React from 'react'
import { APP_URL } from './config';
import { TDeck } from './getDecks';

 async function createCards(deckID: string, text: string): Promise<TDeck> {
  
 const response = await fetch(`${APP_URL}/decks/${deckID}/cards`,{
        method: 'POST',
        body: JSON.stringify({
          text,
        }),
        headers:{
          "Content-Type": "application/json",
        },
       })
    return  await response.json()
}

export default createCards;