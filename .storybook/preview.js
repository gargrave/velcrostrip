import * as React from 'react'

import { ToastProvider } from '../src/Toast'

export const parameters = {}

export const decorators = [
  (Story) => (
    <>
      <ToastProvider>
        <Story />
      </ToastProvider>
    </>
  ),
]
