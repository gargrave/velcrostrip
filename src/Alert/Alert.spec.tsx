import { act, fireEvent, render, waitFor } from '@testing-library/react'
import * as React from 'react'

import { StyleTheme } from '../styles'
import { Alert, AlertProps, getAlertTestId, getCloseBtnTestId } from './Alert'

let defaultProps: AlertProps

describe('Alert', () => {
  beforeEach(() => {
    jest.useFakeTimers()

    defaultProps = {
      transitionTime: 1,
    }
  })

  describe('Basic Rendering', () => {
    it('renders correctly', () => {
      const children = 'This is the alert text!'
      const time = 5
      const styleTheme = StyleTheme.Primary

      const {
        container,
        getAllByRole,
        getAllByTestId,
        getAllByText,
        queryAllByTestId,
      } = render(
        <Alert {...defaultProps} transitionTime={time} styleTheme={styleTheme}>
          {children}
        </Alert>,
      )

      expect(getAllByRole('alert')).toHaveLength(1)
      expect(getAllByText(children)).toHaveLength(1)
      expect(getAllByTestId(getAlertTestId(styleTheme))).toHaveLength(1)
      // no "close" button by default
      expect(queryAllByTestId(getCloseBtnTestId(styleTheme))).toHaveLength(0)

      // confirm styles calculated from props
      expect(container.firstChild).toHaveStyle(
        `transition: opacity ${time}ms ease`,
      )
    })
  })

  describe('Interactivity', () => {
    it('renders a "close" button when "dismissable" is true', async () => {
      const mockOnDismiss = jest.fn()
      const time = 1
      const styleTheme = StyleTheme.Primary

      const { container, getByTestId } = render(
        <Alert
          {...defaultProps}
          styleTheme={styleTheme}
          dismissable={true}
          onDismiss={mockOnDismiss}
          transitionTime={time}
        >
          <div />
        </Alert>,
      )

      expect(container.firstChild).not.toBeNull()
      expect(mockOnDismiss).toHaveBeenCalledTimes(0)

      // trigger close, and ensure "opacity" style gets updated
      expect(container.firstChild).toHaveStyle('opacity: 1')
      fireEvent.click(getByTestId(getCloseBtnTestId(styleTheme)))
      expect(container.firstChild).toHaveStyle('opacity: 0')

      act(() => {
        jest.advanceTimersByTime(time)
      })

      await waitFor(() => {
        expect(container.firstChild).toBeNull()
        expect(mockOnDismiss).toHaveBeenCalledTimes(1)
      })
    })
  })
})
