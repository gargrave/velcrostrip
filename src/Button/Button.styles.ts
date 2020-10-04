import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { shade, tint, transparentize } from 'polished'

import { Loader, LoaderProps } from '../Loader'
import { colors, StyleTheme } from '../styles'
import { ButtonProps } from './Button'

export const DISABLED_OPACITY = 0.65
export const LOADER_TRANSITION_TIME = 200
const BUTTON_HEIGHT = `2.25rem`

type StyledButtonProps = Required<
  Pick<
    ButtonProps,
    'block' | 'styleTheme' | 'disabled' | 'outline' | 'showLoader'
  >
>

/**************************************************
 * Button styles
 **************************************************/

function buttonTheme(styleTheme: StyleTheme) {
  const baseColor = colors.theme[styleTheme]
  const colorInterval = 0.08
  const shadow = transparentize(0.5, tint(colorInterval, baseColor))

  /** Helper to generate a darker or lighter color variant based on the offset */
  function offsetColor(offset: number): string {
    if (offset < 0) return shade(offset * -colorInterval, baseColor)
    if (offset > 0) return tint(offset * colorInterval, baseColor)
    return baseColor
  }

  /** Helper to set BG and border colors for a given offset */
  function colorState(offset = 0) {
    return {
      backgroundColor: offsetColor(offset),
      borderBottomColor: offsetColor(offset - 1),
      borderColor: offsetColor(offset),
    }
  }

  return css`
    ${colorState(0)};
    color: white;

    &:hover {
      ${colorState(-1)};
      color: white;
    }

    &:active {
      ${colorState(-2)};
      color: white;
    }

    &:focus {
      box-shadow: 0 0 0 0.2rem ${shadow};
      color: white;
    }

    &:disabled {
      ${colorState(2)};
      color: white;
    }
  `
}

function outlineButton(styleTheme: StyleTheme) {
  const baseColor = colors.theme[styleTheme]

  return css`
    &,
    &:focus:not(:hover) {
      background-color: transparent;
      border-color: ${baseColor};
      color: ${baseColor};
    }
  `
}

export const StyledButton = styled.button<StyledButtonProps>`
  align-items: center;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: inherit;
  height: ${BUTTON_HEIGHT};
  justify-content: center;
  line-height: ${BUTTON_HEIGHT};
  padding: 0 0.75em;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  &:focus {
    outline: none;
  }

  & + button {
    margin-left: 8px;
  }

  cursor: ${({ disabled, showLoader }) =>
    disabled || showLoader ? 'default' : 'pointer'};

  display: ${({ block }) => (block ? 'block' : 'inline-flex')};
  opacity: ${({ disabled }) => (disabled ? DISABLED_OPACITY : 1)};
  width: ${({ block }) => (block ? '100%' : 'auto')};

  // apply the specified button theme
  ${({ styleTheme }) => buttonTheme(styleTheme)}

  // override with "outline" styling when necessary
  ${({ styleTheme, outline }) => (outline ? outlineButton(styleTheme) : null)}
`

/**************************************************
 * Button Loader styles
 **************************************************/

type ButtonLoaderProps = LoaderProps & Pick<ButtonProps, 'showLoader'>

export const ButtonLoader = styled(Loader)<ButtonLoaderProps>`
  display: ${({ showLoader }) => (showLoader ? 'inherit' : 'none')};
  opacity: ${({ showLoader }) => (showLoader ? 1 : 0)};
  position: absolute;
  transition: opacity ${LOADER_TRANSITION_TIME}ms ease;
  visibility: ${({ showLoader }) => (showLoader ? 'inherit' : 'hidden')};
`

/**************************************************
 * Button Children styles
 **************************************************/

type ButtonChildrenProps = Pick<ButtonProps, 'showLoader'>

export const ButtonChildren = styled.span<ButtonChildrenProps>`
  opacity: ${({ showLoader }) => (showLoader ? 0 : 1)};
  transition: opacity ${LOADER_TRANSITION_TIME}ms ease;
`
