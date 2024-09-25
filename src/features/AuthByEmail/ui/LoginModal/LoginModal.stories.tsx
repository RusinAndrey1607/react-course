import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginModal } from './LoginModal';

const meta = {
    title: 'feature/LoginModal',
    component: LoginModal,
    args: {
        isOpen: true,
    },
} satisfies ComponentMeta<typeof LoginModal>;

export default meta;
const state = {
    loginForm: {
        username: '123',
        email: 'user@gmail.com',
        password: '123456',
    },
};
type Story = ComponentStory<typeof LoginModal>;
const Template: Story = (args) => <LoginModal {...args} />;

export const Light: Story = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator(state)];

export const Dark: Story = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator(state), ThemeDecorator(Theme.DARK)];
