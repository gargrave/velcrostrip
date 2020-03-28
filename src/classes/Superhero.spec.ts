/* eslint-disable no-console */
import { Superhero } from './Superhero'

describe('Superhero', () => {
  let cLog
  const mockConsoleLog = jest.fn()

  beforeAll(() => {
    cLog = console.log
    console.log = mockConsoleLog
  })

  afterAll(() => {
    console.log = cLog
  })

  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('says hello correctly', () => {
    const superhero = new Superhero('Susie', 'flight')
    superhero.sayHi()

    expect(mockConsoleLog).toHaveBeenCalledTimes(1)
    expect(mockConsoleLog).toHaveBeenCalledWith(
      'Ahoy! I am Susie, and I have the power of flight!',
    )
  })
})
