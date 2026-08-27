import { describe, expect, it } from 'vitest';
import { Blockchain } from '../src/blockchain.js';

describe('Blockchain', () => {
  it('should add a new transaction to pending transactions', () => {
    // Arrange
    const blockchain = new Blockchain();

    const transaction = {
      sender: 'Farm A',
      recipient: 'Roastery B',
      batchId: 'COFFEE-001',
      weightKg: 500,
    };

    // Act
    blockchain.addTransaction(transaction);

    // Assert
    expect(blockchain.pendingTransactions).toHaveLength(1);
    expect(blockchain.pendingTransactions[0]).toEqual(transaction);
  });
});
