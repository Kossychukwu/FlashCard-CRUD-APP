import {config} from 'dotenv'
config();

import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import Deck from "./models/Deck";
import cors from "cors";


const PORT  = 5000
const app = express();

app.use(cors());
app.use(express.json());

app.get('/decks', async (req: Request, res: Response)=>{

    const decks = await Deck.find()

    res.json(decks)
})

app.post('/decks', async(req: Request, res: Response)=>{
   
    const newDeck = new Deck({
        title: req.body.title,
    })
    const CreatedDeck = await newDeck.save();
    res.json(CreatedDeck);
})

app.delete("/decks/:deckID", async (req: Request, res: Response)=>{

    const deckID = req.params.deckID 
    
    const deck = await Deck.findByIdAndDelete(deckID)

    res.json(deck)
})

mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URL!).then(() => {
console.log(`listening on port ${PORT}`)
 app.listen(PORT)
})

