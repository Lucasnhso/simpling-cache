import { describe, expect, it } from "vitest";
import { InvalidKeyError } from "../../../../../lib/utils/errors";

describe('InvalidKeyError - Unit Tests', () => {
  it('should make a error message', () => {
    const exec = () => {
      throw new InvalidKeyError
    };

    expect(exec).toThrowError("Key can't be a empty string");
  })
})