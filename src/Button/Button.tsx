import * as React from 'react'

import { Loader, LoaderShape } from '../Loader'
import { StyleTheme } from '../styles'

import getStyles from './Button.styles'

// TODO: button sizes
export type ButtonProps = {
  block?: boolean
  disabled?: boolean
  loading?: boolean
  onClick: () => void
  outline?: boolean
  type?: StyleTheme
}

export const Button: React.FC<ButtonProps> = React.memo(
  ({
    block = false,
    children,
    disabled = false,
    loading = false,
    onClick,
    outline = false,
    type = StyleTheme.Primary,
  }) => {
    const styles = React.useMemo(
      () => getStyles({ block, disabled, loading, outline, type }),
      [block, disabled, loading, outline, type],
    )

    return (
      <button
        className={styles.button}
        disabled={disabled || loading}
        onClick={onClick}
      >
        <span className={styles.buttonChildren}>{children}</span>
        <Loader
          baseColor="white"
          className={styles.buttonLoader}
          innerSize={3}
          shape={LoaderShape.SingleRing}
          size={20}
        />
      </button>
    )
  },
)
