import { describe, expect, it } from 'vitest';
import { Block } from '../src/block.js';

describe('Block mining', () => {
  it('should mine a block until the hash matches the difficulty', () => {
    // Arrange
    const transactions = [
      {
        sender: 'Farm A',
        recipient: 'Roastery B',
        batchId: 'COFFEE-001',
        weightKg: 500,
      },
    ];

    const block = new Block(
      1,
      '2026-08-27T12:00:00.000Z',
      transactions,
      'previous-hash',
    );

    // Act
    block.mineBlock(2);

    // Assert
    expect(block.hash.startsWith('00')).toBe(true);
  });
});
