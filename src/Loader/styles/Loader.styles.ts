import { css, cx } from 'emotion'
import { transparentize } from 'polished'

import { LoaderStylesProps } from './loaderStyles.types'

import { centeredFlex, pinnedAbsolute } from '../../styles'

const container = css`
  ${centeredFlex}

  align-items: center;
  display: inline-flex;
  justify-content: center;
`

const overlayContainer = css`
  ${pinnedAbsolute}

  display: flex;
  height: 100%;
  width: 100%;
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
  const containerOverlay = props.overlay && overlayContainer

  return {
    backdrop,
    container: [container, cx(containerOverlay)].join(' '),
    wrapper: wrapper(props),
  }
}
