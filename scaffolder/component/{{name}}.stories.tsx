import { action } from '@storybook/addon-actions'
import { Story, Meta } from '@storybook/react'
import * as React from 'react'

import { {{name}}, {{name}}Props } from './{{name}}'

export default {
  argTypes: {
    children: { control: { disable: true } },
  },
  component: {{name}},
  title: 'Components/{{name}}',
} as Meta

export const Basic{{name}}: Story<{{name}}Props> = args => (
    <{{name}} {...args} />
)
