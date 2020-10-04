import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { shade, tint } from 'polished'

import { colors, shadows } from '../styles'
import { CardProps } from './Card'

const bgColor = shade(0.01, colors.base.white)
const bgColorHover = tint(0.9, colors.theme.primary)
const borderColor = shade(0.1, bgColor)

const hoverableStyles = css`
  cursor: pointer;

  &:hover {
    background-color: ${bgColorHover};
  }
`

export const StyledCard = styled.div<CardProps>`
  ${shadows.light};

  background: ${bgColor};
  border-radius: 2px;
  border: solid 1px ${borderColor};
  padding: 24px;
  transition: background-color 200ms ease;

  & + & {
    margin-top: 8px;
  }

  ${({ hoverable }) => hoverable && hoverableStyles};
`
