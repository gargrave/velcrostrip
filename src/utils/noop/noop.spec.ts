import { noop } from './noop'

describe('noop', () => {
  it('does nothing, returns nothing', () => {
    const result = noop()
    expect(result).toBeUndefined()
  })
})
