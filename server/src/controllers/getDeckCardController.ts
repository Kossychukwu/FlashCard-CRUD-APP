
import {Request, Response} from 'express';
import Deck from "../models/Deck";


export async function getDeckCardController (req: Request, res: Response){
    const { deckID } = req.params;
    const deck = await Deck.findById(deckID)
    res.json(deck)
}