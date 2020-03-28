import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { cleanup, fireEvent, render } from '@testing-library/react'

import { loaderTestIds } from '../Loader'

import { DISABLED_OPACITY } from './Button.styles'
import { Button, ButtonProps } from './Button'

let defaultProps: ButtonProps

describe('Button', () => {
  beforeEach(() => {
    jest.resetAllMocks()
    defaultProps = {
      onClick: jest.fn(),
    }
  })

  afterEach(cleanup)

  describe('Basic Rendering', () => {
    it('renders correctly with default props', () => {
      const { onClick } = defaultProps
      const children = 'Button Text'
      const { container, getByTestId, getByText } = render(
        <Button {...defaultProps}>{children}</Button>,
      )
      const btn = container.querySelector('button') as HTMLElement

      expect(btn).toBeInTheDocument()
      expect(btn).not.toBeDisabled()
      expect(getByText(children)).toBeInTheDocument()

      expect(btn).toHaveStyle('cursor: pointer')
      expect(btn).toHaveStyle('opacity: 1')
      // no block styling
      expect(btn).not.toHaveStyle('display: block')
      expect(btn).not.toHaveStyle('width: 100%')
      // no outline styling
      expect(btn).not.toHaveStyle('background-color: transparent')
      // shows children and hides loader
      expect(getByText(children)).toHaveStyle('opacity: 1')
      expect(getByTestId(loaderTestIds.loaderWrapper)).toHaveStyle('opacity: 0')

      // fires callback when clicked
      expect(onClick).toHaveBeenCalledTimes(0)
      fireEvent.click(btn)
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('Conditional rendering', () => {
    it('renders a disabled button when prop is true', () => {
      const { onClick } = defaultProps
      const { container } = render(<Button {...defaultProps} disabled={true} />)
      const btn = container.querySelector('button') as HTMLElement

      expect(btn).toBeInTheDocument()
      expect(btn).toBeDisabled()
      expect(btn).toHaveStyle('cursor: default')
      expect(btn).toHaveStyle(`opacity: ${DISABLED_OPACITY}`)

      // disabled button cannot be clicked!
      fireEvent.click(btn)
      expect(onClick).toHaveBeenCalledTimes(0)
    })

    it('applies "block" styling when "block" prop is true', () => {
      const { container } = render(<Button {...defaultProps} block={true} />)
      const btn = container.querySelector('button') as HTMLElement

      expect(btn).toHaveStyle('display: block')
      expect(btn).toHaveStyle('width: 100%')
    })

    it('applies "outline" styling when "outline" prop is true', () => {
      const { container } = render(<Button {...defaultProps} outline={true} />)
      const btn = container.querySelector('button') as HTMLElement

      expect(btn).toHaveStyle('background-color: transparent')
    })
  })

  describe('Loading state', () => {
    it('renders a loader and hides children when "loading" is true', () => {
      const children = 'Button Text'
      const { container, getByTestId, getByText } = render(
        <Button {...defaultProps} loading={true}>
          {children}
        </Button>,
      )
      const btn = container.querySelector('button') as HTMLElement

      expect(btn).toBeInTheDocument()
      expect(btn).toBeDisabled()
      expect(btn).toHaveStyle('cursor: default')

      // shows loader and hides children
      expect(getByTestId(loaderTestIds.loaderWrapper)).toHaveStyle('opacity: 1')
      expect(getByText(children)).toHaveStyle('opacity: 0')
    })
  })
})
