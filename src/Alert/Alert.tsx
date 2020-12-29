import * as React from 'react'

import { StyleTheme } from '../styles'
import { noop } from '../utils/noop'
import { AlertCloseButton, ThemedAlert } from './Alert.styles'

const DEFAULT_TRANSITION_TIME = 250

export const getAlertTestId = (type: StyleTheme): string => `vs-alert--${type}`
export const getCloseBtnTestId = (type: StyleTheme): string =>
  `${getAlertTestId(type)}__closeBtn`

export type AlertProps = React.PropsWithChildren<{
  // TODO: remove this prop, and just use 'onDismiss' instead
  dismissable?: boolean
  onDismiss?: () => void
  styleTheme?: StyleTheme
  transitionTime?: number
}>

export type AlertState = {
  dismissed: boolean
  showing: boolean
}

export const Alert: React.FC<AlertProps> = React.memo(
  ({
    children,
    dismissable,
    onDismiss = noop,
    styleTheme = StyleTheme.Primary,
    transitionTime = DEFAULT_TRANSITION_TIME,
  }) => {
    const [state, setState] = React.useState<AlertState>({
      dismissed: false,
      showing: true,
    })
    const [showing, setShowing] = React.useState(true)

    const handleClick = React.useCallback(() => {
      if (!onDismiss) return

      setState((prev) => ({ ...prev, dismissed: true }))
      setTimeout(() => {
        setShowing(false)
        onDismiss()
      }, transitionTime)
    }, [onDismiss, transitionTime])

    return showing ? (
      <ThemedAlert
        data-testid={getAlertTestId(styleTheme)}
        role="alert"
        transitionTime={transitionTime}
        styleTheme={styleTheme}
        {...state}
      >
        {children}
        {/* TODO: this needs to push children aside (e.g. for small screens) */}
        {dismissable && (
          <AlertCloseButton
            aria-label="Close Alert"
            data-testid={getCloseBtnTestId(styleTheme)}
            onClick={handleClick}
          >
            <span aria-hidden="true">&times;</span>
          </AlertCloseButton>
        )}
      </ThemedAlert>
    ) : null
  },
)
