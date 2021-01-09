import styled from '@emotion/styled'
import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/react'
import React from 'react'

import { StyleTheme } from '../styles'
import { Alert, AlertProps } from './Alert'

export default {
  argTypes: {
    children: { control: { disable: true } },
  },
  component: Alert,
  title: 'Components/Alert',
} as Meta

const Header = styled.div`
  margin-bottom: 16px;
`

export const BasicAlerts: Story<AlertProps> = (args) => (
  <>
    <Header>
      Basic Alerts, which can display any kind of React children you need
      (usually just text). By default, they are permanent, but you can make them
      dismissable with the <span className="code">dismissable</span> prop (see
      the next example).
    </Header>

    <Alert {...args} styleTheme={StyleTheme.Primary}>
      This is a Primary alert, which is the default type if no other type is
      specified.
    </Alert>
    <Alert {...args} styleTheme={StyleTheme.Secondary}>
      This is a Secondary alert.
    </Alert>
    <Alert {...args} styleTheme={StyleTheme.Info}>
      This is an Info alert. Nothing serious here. Just letting you know.
    </Alert>
    <Alert {...args} styleTheme={StyleTheme.Warning}>
      This is a Warning alert. You should <em>maybe</em> take this information
      seriously.
    </Alert>
    <Alert {...args} styleTheme={StyleTheme.Danger}>
      This is a Danger alert. This is very serious business!
    </Alert>
  </>
)

export const Dismissable: Story<AlertProps> = (args) => (
  <>
    <Header>
      This Alert is dismissable! You can see it has a button on the right, which
      will call the <span className="code">onDismiss</span> callback after it
      has fully transitioned out.
    </Header>

    <Alert {...args} onDismiss={action('Alert Dismissed!')}>
      <span>This Alert will go away when you click the button.</span>
    </Alert>

    <p>
      And this is some more stuff underneath the Alert. It will move back into
      place once the Alert is dismissed.
    </p>
  </>
)
