import {Request, Response} from 'express';
import Deck from "../models/Deck";


export async function deleteDeckController(req: Request, res: Response){
    const deckID = req.params.deckID 
    const deck = await Deck.findByIdAndDelete(deckID)
    res.json(deck)
}