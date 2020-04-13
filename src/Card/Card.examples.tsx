import * as React from 'react'
import { css } from 'emotion'

import { Button } from '../Button'
import { Card } from './Card'

const styles = {
  title: css`
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  `,
  title2: css`
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 0;
  `,
}

const BasicCard = () => (
  <Card>
    <div className={styles.title}>This is a basic Card</div>
    <p>
      This is a paragraph within the card that has a lot of great information.
      If you were looking for great information, then you have come to the right
      place!
    </p>
    <p>
      But wait! Just when you thought the information couldn&apos;t get any more
      great, it does! Because this paragraph is even <em>more</em> full of great
      information!
    </p>
    <p>
      This Card also has a Button in it, although in this case it doesn&apos;t
      actually do anything.
    </p>
    <Button onClick={() => void 0}>Thanks!</Button>
  </Card>
)

const HoverableCard = () => (
  <>
    <h3>Hoverable/Clickable</h3>
    <p>
      Use the <span className="code">hoverable</span> prop to add a hover state
      to a Card. This combined with the <span className="code">onClick</span>{' '}
      callback can be useful if you need to use a Card as a link.
    </p>
    <p>
      This example will simply log the current date/time to your console when
      clicked.
    </p>

    <Card
      hoverable={true}
      onClick={() =>
        console.log(`Card clicked at ${new Date().toDateString()}!`)
      }
    >
      <div className={styles.title2}>
        This card is hoverable! Click it to log something!
      </div>
    </Card>
  </>
)

/**
 * A very barebones card implementation. This is effectively just a styled div that
 * will render whatever children you pass to it.
 *
 * There is no "built-in" styling for any children, so you want to be sure that
 * the children you provide have your desired styling already applied to them.
 *
 * e.g. The first example here uses these styles (`emotion`) on the children.
 *
 * ```ts
  const styles = {
    title: css`
      font-size: 1.25rem;
      font-weight: 500;
      margin-bottom: .5rem;
    `,
  }
 * ```
 *
 * @visibleName Card
 */
const CardExamples: React.FC = () => {
  return (
    <>
      <BasicCard />
      <hr />
      <HoverableCard />
    </>
  )
}

export default CardExamples
