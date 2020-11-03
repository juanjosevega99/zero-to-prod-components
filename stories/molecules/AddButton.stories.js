import React from 'react'
import AddButton from '../../molecules/AddButton'

export default {
  title: 'Molecules/AddButton',
  component: AddButton,
}

export const Default = () => <AddButton>Tap to add the task</AddButton>

export const Types = () => (
  <>
    <AddButton type="primary">Tap to add the task</AddButton>
    <AddButton type="secondary">Tap to add the task</AddButton>
  </>
)

export const Editable = () => (
  <AddButton onAdd={alert} isEditable>
    Tap to add the task
  </AddButton>
)
