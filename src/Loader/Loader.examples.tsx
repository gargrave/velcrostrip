import * as React from 'react'
import { css } from 'emotion'

import { StyleTheme } from '../styles'
import { Button } from '../Button'
import { Card } from '../Card'
import { Loader, LoaderShape } from './Loader'

const Spacer = () => <span style={{ marginLeft: 8 }} />

const BasicLoaders = () => (
  <>
    <h3>Basic Loaders</h3>
    <p>
      DualRing loaders in each theme with default sizing. By default, Loaders
      will use <span className="code">inline-flex</span> positioning, but you
      can change this behavior with the <span className="code">overlay</span>{' '}
      prop. (See the example below.)
    </p>
    <Loader type={StyleTheme.Primary} />
    <Spacer />
    <Loader type={StyleTheme.Secondary} />
    <Spacer />
    <Loader type={StyleTheme.Success} />
    <Spacer />
    <Loader type={StyleTheme.Info} />
    <Spacer />
    <Loader type={StyleTheme.Warning} />
    <Spacer />
    <Loader type={StyleTheme.Danger} />
  </>
)

const Sizes = () => (
  <>
    <h3>Different Sizes</h3>
    <p>
      Use the <span className="code">size</span> prop to change the overall size
      of the Loader.
    </p>
    <p>This example shows sizes 16-56 in increments of 8.</p>
    <Loader type={StyleTheme.Primary} size={16} />
    <Spacer />
    <Loader type={StyleTheme.Secondary} size={24} />
    <Spacer />
    <Loader type={StyleTheme.Success} size={32} />
    <Spacer />
    <Loader type={StyleTheme.Info} size={40} />
    <Spacer />
    <Loader type={StyleTheme.Warning} size={48} />
    <Spacer />
    <Loader type={StyleTheme.Danger} size={56} />
  </>
)

const InnerSize = () => (
  <>
    <h3>Changing Inner Size</h3>
    <p>
      Use the optional <span className="code">innerSize</span> prop to change
      how the Loader itself is rendered. This will have different effects
      depending on the Loader type. This can be useful if you want to change the
      way the Loader sizes itself (e.g. smaller elements on a large Loader, or
      vice-versa).
    </p>
    <p>
      If this is left blank, the Loader will try to set this value in a sane way
      based on the wrapper size. In most cases, you are probably safe using the
      default.
    </p>
    <Loader innerSize={5} type={StyleTheme.Primary} size={20} />
    <Spacer />
    <Loader innerSize={3} type={StyleTheme.Success} size={40} />
    <Spacer />
    <Loader innerSize={2} type={StyleTheme.Info} size={60} />
  </>
)

const LoaderShapes = () => (
  <div>
    <h3>Other shapes</h3>
    <p>
      Use the <span className="code">shape</span> prop along with the{' '}
      <span className="code">LoaderShape</span>enum to specify a Loader shape.
    </p>
    <p>
      All Loaders support the same set of props, although in certain cases, some
      props may behave slightly differently in order to ensure the Loader
      renders in a sane way.
    </p>
    <p>In order shown:</p>
    <ul>
      <li>
        <span className="code">DualRing</span> (<strong>Primary</strong> style)
      </li>
      <li>
        <span className="code">SingleRing</span> (<strong>Secondary</strong>{' '}
        style)
      </li>
      <li>
        <span className="code">Ellipsis</span> (<strong>Success</strong> style)
      </li>
      <li>
        <span className="code">Grid</span> (<strong>Warning</strong> style)
      </li>
    </ul>

    <Loader shape={LoaderShape.DualRing} type={StyleTheme.Primary} />
    <Spacer />
    <Loader shape={LoaderShape.SingleRing} type={StyleTheme.Secondary} />
    <Spacer />
    <Loader shape={LoaderShape.Ellipsis} type={StyleTheme.Success} />
    <Spacer />
    <Loader shape={LoaderShape.Grid} type={StyleTheme.Warning} />
  </div>
)

const OverlayLoader = () => {
  const styles = {
    card: css`
      margin-top: 16px;
      position: relative;
    `,
    title: css`
      font-size: 1.25rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
    `,
  }

  const [loading, setLoading] = React.useState(true)

  const toggle = () => {
    setLoading((prev) => !prev)
  }

  return (
    <div>
      <h3>Overlay Loader</h3>
      <p>
        Use the <span className="code">overlay</span> prop to tell a Loader to
        fill the parent container and render with a semi-transparent backdrop.
        This is useful, for example, for covering a form while a network request
        is pending.
      </p>
      <p>
        In order for this to work properly, the Loader must be within a parent
        with <span className="code">relative</span> positioning. This will be
        the parent element that the Loader will fill. (In the example below, the
        Card component has <span className="code">relative</span> positioning
        applied to it.
      </p>

      <Button onClick={toggle}>Toggle Loader</Button>

      <Card className={styles.card}>
        <div className={styles.title}>
          This is a Card with an overlay Loader
        </div>

        <p>
          You can see very clearly that the Loader expands to fill the parent
          and places a backdrop between itself and the parent&apos;s content.
        </p>

        {loading && <Loader overlay={true} size={56} />}
      </Card>
    </div>
  )
}

/**
 * @visibleName Loader
 */
const LoaderExamples = () => {
  return (
    <>
      <BasicLoaders />
      <hr />
      <Sizes />
      <hr />
      <InnerSize />
      <hr />
      <OverlayLoader />
      <hr />
      <LoaderShapes />
    </>
  )
}

export default LoaderExamples
