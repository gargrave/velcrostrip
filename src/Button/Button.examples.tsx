import * as React from 'react'

import { StyleTheme } from '../styles'
import { Button, ButtonProps } from './Button'

const handleClick = () => console.log(`Click! ${Date.now()}`)

const ButtonSet = (props: Partial<ButtonProps> = {}) => (
  <>
    <Button onClick={handleClick} type={StyleTheme.Primary} {...props}>
      Primary
    </Button>
    <Button onClick={handleClick} type={StyleTheme.Secondary} {...props}>
      Secondary
    </Button>
    <Button onClick={handleClick} type={StyleTheme.Success} {...props}>
      Success
    </Button>
    <Button onClick={handleClick} type={StyleTheme.Info} {...props}>
      Info
    </Button>
    <Button onClick={handleClick} type={StyleTheme.Warning} {...props}>
      Warning
    </Button>
    <Button onClick={handleClick} type={StyleTheme.Danger} {...props}>
      Danger
    </Button>
  </>
)

const BasicButtons = () => (
  <>
    <h3>Basic themed Buttons</h3>
    <p>
      Use the <span className="code">type</span> prop to determine styling.
      (Defaults to <span className="code">Primary</span>)
    </p>
    <ButtonSet />
  </>
)

const DisabledButtons = () => (
  <>
    <h3>Disabled Buttons</h3>
    <p>
      Use the <span className="code">disabled</span> to disable a button. This
      applies both the native HTML attribute as well as custom styling.
    </p>
    <ButtonSet disabled={true} />
  </>
)

const OutlineButtons = () => (
  <>
    <h3>Outline styled Buttons</h3>
    <p>
      Use the <span className="code">outline</span> prop for outline styling.
    </p>
    <ButtonSet outline={true} />
  </>
)

const BlockButtons = () => (
  <>
    <h3>Block Buttons</h3>
    <p>
      Use the <span className="code">block</span> prop to create a block-style
      button.
    </p>
    <p>Block-style buttons will fill the width of the container.</p>
    <div>
      <Button block={true} onClick={handleClick} type={StyleTheme.Primary}>
        Primary Block
      </Button>
    </div>

    <p>
      If you want to have multiple block-style buttons fill together, simply
      make the container a flex container.
    </p>
    <div style={{ display: 'flex' }}>
      <Button block={true} onClick={handleClick} type={StyleTheme.Primary}>
        Primary Block
      </Button>
      <Button block={true} onClick={handleClick} type={StyleTheme.Secondary}>
        Secondary Block
      </Button>
      <Button block={true} onClick={handleClick} type={StyleTheme.Success}>
        Success Block
      </Button>
    </div>
    <div style={{ display: 'flex', marginTop: 8 }}>
      <Button
        block={true}
        disabled={true}
        onClick={handleClick}
        type={StyleTheme.Info}
      >
        Disabled Info Block
      </Button>
      <Button
        block={true}
        disabled={true}
        onClick={handleClick}
        type={StyleTheme.Warning}
      >
        Disabled Warning Block
      </Button>
      <Button
        block={true}
        disabled={true}
        onClick={handleClick}
        type={StyleTheme.Danger}
      >
        Disabled Danger Block
      </Button>
    </div>
  </>
)

const LoaderButtons = () => {
  const [loading, setLoading] = React.useState(true)

  const toggleLoading = () => setLoading(!loading)

  return (
    <>
      <h3>Loader buttons</h3>
      <p>
        Use the <span className="code">loading</span> to show a loader in the
        button in place of its children.
      </p>
      <p>
        Loader buttons have native <span className="code">disabled</span> state
        applied to them, so they cannot be interacted with until the{' '}
        <span className="code">loading</span> state is removed.
      </p>

      <div style={{ marginBottom: 16 }}>
        <Button onClick={toggleLoading}>Toggle Loading</Button>
      </div>

      <ButtonSet loading={loading} />
    </>
  )
}

/**
 * @visibleName Button
 */
const ButtonExamples: React.FC = React.memo(() => {
  return (
    <>
      <BasicButtons />
      <DisabledButtons />
      <OutlineButtons />
      <BlockButtons />
      <LoaderButtons />
    </>
  )
})

export default ButtonExamples
