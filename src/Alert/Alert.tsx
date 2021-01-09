import * as React from 'react'

import { StyleTheme } from '../styles'
import {
  AlertContainer,
  AlertContent,
  CloseButton,
  CloseButtonWrapper,
} from './Alert.styles'

const DEFAULT_TRANSITION_TIME = 250

export const getAlertTestId = (type: StyleTheme): string => `vs-alert--${type}`
export const getCloseBtnTestId = (type: StyleTheme): string =>
  `${getAlertTestId(type)}__closeBtn`

export type AlertProps = React.PropsWithChildren<{
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
    onDismiss,
    styleTheme = StyleTheme.Primary,
    transitionTime = DEFAULT_TRANSITION_TIME,
  }) => {
    const [state, setState] = React.useState<AlertState>({
      dismissed: false,
      showing: true,
    })

    const handleCloseClick = React.useCallback(() => {
      if (!onDismiss) return

      setState((prev) => ({ ...prev, dismissed: true }))

      setTimeout(() => {
        setState((prev) => ({ ...prev, showing: false }))
        onDismiss()
      }, transitionTime)
    }, [onDismiss, transitionTime])

    return state.showing ? (
      <AlertContainer
        data-testid={getAlertTestId(styleTheme)}
        role="alert"
        styleTheme={styleTheme}
        transitionTime={transitionTime}
        {...state}
      >
        <AlertContent>{children}</AlertContent>

        {onDismiss && (
          <CloseButtonWrapper>
            <CloseButton
              aria-label="Close Alert"
              data-testid={getCloseBtnTestId(styleTheme)}
              onClick={handleCloseClick}
            >
              <span aria-hidden="true">&times;</span>
            </CloseButton>
          </CloseButtonWrapper>
        )}
      </AlertContainer>
    ) : null
  },
)
