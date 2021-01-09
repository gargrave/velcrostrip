import { render as RtlRender } from '@testing-library/react'
import * as React from 'react'

import { ToastProvider, ToastProviderProps } from './ToastProvider'
import { useToast } from './ToastProvider.context'

let defaultProps: ToastProviderProps

const showToastBtnId = 'showToastBtn'

const TestChildren = () => {
  const { showToast } = useToast()

  return (
    <>
      <div>This is the ToastProvider children</div>
      <button
        data-testid={showToastBtnId}
        onClick={() => showToast({ msg: 'hi' })}
      >
        Show Toast
      </button>
    </>
  )
}

const renderContainer = document.createElement('div')
function render(overrideProps: Partial<ToastProviderProps> = {}) {
  return RtlRender(
    <ToastProvider
      {...defaultProps}
      {...overrideProps}
      renderContainer={renderContainer}
    >
      <TestChildren />
    </ToastProvider>,
    {
      container: document.body.appendChild(renderContainer),
    },
  )
}

describe('ToastProvider', () => {
  beforeEach(() => {
    defaultProps = {}
  })

  describe('Basic Rendering', () => {
    it('renders something', async () => {
      const { container, getByText } = render()

      expect(container.firstChild).not.toBeNull()
      expect(
        getByText(/This is the ToastProvider children/i),
      ).toBeInTheDocument()
    })
  })
})
