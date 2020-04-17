import { css, cx } from 'emotion'
import { transparentize } from 'polished'

import { LoaderStylesProps, LoaderBuilder } from './loaderStyles.types'

import { centeredFlex, pinnedAbsolute } from '../../styles'
import dualRing from './dualRing.styles'
import ellipsis from './ellipsis.styles'
import singleRing from './singleRing.styles'

const shapes: { [key: string]: LoaderBuilder } = {
  dualRing,
  ellipsis,
  singleRing,
}

const container = css`
  ${centeredFlex}

  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`

const overlayContainer = css`
  ${pinnedAbsolute}
`

const wrapper = (props: LoaderStylesProps) => css`
  display: inline-block;
  height: ${props.size}px;
  width: ${props.size}px;
`

const backdrop = css`
  background: ${transparentize(0.5, 'white')};
  height: 100%;
  position: absolute;
  width: 100%;
`

export default (props: LoaderStylesProps) => {
  const builder = shapes[props.shape]

  const containerOverlay = props.overlay && overlayContainer

  return {
    backdrop,
    container: [container, cx(containerOverlay)].join(' '),
    loader: builder.loader(props),
    wrapper: wrapper(props),
  }
}
