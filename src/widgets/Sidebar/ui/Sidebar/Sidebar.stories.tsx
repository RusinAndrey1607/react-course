import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';

const meta = {
    title: 'widget/Sidebar',
    component: Sidebar,
    args: {
    },

} satisfies ComponentMeta<typeof Sidebar>;

export default meta;

type Story = ComponentStory<typeof Sidebar>
const Template:Story = (args) => <Sidebar {...args} />;

export const SidebarLight:Story = Template.bind({});

export const SidebarDark:Story = Template.bind({});
SidebarDark.decorators = [ThemeDecorator(Theme.DARK)];
