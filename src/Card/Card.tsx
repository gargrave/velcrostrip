import * as React from 'react'

import { classNames } from '../utils'
import getStyles from './Card.styles'

export type CardProps = {
  className?: string
  hoverable?: boolean
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverable = false,
  onClick,
}) => {
  const styles = React.useMemo(() => getStyles({ hoverable }), [hoverable])

  return (
    <div className={classNames(styles.card, className)} onClick={onClick}>
      {children}
    </div>
  )
}
