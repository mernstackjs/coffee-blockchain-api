import { describe, expect, it } from 'vitest';
import { calculateHash } from '../src/hash.js';
describe('calculateHash', () => {
  it('should return a SHA-256 hash', () => {
    // Arrange
    const data = 'i am ahmed';

    // Act
    const hash = calculateHash(data);

    // Assert
    expect(hash).toHaveLength(64);
  });
});
