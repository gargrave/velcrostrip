import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { colors, shadows } from '../../styles'
import { ToastProps } from './Toast'
import { getPositions, ToastPosition } from './Toast.utils'

const getDesktopPositions = (position: ToastPosition) => {
  const [y, x] = getPositions(position)
  const margin = '24px'

  const xStyles =
    x === 'right'
      ? css`
          left: auto;
          right: ${margin};
        `
      : css`
          left: ${margin};
          right: auto;
        `

  const yStyles =
    y === 'top'
      ? css`
          top: ${margin};
        `
      : css`
          bottom: ${margin};
        `

  return css`
    ${{ ...xStyles }};
    ${{ ...yStyles }};
  `
}

const getMobilePositions = (position: ToastPosition) => {
  const [y] = getPositions(position)
  const margin = '8px'

  const xStyles = css`
    left: ${margin};
    right: ${margin};
  `

  const yStyles =
    y === 'top'
      ? css`
          bottom: auto;
          top: ${margin};
        `
      : css`
          bottom: ${margin};
          top: auto;
        `

  return css`
    ${{ ...xStyles }};
    ${{ ...yStyles }};
  `
}

type ToastContainerProps = Required<Pick<ToastProps, 'position'>> &
  Partial<Pick<ToastProps, 'toastType'>> & {
    topOffset?: number
  }

export const ToastContainer = styled.div<ToastContainerProps>`
  ${shadows.light};

  background: white;
  border: solid #bbb 1px;
  border-top: ${({ toastType }) =>
    toastType ? `solid ${colors.theme[toastType]} 4px` : 'solid #bbb 1px'};
  max-width: 350px;
  padding: 12px;
  position: fixed;
  transform: ${({ topOffset }) => `translateY(${topOffset}px)`};
  transition: transform 325ms ease;

  ${({ position }) => getMobilePositions(position)};

  @media (min-width: 600px) {
    ${({ position }) => getDesktopPositions(position)};
  }
`

export const ToastContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
`

export const CloseButton = styled.button`
  background: transparent
    url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e")
    center/1em auto no-repeat;
  border: none;
  cursor: pointer;
  height: 1em;
  margin-left: 8px;
  opacity: 0.6;
  transition: opacity 100ms ease;
  width: 1em;

  &:hover {
    opacity: 0.85;
  }

  &:active {
    outline: none;
  }
`
