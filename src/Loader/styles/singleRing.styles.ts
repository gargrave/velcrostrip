import { css, keyframes } from 'emotion'
import { transparentize } from 'polished'

import { colors } from '../../styles'
import { LoaderStylesProps, LoaderBuilder } from './loaderStyles.types'

const defaultInnerSize = (props: LoaderStylesProps) =>
  Math.max(Math.round(props.size * 0.1), 1)

const anim = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const wrapper = (props: LoaderStylesProps) => css`
  display: inline-block;
  height: ${props.size}px;
  width: ${props.size}px;
`

const dualRing = (props: LoaderStylesProps) => {
  const color = props.baseColor ?? colors.theme[props.type]
  const c1 = color
  const c2 = transparentize(0.6, c1)
  const size = props.innerSize ?? defaultInnerSize(props)
  const speed = props.speed ?? 600

  return css`
    height: 100%;
    width: 100%;

    &:after {
      animation: ${anim} ${speed}ms linear infinite;
      border: ${size}px solid #fff;
      border-color: ${c1} ${c2} ${c2} ${c1};
      border-radius: 50%;
      content: ' ';
      display: block;
      height: calc(100% - ${size}px * 2);
      width: calc(100% - ${size}px * 2);
    }
  `
}

const builder: LoaderBuilder = {
  loader: dualRing,
  wrapper,
}

export default builder
