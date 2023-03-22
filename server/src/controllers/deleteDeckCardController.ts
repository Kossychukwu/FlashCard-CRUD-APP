
import {Request, Response} from 'express';
import Deck from "../models/Deck";

export async function deleteDeckCardController(req: Request, res: Response ){
    //get id of deck
    const deckID = req.params.deckID
    //find id in mongo
    const index = req.params.index;
    const deck = await Deck.findById(deckID)
    if(!deck) return res.status(400).send('no deck found');
     deck.cards.splice(parseInt(index), 1)
    //save.
    await deck.save();
    //render
    res.json(deck);

}