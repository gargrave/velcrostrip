import { css, cx } from 'emotion'
import { shade, tint } from 'polished'

import { boxShadowLight, colors } from '../styles'
import { CardProps } from './Card'

type Props = Required<Pick<CardProps, 'hoverable'>>

const bgColor = shade(0.01, colors.base.white)
const bgColorHover = tint(0.9, colors.theme.primary)
const borderColor = shade(0.1, bgColor)

const card = () => {
  return css`
    ${boxShadowLight};

    background-color: ${bgColor};
    border-radius: 2px;
    border: solid 1px ${borderColor};
    margin: 8px auto;
    max-width: 800px;
    padding: 12px 24px;
    text-align: center;
    transition: all 200ms ease;
  `
}

const hoverableCard = () => {
  return css`
    &:hover {
      background-color: ${bgColorHover};
      cursor: pointer;
    }
  `
}

export default (props: Props) => {
  const baseCardStyles = card()

  const hoverable = props.hoverable && hoverableCard()

  return {
    card: [baseCardStyles, cx(hoverable)].join(' '),
  }
}
