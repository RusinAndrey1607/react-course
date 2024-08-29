import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginForm } from './LoginForm';

const meta = {
    title: 'feature/LoginForm',
    component: LoginForm,
    args: {},
} satisfies ComponentMeta<typeof LoginForm>;

export default meta;

type Story = ComponentStory<typeof LoginForm>;
const Template: Story = (args) => <LoginForm {...args} />;

export const Light: Story = Template.bind({});
Light.args = {};

export const Dark: Story = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
