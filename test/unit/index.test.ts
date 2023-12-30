import { describe, expect, it } from "vitest";
import Cache from '../..'

describe('Index - Unit Test', () => {
  it('should export cache', () => {
    expect(Cache).toBeDefined()
  })
})