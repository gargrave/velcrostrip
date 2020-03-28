import { css, keyframes } from 'emotion'

import { colors } from '../../styles'
import { LoaderStylesProps, LoaderBuilder } from './loaderStyles.types'

const anim1 = keyframes`  
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`

const anim3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`

const wrapper = (props: LoaderStylesProps) => css`
  display: inline-block;
  height: ${props.size}px;
  width: ${props.size}px;
`

const ellipsis = (props: LoaderStylesProps) => {
  const { size } = props

  const color = props.baseColor ?? colors.theme[props.type]
  const speed = props.speed ?? 600

  // get the nearest multiple of 3 so we can move the dots evenly
  const width = size - (size % 3)
  // the amount each dot will move each time
  const increment = width / 3
  // offset the starting position to get it as close to horizontally centered as possible
  const left = props.size - width + 1
  // size the dots based roughly on the wrapper size
  const itemSize = props.innerSize ?? Math.floor(increment * 0.75)

  // (this keyframes requires knowledge of the dynamic sizing)
  const anim2 = keyframes`
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(${increment}px, 0);
    }
  `

  return css`
    align-items: center;
    display: flex;
    height: 100%;
    position: relative;
    width: 100%;

    div {
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
      background: ${color};
      border-radius: 50%;
      height: ${itemSize}px;
      position: absolute;
      width: ${itemSize}px;
    }

    div:nth-child(1) {
      animation: ${anim1} ${speed}ms infinite;
      left: ${left}px;
    }

    div:nth-child(2) {
      animation: ${anim2} ${speed}ms infinite;
      left: ${left}px;
    }

    div:nth-child(3) {
      animation: ${anim2} ${speed}ms infinite;
      left: ${left + increment}px;
    }

    div:nth-child(4) {
      animation: ${anim3} ${speed}ms infinite;
      left: ${left + increment * 2}px;
    }
  `
}

const builder: LoaderBuilder = {
  loader: ellipsis,
  wrapper,
}

export default builder
