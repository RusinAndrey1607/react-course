import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

const meta = {
    title: 'feature/LoginForm',
    component: LoginForm,
    args: {
        initialIsLogin: true,
    },
} satisfies ComponentMeta<typeof LoginForm>;

export default meta;
const state = {
    loginForm: {
        username: '123',
        email: 'user@gmail.com',
        password: '123456',
    },
};
type Story = ComponentStory<typeof LoginForm>;
const Template: Story = (args) => <LoginForm {...args} />;

export const Light: Story = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator(state)];
export const Dark: Story = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator(state), ThemeDecorator(Theme.DARK)];

export const WithError: Story = Template.bind({});
WithError.args = {};
WithError.decorators = [StoreDecorator({
    loginForm: {
        error: 'Incorrect Email or Password',
    },
}), ThemeDecorator(Theme.DARK)];
export const Loading: Story = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    loginForm: {
        isLoading: true,
    },
}), ThemeDecorator(Theme.DARK)];
