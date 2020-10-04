import * as React from 'react'

import { LoaderShape } from '../Loader'
import { StyleTheme } from '../styles'
import { ButtonChildren, ButtonLoader, StyledButton } from './Button.styles'

// TODO: button sizes
type OptionalProps = {
  block: boolean
  disabled: boolean
  nativeButtonType: 'button' | 'submit' | 'reset'
  outline: boolean
  showLoader: boolean
  styleTheme: StyleTheme
}

type RequiredProps = {
  children: React.ReactNode
  onClick: () => void
}

export type ButtonProps = Partial<OptionalProps> & RequiredProps

const defaultOptionalProps: OptionalProps = Object.freeze({
  block: false,
  disabled: false,
  nativeButtonType: 'button',
  outline: false,
  showLoader: false,
  styleTheme: StyleTheme.Primary,
})

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, nativeButtonType, ...passThruProps } = props
  const { disabled, showLoader } = passThruProps

  const isDisabled = disabled || showLoader || false
  const type = nativeButtonType || 'button'

  return (
    <StyledButton
      {...defaultOptionalProps}
      {...passThruProps}
      disabled={isDisabled}
      type={type}
    >
      <ButtonChildren showLoader={showLoader}>{children}</ButtonChildren>
      <ButtonLoader
        baseColor="white"
        innerSize={3}
        loaderShape={LoaderShape.SingleRing}
        loaderSize={20}
        showLoader={showLoader}
      />
    </StyledButton>
  )
}
