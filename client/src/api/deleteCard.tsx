import { APP_URL } from './config';
import { TDeck } from './getDecks';



async function deleteCard(deckID: string, index: number): Promise<TDeck> {
 const response = await fetch(`${APP_URL}/decks/${deckID}/cards/${index}`, {
        method: 'DELETE'
});
return response.json()
}
export default deleteCard;