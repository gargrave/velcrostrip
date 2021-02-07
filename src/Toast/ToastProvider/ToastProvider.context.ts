import * as React from 'react'

import { noop } from '../../utils'
import { ToastPublicProps } from '../Toast'

export type ToastContextType = {
  showToast: (props: ToastPublicProps) => void
}

export const ToastContext = React.createContext<ToastContextType>({
  showToast: noop,
})

export const useToast = (): ToastContextType => React.useContext(ToastContext)
