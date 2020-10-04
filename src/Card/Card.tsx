import * as React from 'react'

import { StyledCard } from './Card.styles'

export type CardProps = {
  children?: React.ReactNode
  className?: string
  hoverable?: boolean
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

export const Card: React.FC<CardProps> = (props) => {
  return <StyledCard {...props}>{props.children}</StyledCard>
}
