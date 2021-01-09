import { Meta, Story } from '@storybook/react'
import faker from 'faker'
import * as React from 'react'

import { Button } from '../../Button'
import { StyleTheme } from '../../styles'
import { useToast } from '../ToastProvider/ToastProvider.context'
import { Toast, ToastPublicProps } from './Toast'

const { lorem } = faker

export default {
  argTypes: {
    children: { control: { disable: true } },
  },
  component: Toast,
  title: 'Components/Toast',
} as Meta

const getText = () => lorem.lines(Math.ceil(Math.random() * 4))

export const BasicToast: Story<ToastPublicProps> = (args) => {
  const { showToast } = useToast()

  const showMeTheToast = (toastType: StyleTheme) => {
    showToast({
      ...args,
      msg: getText(),
      toastType,
    })
  }

  return (
    <div>
      <Button
        {...args}
        onClick={() => showMeTheToast(StyleTheme.Primary)}
        styleTheme={StyleTheme.Primary}
      >
        Primary Toast
      </Button>

      <Button
        {...args}
        onClick={() => showMeTheToast(StyleTheme.Secondary)}
        styleTheme={StyleTheme.Secondary}
      >
        Secondary Toast
      </Button>

      <Button
        {...args}
        onClick={() => showMeTheToast(StyleTheme.Success)}
        styleTheme={StyleTheme.Success}
      >
        Success Toast
      </Button>

      <Button
        {...args}
        onClick={() => showMeTheToast(StyleTheme.Info)}
        styleTheme={StyleTheme.Info}
      >
        Info Toast
      </Button>

      <Button
        {...args}
        onClick={() => showMeTheToast(StyleTheme.Warning)}
        styleTheme={StyleTheme.Warning}
      >
        Warning Toast
      </Button>

      <Button
        {...args}
        onClick={() => showMeTheToast(StyleTheme.Danger)}
        styleTheme={StyleTheme.Danger}
      >
        Danger Toast
      </Button>
    </div>
  )
}
