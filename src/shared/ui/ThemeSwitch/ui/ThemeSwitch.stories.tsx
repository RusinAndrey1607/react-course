import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeSwitch } from './ThemeSwitch';

const meta = {
    title: 'shared/ThemeSwitch',
    component: ThemeSwitch,
    args: {
    },

} satisfies ComponentMeta<typeof ThemeSwitch>;

export default meta;

type Story = ComponentStory<typeof ThemeSwitch>
const Template:Story = (args) => <ThemeSwitch {...args} />;

export const ThemeSwitchLight:Story = Template.bind({});

export const ThemeSwitchDark:Story = Template.bind({});
ThemeSwitchDark.decorators = [ThemeDecorator(Theme.DARK)];
