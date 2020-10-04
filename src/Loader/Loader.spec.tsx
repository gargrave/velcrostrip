import { render } from '@testing-library/react'
import * as React from 'react'

import { Loader, LoaderProps, loaderTestIds } from './Loader'

let defaultProps: LoaderProps

describe('Loader', () => {
  beforeEach(() => {
    defaultProps = {}
  })

  describe('Basic Rendering', () => {
    it('renders correctly', () => {
      const { getAllByTestId } = render(<Loader {...defaultProps} />)

      expect(getAllByTestId(loaderTestIds.wrapper)).toHaveLength(1)
    })
  })

  describe('Overlay styling', () => {
    it('Does not render in "overlay" mode by default', () => {
      const { getByTestId, queryAllByTestId } = render(
        <Loader {...defaultProps} />,
      )
      const container = getByTestId(loaderTestIds.container)

      expect(container).not.toHaveStyle('position: absolute')
      expect(container).not.toHaveStyle('left: 0')
      expect(container).not.toHaveStyle('top: 0')
      expect(queryAllByTestId(loaderTestIds.overlay)).toHaveLength(0)
    })

    it('Renders in "overlay" mode when the prop is true', () => {
      const { getByTestId, getAllByTestId } = render(
        <Loader {...defaultProps} overlay={true} />,
      )
      const container = getByTestId(loaderTestIds.container)

      expect(container).toHaveStyle('position: absolute')
      expect(container).toHaveStyle('left: 0')
      expect(container).toHaveStyle('top: 0')
      expect(getAllByTestId(loaderTestIds.overlay)).toHaveLength(1)
    })
  })
})
