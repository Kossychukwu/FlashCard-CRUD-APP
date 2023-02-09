import React from 'react'
import { APP_URL } from './config';
export type TDeck = {
  title: string;
  _id: string;
};

async function getDecks():Promise <TDeck[]> {
   const response = await fetch(`${APP_URL}/decks`);
      return response.json()
}

export default getDecks;