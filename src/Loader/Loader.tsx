import * as React from 'react'

import { StyleTheme } from '../styles'
import { arr, classNames } from '../utils'

import getStyles from './styles'

export enum LoaderShape {
  DualRing = 'dualRing',
  Ellipsis = 'ellipsis',
  SingleRing = 'singleRing',
}

export const loaderTestIds = {
  backdrop: 'loader__backdrop',
  container: 'loader__container',
  wrapper: 'loader__wrapper',
}

const childrenToTypeMap = {
  [LoaderShape.DualRing]: 0,
  [LoaderShape.Ellipsis]: 4,
  [LoaderShape.SingleRing]: 0,
}

export type LoaderProps = {
  /**
   * (Optional) Override base color for the loader. If specified, this will be
   * used as the primary color for the loader. Otherwise, the loader will fallback
   * to using the color set from specified (or default) styling theme.
   */
  baseColor?: string
  className?: string
  innerSize?: number
  /**
   * Whether this Loader should render in "overlay" mode.
   * This will cause the following changes to rendering:
   * - The Loader will use "absolute" positioning and fill the parent element
   * - The Loader will render a backdrop to obscure the parent element
   *
   * Note that the parent element must use "relative" positioning in order for this to work as expected.
   */
  overlay?: boolean
  shape?: LoaderShape
  size?: number
  /**
   * The speed of the animation in ms; if none is provided, each animation will
   * choose its own default.
   */
  speed?: number
  type?: StyleTheme
}

export const Loader: React.FC<LoaderProps> = React.memo(
  ({
    baseColor,
    className,
    innerSize,
    overlay,
    shape = LoaderShape.DualRing,
    size = 40,
    speed,
    type = StyleTheme.Primary,
  }) => {
    const styles = React.useMemo(
      () =>
        getStyles({ baseColor, innerSize, overlay, shape, size, speed, type }),
      [baseColor, innerSize, overlay, shape, size, speed, type],
    )

    /**
     * Maps an array of empty values at the length required by the specified
     * LoaderShape. These will be used to render 'n' number of empty <div>s
     * so that the CSS has the correct number of targets for its magic.
     */
    const childMapper = React.useMemo(() => arr(childrenToTypeMap[shape]), [
      shape,
    ])

    return (
      <div className={styles.container} data-testid={loaderTestIds.container}>
        {overlay && (
          <div
            className={styles.backdrop}
            data-testid={loaderTestIds.backdrop}
          />
        )}

        <div
          className={classNames(styles.wrapper, className)}
          data-testid={loaderTestIds.wrapper}
        >
          <div className={styles.loader}>
            {childMapper.map((_, idx) => (
              <div key={idx} />
            ))}
          </div>
        </div>
      </div>
    )
  },
)
