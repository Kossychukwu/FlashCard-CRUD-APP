import React from 'react'
import { APP_URL } from './config';

async function deleteDeck(deckID: string) {
 await fetch(`${APP_URL}/decks/${deckID}`, {
        method: 'DELETE'
});
}
export default deleteDeck;