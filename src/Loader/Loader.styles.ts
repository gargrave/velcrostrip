import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { transparentize } from 'polished'

import { LoaderStylesProps } from './Loader.types'

const containerStyles = css`
  align-items: center;
  display: inline-flex;
  justify-content: center;
`

const overlayContainerStyles = css`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

export const Container = styled.div<LoaderStylesProps>`
  ${({ overlay }) => (overlay ? overlayContainerStyles : containerStyles)};
`

export const Overlay = styled.div`
  background: ${transparentize(0.5, 'white')};
  height: 100%;
  position: absolute;
  width: 100%;
`

export const LoaderWrapper = styled.div<LoaderStylesProps>`
  display: inline-block;
  height: ${({ loaderSize }) => loaderSize}px;
  width: ${({ loaderSize }) => loaderSize}px;
`
