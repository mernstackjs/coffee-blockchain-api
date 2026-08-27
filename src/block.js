import { calculateHash } from './hash.js';

export class Block {
  constructor(index, timestamp, transactions, previousHash) {
    this.index = index;
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = '';
  }

  mineBlock(difficulty) {
    while (!this.hash.startsWith('0'.repeat(difficulty))) {
      this.nonce++;

      const data =
        this.index +
        this.timestamp +
        JSON.stringify(this.transactions) +
        this.previousHash +
        this.nonce;

      this.hash = calculateHash(data);
    }
  }
}

// const transactions = [
//   {
//     sender: 'Farm A',
//     recipient: 'Roastery B',
//     batchId: 'COFFEE-001',
//     weightKg: 500,
//   },
// ];

// const block1 = new Block(
//   1,
//   '2026-08-27T12:00:00.000Z',
//   transactions,
//   'previous-hash',
// );
// const block2 = new Block(
//   1,
//   '2026-09-27T12:00:00.000Z',
//   transactions,
//   'previous-hash',
// );

// block1.mineBlock(2);
// block2.mineBlock(2);
// console.log(block1);
// console.log(block2);
