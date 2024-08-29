import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginModal } from './LoginModal';

const meta = {
    title: 'feature/LoginModal',
    component: LoginModal,
    args: {
        isOpen: true,
    },
} satisfies ComponentMeta<typeof LoginModal>;

export default meta;

type Story = ComponentStory<typeof LoginModal>;
const Template: Story = (args) => <LoginModal {...args} />;

export const Light: Story = Template.bind({});
Light.args = {};

export const Dark: Story = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
