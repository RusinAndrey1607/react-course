import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { NavBar } from './NavBar';

const meta = {
    title: 'widget/NavBar',
    component: NavBar,
    args: {
    },

} satisfies ComponentMeta<typeof NavBar>;

export default meta;

type Story = ComponentStory<typeof NavBar>
const Template:Story = (args) => <NavBar {...args} />;

export const NavBarLight:Story = Template.bind({});

export const NavBarDark:Story = Template.bind({});
NavBarDark.decorators = [ThemeDecorator(Theme.DARK)];
