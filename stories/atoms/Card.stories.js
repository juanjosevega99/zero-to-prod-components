import React from 'react'
import Card from '../../atoms/Card'

export default {
  title: 'Atoms/Card',
  component: Card,
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Story />
      </div>
    ),
  ],
}

export const Default = () => <Card>Default Card</Card>

export const Colors = () => (
  <>
    <Card color="default">Default Color</Card>
    <Card color="primary">Primary Color</Card>
    <Card color="secondary">Secondary Color</Card>
  </>
)
