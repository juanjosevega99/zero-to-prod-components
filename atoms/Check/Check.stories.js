import { Check, styles } from '.'

import { getTemplate } from '../../helpers/storybook'

const Template = getTemplate(Check, styles)

export default {
  title: 'Atoms/Check',
  component: Check,
}

export const Default = Template.bind({})

export const Checked = Template.bind({})
Checked.args = { checked: true }
