import { describe, expect, it } from 'vitest';
import { InvalidExpirationError } from '../../../../../lib/utils/errors';

describe('InvalidExpirationError - Unit Tests', () => {
  it('should make a error message', () => {
    const exec = () => {
      throw new InvalidExpirationError();
    };

    expect(exec).toThrowError("Expiration can't be negative");
  });
});
