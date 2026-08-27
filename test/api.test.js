import { describe, expect, it } from 'vitest';
import request from 'supertest';
import { app } from '../src/app.js';

describe('Blockchain API', () => {
  it('should return the blockchain', async () => {
    // Act
    const response = await request(app).get('/blockchain');

    // Assert
    expect(response.status).toBe(200);
    expect(response.body.chain).toBeDefined();
  });
  it('should add a new transaction', async () => {
    // Arrange
    const transaction = {
      sender: 'Farm A',
      recipient: 'Roastery B',
      batchId: 'COFFEE-001',
      weightKg: 500,
    };

    // Act
    const response = await request(app).post('/transactions').send(transaction);

    // Assert
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Transaction added');
  });
  it('should mine pending transactions', async () => {
    // Arrange
    const transaction = {
      sender: 'Farm A',
      recipient: 'Roastery B',
      batchId: 'COFFEE-002',
      weightKg: 300,
    };

    await request(app).post('/transactions').send(transaction);

    // Act
    const response = await request(app).post('/mine');

    // Assert
    expect(response.status).toBe(201);
    expect(response.body.block).toBeDefined();
  });

  it('should reject a transaction without batchId', async () => {
    // Arrange
    const transaction = {
      sender: 'Farm A',
      recipient: 'Roastery B',
      weightKg: 500,
    };

    // Act
    const response = await request(app).post('/transactions').send(transaction);

    // Assert
    expect(response.status).toBe(400);
  });
});
