import { css, cx } from 'emotion'
import { shade, tint } from 'polished'

import { boxShadowLight, colors } from '../styles'
import { joinCls } from '../utils'

import { CardProps } from './Card'

type Props = Required<Pick<CardProps, 'hoverable'>>

const bgColor = shade(0.01, colors.base.white)
const bgColorHover = tint(0.9, colors.theme.primary)
const borderColor = shade(0.1, bgColor)

const card = () => css`
  ${boxShadowLight()};

  background: ${bgColor};
  border-radius: 2px;
  border: solid 1px ${borderColor};
  padding: 24px;
  transition: background-color 200ms ease;

  & + & {
    margin-top: 8px;
  }
`

const hoverableCard = () => css`
  &:hover {
    background-color: ${bgColorHover};
    cursor: pointer;
  }
`

export default (props: Props) => {
  const hoverable = props.hoverable && hoverableCard()

  return {
    card: joinCls([card(), cx(hoverable)]),
  }
}
