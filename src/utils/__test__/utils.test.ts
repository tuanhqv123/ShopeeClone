import { AxiosError, isAxiosError } from 'axios'
import { describe, it, expect } from 'vitest'

describe('isAxiosError', () => {
  it('isAxiosError trả về boolean', () => {
    expect(isAxiosError(new Error())).toBe(false)
    expect(isAxiosError(new AxiosError())).toBe(true)
  })
})
