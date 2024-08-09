import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
        children: 'AppLink',
    },

} satisfies ComponentMeta<typeof AppLink>;

export default meta;

type Story = ComponentStory<typeof AppLink>
const Template:Story = (args) => <AppLink {...args} />;

export const Primary:Story = Template.bind({});
Primary.args = {
    theme: AppLinkTheme.PRIMARY,
};

export const PrimaryDark:Story = Template.bind({});
PrimaryDark.args = {
    theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary:Story = Template.bind({});
Secondary.args = {
    theme: AppLinkTheme.SECONDARY,
};
export const SecondaryDark:Story = Template.bind({});
Primary.args = {
    theme: AppLinkTheme.PRIMARY,
};

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
