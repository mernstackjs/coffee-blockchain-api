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
  it('should generate the correct SHA-256 hash', () => {
    // Arrange
    const data = 'hello';

    // Act
    const hash = calculateHash(data);

    // Assert
    expect(hash).toBe(
      '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824',
    );
  });
});
