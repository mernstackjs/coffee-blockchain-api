import { Block } from './block.js';

export class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.pendingTransactions = [];
  }

  createGenesisBlock() {
    return {
      index: 0,
      timestamp: Date.now(),
      transactions: [],
      previousHash: '0',
      nonce: 0,
      hash: '0',
    };
  }

  addTransaction(transaction) {
    this.pendingTransactions.push(transaction);
  }

  minePendingTransactions(difficulty) {
    const previousBlock = this.chain[this.chain.length - 1];

    const newBlock = new Block(
      this.chain.length,
      Date.now(),
      this.pendingTransactions,
      previousBlock.hash,
    );

    newBlock.mineBlock(difficulty);

    this.chain.push(newBlock);

    this.pendingTransactions = [];
  }
}

const blockchain = new Blockchain();

console.log(blockchain);
