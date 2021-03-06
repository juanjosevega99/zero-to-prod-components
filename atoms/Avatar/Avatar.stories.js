import { Avatar, styles, options } from '.'

import {
  getTemplate,
  getListTemplate,
  getOptionsArgTypes,
} from '../../helpers/storybook'

const Template = getTemplate(Avatar, styles)
const ListTemplate = getListTemplate(Avatar, styles)

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  args: {
    __sb: { fd: 'row' },
    src: 'https://picsum.photos/id/1027/200/200',
  },
  argTypes: {
    size: getOptionsArgTypes(options.sizes),
  },
}

export const Default = Template.bind({})

export const Sizes = ListTemplate.bind({})
Sizes.args = {
  items: options.sizes.map((size) => ({ size })),
}
