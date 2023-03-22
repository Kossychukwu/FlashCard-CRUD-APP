import { APP_URL } from './config';
import { TDeck } from './getDecks';


async function getDeck(deckID: string): Promise<TDeck> {
   const response = await fetch(`${APP_URL}/decks/${deckID}`);
      return response.json();
}

export default getDeck; 