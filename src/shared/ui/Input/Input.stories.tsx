import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

const meta = {
    title: 'shared/Input',
    component: Input,
    args: {
        placeholder: 'Email',
    },

} satisfies ComponentMeta<typeof Input>;

export default meta;

type Story = ComponentStory<typeof Input>
const Template:Story = (args) => <Input {...args} />;

export const Ligth:Story = Template.bind({});
Ligth.args = {
};

export const Dark:Story = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
