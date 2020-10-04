import { css, keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import { transparentize } from 'polished'

import { colors } from '../../styles'
import { LoaderStylesProps } from '../Loader.types'

const defaultInnerSize = (loaderSize: number): number =>
  Math.max(Math.round(loaderSize * 0.1), 1)

const anim = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const SingleRing = styled.div<LoaderStylesProps>(
  {
    height: '100%',
    width: '100%',
  },
  (props) => {
    const color1 = props.baseColor ?? colors.theme[props.styleTheme]
    const color2 = transparentize(0.6, color1)
    const size = props.innerSize ?? defaultInnerSize(props.loaderSize)
    const speed = props.speed ?? 600

    return css`
      &:after {
        animation: ${anim} ${speed}ms linear infinite;
        border: ${size}px solid #fff;
        border-color: ${color1} ${color2} ${color2} ${color1};
        border-radius: 50%;
        content: ' ';
        display: block;
        height: calc(100% - ${size}px * 2);
        width: calc(100% - ${size}px * 2);
      }
    `
  },
)
