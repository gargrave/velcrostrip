import * as React from 'react'

import { StyleTheme } from '../styles'
import { Loader, LoaderShape } from './Loader'

const Spacer = () => <span style={{ marginLeft: 8 }} />

const BasicLoaders = () => (
  <>
    <h3>Basic Loaders</h3>
    <p>DualRing loaders in each theme with default sizing.</p>
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
        <span className="code">DualRing</span>
      </li>
      <li>
        <span className="code">SingleRing</span>
      </li>
      <li>
        <span className="code">Ellipsis</span>
      </li>
    </ul>

    <Loader shape={LoaderShape.DualRing} type={StyleTheme.Primary} />
    <Spacer />
    <Loader shape={LoaderShape.SingleRing} type={StyleTheme.Secondary} />
    <Spacer />
    <Loader shape={LoaderShape.Ellipsis} type={StyleTheme.Success} />
  </div>
)

/**
 * @visibleName Loader
 */
const LoaderExamples: React.FC = () => {
  return (
    <>
      <BasicLoaders />
      <Sizes />
      <InnerSize />
      <LoaderShapes />
    </>
  )
}

export default LoaderExamples
