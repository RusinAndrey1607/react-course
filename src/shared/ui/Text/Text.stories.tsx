import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
    args: {},
} satisfies ComponentMeta<typeof Text>;

export default meta;

type Story = ComponentStory<typeof Text>;
const Template: Story = (args) => <Text {...args} />;

export const Primary: Story = Template.bind({});
Primary.args = {
    title: 'Title lorem ipsun',
    text: 'Text lorem ipsun',
};

export const PrimaryDark: Story = Template.bind({});
PrimaryDark.args = {
    title: 'Title lorem ipsun',
    text: 'Text lorem ipsun',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error: Story = Template.bind({});
Error.args = {
    title: 'Title lorem ipsun',
    text: 'Text lorem ipsun',
    theme: TextTheme.ERROR,
};

export const ErrorDark: Story = Template.bind({});
ErrorDark.args = {
    title: 'Title lorem ipsun',
    text: 'Text lorem ipsun',
    theme: TextTheme.ERROR,

};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle: Story = Template.bind({});
OnlyTitle.args = {
    title: 'Title lorem ipsun',
};
export const OnlyText: Story = Template.bind({});
OnlyText.args = {
    text: 'Text lorem ipsun',
};
export const OnlyTitleDark: Story = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title lorem ipsun',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark: Story = Template.bind({});
OnlyTextDark.args = {
    text: 'Text lorem ipsun',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorText: Story = Template.bind({});
ErrorText.args = {
    text: 'Text error lorem ipsun',
    theme: TextTheme.ERROR,
};
ErrorText.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorTitle: Story = Template.bind({});
ErrorTitle.args = {
    title: 'Title lorem ipsun error',
    theme: TextTheme.ERROR,

};
ErrorTitle.decorators = [ThemeDecorator(Theme.DARK)];
