import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { darken, tint } from 'polished'

import { colors } from '../styles'
import { AlertProps, AlertState } from './Alert'

const BG_COLOR_OFFSET = 0.75
const BORDER_COLOR_OFFSET = 0.035
const TEXT_COLOR_OFFSET = 0.3

type ThemedAlertProps = Required<
  Pick<AlertProps, 'styleTheme' | 'transitionTime'>
> &
  AlertState

export const AlertContainer = styled.div<ThemedAlertProps>(
  {
    borderRadius: '0.25rem',
    marginBottom: '1.5rem',
    marginTop: 0,
    padding: '1rem',
    position: 'relative',
  },
  ({ dismissed, transitionTime, styleTheme }) => {
    const baseColor = colors.theme[styleTheme]
    const backgroundColor = tint(BG_COLOR_OFFSET, baseColor)
    const borderColor = darken(BORDER_COLOR_OFFSET, backgroundColor)
    const textColor = darken(TEXT_COLOR_OFFSET, baseColor)

    return css`
      background: ${backgroundColor};
      border: 1px solid ${borderColor};
      color: ${textColor};
      opacity: ${dismissed ? 0 : 1};
      transition: opacity ${transitionTime}ms ease;
    `
  },
)

export const AlertContent = styled.div`
  max-width: calc(100% - 2.5rem);
`

export const CloseButtonWrapper = styled.div`
  align-items: center;
  background: transparent;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 0 1.25rem;
  position: absolute;
  right: 0;
  top: 0;
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0 6px;
  transition: all 200ms ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`
