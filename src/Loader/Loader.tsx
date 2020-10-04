import * as React from 'react'

import { StyleTheme } from '../styles'
import { arr } from '../utils'
import { Container, LoaderWrapper, Overlay } from './Loader.styles'
import { LoaderStylesProps } from './Loader.types'
import { DualRing, Ellipsis, Grid, SingleRing } from './shapes'

export const loaderTestIds = {
  container: 'vs-loader__container',
  overlay: 'vs-loader__overlay',
  wrapper: 'vs-loader__wrapper',
}

export enum LoaderShape {
  DualRing = 'dualRing',
  Ellipsis = 'ellipsis',
  Grid = 'grid',
  SingleRing = 'singleRing',
}

const loaderMap = {
  [LoaderShape.DualRing]: DualRing,
  [LoaderShape.Ellipsis]: Ellipsis,
  [LoaderShape.Grid]: Grid,
  [LoaderShape.SingleRing]: SingleRing,
}

const loaderTypeToChildCount = {
  [LoaderShape.DualRing]: 0,
  [LoaderShape.Ellipsis]: 4,
  [LoaderShape.Grid]: 9,
  [LoaderShape.SingleRing]: 0,
}

export type LoaderProps = {
  /**
   * (Optional) Override base color for the loader. If specified, this will be
   * used as the primary color for the loader. Otherwise, the loader will fallback
   * to using the color set from specified (or default) styling theme.
   */
  baseColor?: string
  innerSize?: number
  /**
   * Whether this Loader should render in "overlay" mode.
   * This will cause the following changes to rendering:
   * - The Loader will use "absolute" positioning and fill the parent element
   * - The Loader will render an overlay to obscure the parent element
   *
   * Note that the parent element must use "relative" positioning in order for this to work as expected.
   */
  overlay?: boolean
  loaderShape?: LoaderShape
  loaderSize?: number
  /**
   * The speed of the animation in ms; if none is provided, each animation will
   * choose its own default.
   */
  speed?: number
  styleTheme?: StyleTheme
}

export const Loader: React.FC<LoaderProps> = React.memo((props) => {
  const { overlay } = props
  const loaderShape = props.loaderShape || LoaderShape.DualRing

  const propsWithDefaults: LoaderStylesProps = {
    loaderShape,
    loaderSize: 40,
    styleTheme: StyleTheme.Primary,
    ...props,
  }

  /**
   * Maps an array of empty values at the length required by the specified
   * LoaderShape. These will be used to render 'n' number of empty <div>s
   * so that the CSS has the correct number of targets for its magic.
   */
  const childMapper = React.useMemo(
    () => arr(loaderTypeToChildCount[loaderShape]),
    [loaderShape],
  )

  return (
    <Container data-testid={loaderTestIds.container} {...propsWithDefaults}>
      {overlay && (
        <Overlay data-testid={loaderTestIds.overlay} {...propsWithDefaults} />
      )}

      <LoaderWrapper data-testid={loaderTestIds.wrapper} {...propsWithDefaults}>
        {React.createElement(
          loaderMap[loaderShape],
          propsWithDefaults,
          <>
            {childMapper.map((_, idx) => (
              <div key={idx} />
            ))}
          </>,
        )}
      </LoaderWrapper>
    </Container>
  )
})
