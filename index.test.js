import { describe, it } from 'node:test';
import { strictEqual } from 'node:assert';
import { HELLO_PIX } from './index.js';

describe('#HELLO_PIX', () => {
  it('should equals "Hello Pix!"', () => {
    strictEqual(HELLO_PIX, 'Hello Pix!');
  });
});
