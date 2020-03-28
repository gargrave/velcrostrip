import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { cleanup, render } from '@testing-library/react'

import { Loader, LoaderProps, loaderTestIds } from './Loader'

let defaultProps: LoaderProps

describe('Loader', () => {
  beforeEach(() => {
    jest.resetAllMocks()
    defaultProps = {}
  })

  afterEach(cleanup)

  describe('Basic Rendering', () => {
    it('renders correctly', () => {
      const { getAllByTestId } = render(<Loader {...defaultProps} />)

      expect(getAllByTestId(loaderTestIds.loaderWrapper)).toHaveLength(1)
    })
  })

  describe('Conditional props handling', () => {
    it('applies custom "className" prop', () => {
      const customClass = 'customClass'
      const { container } = render(
        <Loader {...defaultProps} className={customClass} />,
      )

      expect(container.querySelectorAll(`.${customClass}`)).toHaveLength(1)
    })

    it.todo('applies a custom test id when specified')
  })
})
