import * as React from 'react'

import getStyles from './Card.styles'

export type CardProps = {
  hoverable?: boolean
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverable = false,
  onClick,
}) => {
  const styles = React.useMemo(() => getStyles({ hoverable }), [hoverable])

  return (
    <div className={styles.card} onClick={onClick}>
      {children}
    </div>
  )
}
