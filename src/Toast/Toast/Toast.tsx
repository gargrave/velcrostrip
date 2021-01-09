import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { StyleTheme } from '../../styles'
import { CloseButton, ToastContainer, ToastContent } from './Toast.styles'
import { getPositions, ToastPosition } from './Toast.utils'

export const DEFAULT_TOAST_DURATION = 5_000

export enum ToastTestIds {
  closeBtn = 'vs--Toast__closeBtn',
  container = 'vs--Toast__container',
}

export type ToastPublicProps = {
  duration?: number
  hideCloseButton?: boolean
  msg: string
  position?: ToastPosition
  toastType?: StyleTheme
}

type ToastInternalProps = {
  afterMeasure: (id: string, size: number) => void
  id: string
  index: number
  onClose: (id: string) => void
  renderContainer?: Element
  verticalOffset: number
}

export type ToastProps = ToastPublicProps & ToastInternalProps

export const Toast: React.FC<ToastProps> = ({
  afterMeasure,
  duration,
  hideCloseButton = false,
  id,
  index,
  msg,
  onClose,
  position = 'top-right',
  renderContainer = document.body,
  toastType = StyleTheme.Info,
  verticalOffset,
}) => {
  const ref = React.useRef<HTMLDivElement>(null)

  const handleClose = React.useCallback(() => {
    onClose(id)
  }, [id, onClose])

  // callback for measuring the element ref (for positioning around it)
  React.useEffect(() => {
    if (ref.current) {
      const size = (ref.current as HTMLElement).offsetHeight
      afterMeasure(id, size)
    }
  }, [afterMeasure, id])

  // set up a timeout to clear the toast after "duration" time
  React.useEffect(() => {
    const timeout = setTimeout(handleClose, duration ?? DEFAULT_TOAST_DURATION)

    return () => {
      clearTimeout(timeout)
    }
  }, [duration, handleClose])

  // memoized value for vertical translate based on the toast's current spot in the list
  const topOffset = React.useMemo(() => {
    const y = getPositions(position)[0]
    const offset = verticalOffset + index * 8
    return y === 'top' ? offset : -offset
  }, [index, position, verticalOffset])

  return ReactDOM.createPortal(
    <ToastContainer
      aria-atomic="true"
      aria-live="assertive"
      data-testid={ToastTestIds.container}
      position={position}
      ref={ref}
      role="alert"
      toastType={toastType}
      topOffset={topOffset}
    >
      <ToastContent>
        <span>{msg}</span>

        {!hideCloseButton && (
          <CloseButton
            aria-label="Close"
            data-testid={ToastTestIds.closeBtn}
            onClick={handleClose}
          />
        )}
      </ToastContent>
    </ToastContainer>,
    renderContainer,
  )
}
