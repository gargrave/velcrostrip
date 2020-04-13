import * as React from 'react'
import { css } from 'emotion'

import { Card } from './Card'

const styles = {
  title: css`
    font-size: 1.25rem;
    font-weight: 500;
  `,
}

/**
 * @visibleName Card
 */
const CardExamples: React.FC = () => {
  return (
    <Card>
      <div className={styles.title}>This is a basic Card</div>
    </Card>
  )
}

export default CardExamples
