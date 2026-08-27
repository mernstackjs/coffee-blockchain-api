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
});
