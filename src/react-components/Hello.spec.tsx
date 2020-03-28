import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { cleanup, render } from '@testing-library/react'

import { Hello, HelloProps } from './Hello'

let defaultProps: HelloProps

describe('Hello', () => {
  beforeEach(() => {
    jest.resetAllMocks()
    defaultProps = {
      text: 'Everybody',
    }
  })

  afterEach(cleanup)

  describe('Basic Rendering', () => {
    it('renders something', () => {
      const { getByText } = render(<Hello {...defaultProps} />)
      expect(getByText(/Hello, Everybody!/)).toBeInTheDocument()
    })
  })
})
