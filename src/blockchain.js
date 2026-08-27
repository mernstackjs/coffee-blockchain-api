import { Block } from './block.js';
import { calculateHash } from './hash.js';

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

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      const data =
        currentBlock.index +
        currentBlock.timestamp +
        JSON.stringify(currentBlock.transactions) +
        currentBlock.previousHash +
        currentBlock.nonce;

      const newHash = calculateHash(data);

      if (currentBlock.hash !== newHash) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }

    return true;
  }
}

const blockchain = new Blockchain();

console.log(blockchain);
