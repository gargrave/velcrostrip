import { arr } from './arr'

describe('arr', () => {
  it('returns a new empty array of "len" length with all empty elements', () => {
    const result1 = arr(3)
    expect(result1).toHaveLength(3)
    result1.forEach((val) => {
      expect(val).toBeUndefined()
    })

    const result2 = arr(10)
    expect(result2).toHaveLength(10)
    result2.forEach((val) => {
      expect(val).toBeUndefined()
    })
  })

  it('returns an empty array if "len" is less than 1', () => {
    const result1 = arr(-1)
    expect(result1).toEqual([])

    const result2 = arr(0)
    expect(result2).toEqual([])
  })
})
