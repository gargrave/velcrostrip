import styled from '@emotion/styled'
import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Button } from '../Button'
import { Card } from '../Card'
import { StyleTheme } from '../styles'
import { Loader, LoaderProps, LoaderShape } from './Loader'

export default {
  argTypes: {
    children: { control: { disable: true } },
    onClick: { action: 'action' },
  },
  component: Loader,
  title: 'Components/Loader',
} as Meta

/**************************************************
 * Basic Examples
 **************************************************/

const Spacer = styled.span`
  margin-left: 8px;
`

export const BasicLoaders: Story<LoaderProps> = (args) => (
  <>
    <h3>Basic Loaders</h3>
    <p>
      DualRing loaders in each theme with default sizing. By default, Loaders
      will use <span className="code">inline-flex</span> positioning, but you
      can change this behavior with the <span className="code">overlay</span>{' '}
      prop. (See the other example.)
    </p>

    <Loader {...args} styleTheme={StyleTheme.Primary} />
    <Spacer />
    <Loader {...args} styleTheme={StyleTheme.Secondary} />
    <Spacer />
    <Loader {...args} styleTheme={StyleTheme.Success} />
    <Spacer />
    <Loader {...args} styleTheme={StyleTheme.Info} />
    <Spacer />
    <Loader {...args} styleTheme={StyleTheme.Warning} />
    <Spacer />
    <Loader {...args} styleTheme={StyleTheme.Danger} />
  </>
)

export const OtherShapes: Story<LoaderProps> = (args) => (
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

    <Loader
      {...args}
      loaderShape={LoaderShape.DualRing}
      styleTheme={StyleTheme.Primary}
    />
    <Spacer />
    <Loader
      {...args}
      loaderShape={LoaderShape.SingleRing}
      styleTheme={StyleTheme.Secondary}
    />
    <Spacer />
    <Loader
      {...args}
      loaderShape={LoaderShape.Ellipsis}
      styleTheme={StyleTheme.Success}
    />
    <Spacer />
    <Loader
      {...args}
      loaderShape={LoaderShape.Grid}
      styleTheme={StyleTheme.Warning}
    />
  </div>
)

/**************************************************
 * Sizing Examples
 **************************************************/

export const ChangingSize = (args) => (
  <>
    <h3>Different Sizes</h3>
    <p>
      Use the <span className="code">size</span> prop to change the overall size
      of the Loader.
    </p>
    <p>This example shows sizes 16-56 in increments of 8.</p>
    <Loader {...args} styleTheme={StyleTheme.Primary} loaderSize={16} />
    <Spacer />
    <Loader {...args} styleTheme={StyleTheme.Secondary} loaderSize={24} />
    <Spacer />
    <Loader {...args} styleTheme={StyleTheme.Success} loaderSize={32} />
    <Spacer />
    <Loader {...args} styleTheme={StyleTheme.Info} loaderSize={40} />
    <Spacer />
    <Loader {...args} styleTheme={StyleTheme.Warning} loaderSize={48} />
    <Spacer />
    <Loader {...args} styleTheme={StyleTheme.Danger} loaderSize={56} />
  </>
)

export const ChangingInnerSize = (args) => (
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
    <Loader
      {...args}
      innerSize={5}
      styleTheme={StyleTheme.Primary}
      loaderSize={20}
    />
    <Spacer />
    <Loader
      {...args}
      innerSize={3}
      styleTheme={StyleTheme.Success}
      loaderSize={40}
    />
    <Spacer />
    <Loader
      {...args}
      innerSize={2}
      styleTheme={StyleTheme.Info}
      loaderSize={60}
    />
  </>
)

/**************************************************
 * Overlay Loader Examples
 **************************************************/

const RelativeCard = styled(Card)`
  margin-top: 16px;
  position: relative;
`

const OverlayTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`

export const OverlayLoader = (args) => {
  const [loading, setLoading] = React.useState(true)
  const toggleLoading = () => setLoading((prev) => !prev)

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

      <Button onClick={toggleLoading}>Toggle Loader</Button>

      <RelativeCard>
        <OverlayTitle>This is a Card with an overlay Loader</OverlayTitle>
        <p>
          You can see very clearly that the Loader expands to fill the parent
          and places a backdrop between itself and the parent&apos;s content.
        </p>
        {loading && <Loader {...args} overlay={true} loaderSize={56} />}
      </RelativeCard>
    </div>
  )
}
