export class Blockchain {
  constructor() {
    this.chain = [];
    this.pendingTransactions = [];
  }

  addTransaction(transaction) {
    this.pendingTransactions.push(transaction);
  }
}

const blockchain = new Blockchain();

console.log(blockchain);
