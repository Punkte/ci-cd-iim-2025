import {describe, expect, it} from 'vitest'
import {sum} from '../src/sum'

describe('sum', () => {
  it('should add two number', () => {
    // Given
    const a = 10;
    const b = 20;

    // When
    const result = sum(a, b)

    // Then
    expect(result).toEqual(30)
  })
})