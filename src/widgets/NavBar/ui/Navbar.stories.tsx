import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
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
NavBarLight.decorators = [StoreDecorator({
    user: { authData: { id: 1, email: 'user@gmail.com' } },
})];

export const NavBarDark:Story = Template.bind({});
NavBarDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: { authData: { id: 1, email: 'user@gmail.com' } },
})];
export const NavBarLightNotAuth:Story = Template.bind({});
NavBarLightNotAuth.decorators = [StoreDecorator({
    user: { authData: null },
})];

export const NavBarDarkNotAuth:Story = Template.bind({});
NavBarDarkNotAuth.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: { authData: null },
})];
