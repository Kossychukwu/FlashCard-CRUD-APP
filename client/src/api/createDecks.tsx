import React from 'react'
import { APP_URL } from './config';

async function createDecks(title: string) {
  
  const response = await fetch(`${APP_URL}/decks`, {
        method: 'POST',
        body: JSON.stringify({
          title,
        }),
        headers:{
          "Content-Type": "application/json",
        },
       })
       return response.json()
}

export default createDecks;