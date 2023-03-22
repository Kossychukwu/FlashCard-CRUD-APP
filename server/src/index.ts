import {config} from 'dotenv'
config();

import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import Deck from "./models/Deck";
import cors from "cors";
import { getDeckController } from './controllers/getDeckController';
import { createDeckController } from './controllers/createDeckController';
import { deleteDeckController } from './controllers/deleteDeckController';
import { createCardInDeckController } from './controllers/createCardInDeckController';
import { getDeckCardController } from './controllers/getDeckCardController';
import { deleteDeckCardController } from './controllers/deleteDeckCardController';


const PORT  = 5000
const app = express();

app.use(cors());
app.use(express.json());

app.get('/decks', getDeckController)

app.post('/decks', createDeckController)

app.delete("/decks/:deckID", deleteDeckController)

app.get("/decks/:deckID", getDeckCardController)

app.post("/decks/:deckID/cards", createCardInDeckController)

app.delete("/decks/:deckID/cards/:index", deleteDeckCardController)

mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URL!).then(() => {
console.log(`listening on port ${PORT}`)
 app.listen(PORT)
})

