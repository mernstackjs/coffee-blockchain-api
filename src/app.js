import { config } from 'dotenv';

config();
import express from 'express';
import { Blockchain } from './blockchain.js';

export const app = express();

const { NODE_ENV } = process.env;

app.use(express.json());

const blockchain = new Blockchain();

app.get('/blockchain', (req, res) => {
  res.status(200).json(blockchain);
});

app.post('/transactions', (req, res) => {
  const transaction = req.body;

  blockchain.addTransaction(transaction);

  res.status(201).json({
    message: 'Transaction added',
  });
});
