import { css, SerializedStyles } from '@emotion/core'

const light = (): SerializedStyles => css`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07), 0 1px 2px rgba(0, 0, 0, 0.12);
`

export const shadows = Object.freeze({
  light,
})
