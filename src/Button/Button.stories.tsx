import { Story, Meta } from '@storybook/react'
import React from 'react'

import { StyleTheme } from '../styles'
import { Button, ButtonProps } from './Button'

export default {
  argTypes: {
    children: { control: { disable: true } },
    onClick: { action: 'action' },
  },
  component: Button,
  title: 'Components/Button',
} as Meta

const ButtonSet = (args: ButtonProps) => (
  <>
    <Button {...args} styleTheme={StyleTheme.Primary}>
      Primary
    </Button>
    <Button {...args} styleTheme={StyleTheme.Secondary}>
      Secondary
    </Button>
    <Button {...args} styleTheme={StyleTheme.Success}>
      Success
    </Button>
    <Button {...args} styleTheme={StyleTheme.Info}>
      Info
    </Button>
    <Button {...args} styleTheme={StyleTheme.Warning}>
      Warning
    </Button>
    <Button {...args} styleTheme={StyleTheme.Danger}>
      Danger
    </Button>
  </>
)

/**************************************************
 * Basic Button Examples
 **************************************************/

const Template: Story<ButtonProps> = (args) => <ButtonSet {...args} />

export const BasicButtons = Template.bind({})
BasicButtons.args = {}

export const DisabledButtons = Template.bind({})
DisabledButtons.args = {
  disabled: true,
}

/**************************************************
 * Block Buttons
 **************************************************/

export const BlockButtons: Story<ButtonProps> = (args) => (
  <>
    <h3>Block Buttons</h3>
    <p>
      Use the <span className="code">block</span> prop to create a block-style
      button.
    </p>
    <p>Block-style buttons will fill the width of the container.</p>
    <div>
      <Button block={true} {...args}>
        Primary Block
      </Button>
    </div>

    <p>
      If you want to have multiple block-style buttons fill together, simply
      make the container a flex container.
    </p>

    <div style={{ display: 'flex' }}>
      <Button {...args} block={true} styleTheme={StyleTheme.Primary}>
        Primary Block
      </Button>
      <Button {...args} block={true} styleTheme={StyleTheme.Secondary}>
        Secondary Block
      </Button>
      <Button {...args} block={true} styleTheme={StyleTheme.Success}>
        Success Block
      </Button>
    </div>

    <div style={{ display: 'flex', marginTop: 8 }}>
      <Button
        {...args}
        block={true}
        disabled={true}
        styleTheme={StyleTheme.Info}
      >
        Disabled Info Block
      </Button>
      <Button
        {...args}
        block={true}
        disabled={true}
        styleTheme={StyleTheme.Warning}
      >
        Disabled Warning Block
      </Button>
      <Button
        {...args}
        block={true}
        disabled={true}
        styleTheme={StyleTheme.Danger}
      >
        Disabled Danger Block
      </Button>
    </div>
  </>
)

/**************************************************
 * Loader Buttons
 **************************************************/

export const LoaderButtons: Story<ButtonProps> = (args) => {
  const [loading, setLoading] = React.useState(true)
  const toggleLoading = () => setLoading((prev) => !prev)

  return (
    <>
      <h3>Loader buttons</h3>
      <p>
        Use the <span className="code">loading</span> prop to show a loader in
        the button in place of its children.
      </p>
      <p>
        Loader buttons have native <span className="code">disabled</span> state
        applied to them, so they cannot be interacted with until the{' '}
        <span className="code">loading</span> state is removed.
      </p>

      <div style={{ marginBottom: 16 }}>
        <Button onClick={toggleLoading}>Toggle Loading</Button>
      </div>

      <ButtonSet {...args} showLoader={loading} />
    </>
  )
}
