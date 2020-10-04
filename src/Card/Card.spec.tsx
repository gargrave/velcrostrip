import { fireEvent, render } from '@testing-library/react'
import * as React from 'react'

import { Card, CardProps } from './Card'

let defaultProps: CardProps

describe('Card', () => {
  beforeEach(() => {
    defaultProps = {
      hoverable: false,
      onClick: jest.fn(),
    }
  })

  describe('Basic Rendering', () => {
    it('renders correctly', () => {
      const { container, getAllByText } = render(
        <Card {...defaultProps}>
          <p>Card!</p>
        </Card>,
      )

      expect(container.querySelectorAll('p')).toHaveLength(1)
      expect(getAllByText(/^Card!$/i)).toHaveLength(1)

      // no hover styling by default
      expect(container.firstChild).not.toHaveStyle({ cursor: 'pointer' })
    })
  })

  describe('Interactivity', () => {
    it('calls the "onClick" callback when clicked', () => {
      const { container } = render(<Card {...defaultProps} />)
      const { onClick } = defaultProps

      expect(onClick).toHaveBeenCalledTimes(0)
      fireEvent.click(container.firstChild as HTMLElement)
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('applies "hoverable" styling when prop is true', () => {
      const { container } = render(<Card {...defaultProps} hoverable={true} />)

      expect(container.firstChild).toHaveStyle({ cursor: 'pointer' })
    })
  })
})
