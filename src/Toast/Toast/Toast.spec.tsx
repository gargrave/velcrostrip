import { fireEvent, render as rtlRender } from '@testing-library/react'
import * as React from 'react'

import {
  DEFAULT_TOAST_DURATION,
  ToastProps,
  Toast,
  ToastTestIds,
} from './Toast'

let defaultProps: ToastProps

const renderContainer = document.createElement('div')
function render(overrideProps: Partial<ToastProps> = {}) {
  return rtlRender(
    <Toast
      {...defaultProps}
      {...overrideProps}
      renderContainer={renderContainer}
    />,
    {
      container: document.body.appendChild(renderContainer),
    },
  )
}

describe('Toast', () => {
  beforeEach(() => {
    jest.useFakeTimers()

    defaultProps = {
      afterMeasure: jest.fn(),
      id: 'toast123',
      index: 123,
      msg: 'This is a toast',
      onClose: jest.fn(),
      verticalOffset: 0,
    }
  })

  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      const { container, getByText } = render()
      const { onClose } = defaultProps

      expect(container.firstChild).not.toBeNull()
      expect(getByText(defaultProps.msg)).toBeInTheDocument()

      // triggers callback with default duration
      jest.advanceTimersByTime(DEFAULT_TOAST_DURATION - 1)
      expect(onClose).toHaveBeenCalledTimes(0)
      jest.advanceTimersByTime(1)
      expect(onClose).toHaveBeenCalledTimes(1)
    })
  })

  describe('Close button', () => {
    it('renders a close button and calls the callback when clicked', () => {
      const { container, getByTestId } = render(defaultProps)
      const { id, onClose } = defaultProps
      const closeBtn = container.querySelector(
        'button[aria-label="Close"]',
      ) as HTMLElement

      expect(closeBtn).toBeInTheDocument()
      expect(getByTestId(ToastTestIds.closeBtn)).toBeInTheDocument()

      fireEvent.click(closeBtn)

      expect(onClose).toHaveBeenCalledTimes(1)
      expect(onClose).toHaveBeenCalledWith(id)
    })

    it('does not render a "close" button when prop is false', () => {
      const { queryByTestId } = render({ hideCloseButton: true })

      expect(queryByTestId(ToastTestIds.closeBtn)).not.toBeInTheDocument()
    })
  })

  describe('Custom duration', () => {
    it('uses a custom duration', () => {
      const duration = 42
      const { onClose } = defaultProps
      render({ duration: duration })

      // triggers callback with default duration
      jest.advanceTimersByTime(duration - 1)
      expect(onClose).toHaveBeenCalledTimes(0)
      jest.advanceTimersByTime(1)
      expect(onClose).toHaveBeenCalledTimes(1)
    })
  })
})
