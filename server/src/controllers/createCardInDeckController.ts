import {Request, Response} from 'express';
import Deck from "../models/Deck";

export async function createCardInDeckController(req: Request, res: Response ){
    //get id of deck
    const deckID = req.params.deckID
    //find id in mongo
    const deck = await Deck.findById(deckID)
    
    if(!deck) return res.status(400).send('no deck found');

    const { text } = req.body;
     deck.cards.push(text);
    //save.
    await deck.save();
    //render
    res.json(deck);

}