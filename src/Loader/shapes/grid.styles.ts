import { css, keyframes } from '@emotion/core'
import styled from '@emotion/styled'

import { colors } from '../../styles'
import { LoaderStylesProps } from '../Loader.types'

const DEFAULT_SPEED = 1200
const DEFAULT_ITEM_SIZE_MULT = 0.2

const anim = keyframes`
  0%, 100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
`

export const Grid = styled.div<LoaderStylesProps>(
  {
    display: 'inline-block',
    position: 'relative',
  },
  (props) => {
    const { loaderSize } = props

    const color = props.baseColor ?? colors.theme[props.styleTheme]
    const speed = props.speed ?? DEFAULT_SPEED
    const itemCount = 3
    const spaceCount = itemCount + 1

    // size the dots based roughly on the wrapper size
    const itemSize =
      props.innerSize ?? Math.round(loaderSize * DEFAULT_ITEM_SIZE_MULT)

    const combinedItemsSize = itemSize * itemCount
    const spacer = Math.floor((loaderSize - combinedItemsSize) / spaceCount)
    const combinedSpaceSize = spacer * spaceCount
    const padding = Math.floor(
      (loaderSize - combinedSpaceSize - combinedItemsSize) / 2,
    )

    // pre-calculate the 3 positions for all children based on our above calculations
    const positions = [
      padding + spacer,
      padding + itemSize + spacer * 2,
      padding + itemSize * 2 + spacer * 3,
    ]

    // pre-calculate the 3 possible animation delay values
    const delayOffset = Math.floor(-speed / 3)
    const delays: number[] = Array.from(Array(4)).map(
      (_, idx) => delayOffset * (idx + 1),
    )

    return css`
      height: ${loaderSize}px;
      width: ${loaderSize}px;

      div {
        animation: ${anim} ${speed}ms linear infinite;
        background: ${color};
        border-radius: 50%;
        height: ${itemSize}px;
        position: absolute;
        width: ${itemSize}px;
      }

      div:nth-of-type(1) {
        left: ${positions[0]}px;
        top: ${positions[0]}px;
      }

      div:nth-of-type(2) {
        animation-delay: ${delays[0]}ms;
        left: ${positions[1]}px;
        top: ${positions[0]}px;
      }

      div:nth-of-type(3) {
        animation-delay: ${delays[1]}ms;
        left: ${positions[2]}px;
        top: ${positions[0]}px;
      }

      div:nth-of-type(4) {
        animation-delay: ${delays[0]}ms;
        left: ${positions[0]}px;
        top: ${positions[1]}px;
      }

      div:nth-of-type(5) {
        animation-delay: ${delays[1]}ms;
        left: ${positions[1]}px;
        top: ${positions[1]}px;
      }

      div:nth-of-type(6) {
        animation-delay: ${delays[2]}ms;
        left: ${positions[2]}px;
        top: ${positions[1]}px;
      }

      div:nth-of-type(7) {
        animation-delay: ${delays[1]}ms;
        left: ${positions[0]}px;
        top: ${positions[2]}px;
      }

      div:nth-of-type(8) {
        animation-delay: ${delays[2]}ms;
        left: ${positions[1]}px;
        top: ${positions[2]}px;
      }

      div:nth-of-type(9) {
        animation-delay: ${delays[3]}ms;
        left: ${positions[2]}px;
        top: ${positions[2]}px;
      }
    `
  },
)
