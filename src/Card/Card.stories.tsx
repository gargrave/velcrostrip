import styled from '@emotion/styled'
import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Button } from '../Button'
import { Card, CardProps } from './Card'

export default {
  argTypes: {
    children: { control: { disable: true } },
    className: { control: { disable: true } },
  },
  component: Card,
  title: 'Components/Card',
} as Meta

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0.5rem 0;
`

export const BasicCard: Story<CardProps> = (args) => (
  <Card {...args}>
    <CardTitle>This is a basic Card</CardTitle>

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

    <Button onClick={action('Card button clicked!')}>Thanks!</Button>
  </Card>
)

export const HoverableCard: Story<CardProps> = (args) => (
  <Card {...args} hoverable={true} onClick={action('Hoverable Card clicked!')}>
    <CardTitle>Hoverable/Clickable</CardTitle>

    <p>
      Use the <span className="code">hoverable</span> prop to add a hover state
      to a Card. This combined with the <span className="code">onClick</span>{' '}
      callback can be useful if you need to use a Card as a link.
    </p>

    <p>
      This example will simply log the current date/time to your console when
      clicked.
    </p>
  </Card>
)
