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
}

const blockchain = new Blockchain();

console.log(blockchain);
