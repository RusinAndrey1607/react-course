import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    args: {
        children: 'Button',
    },

} satisfies ComponentMeta<typeof Button>;

export default meta;

type Story = ComponentStory<typeof Button>
const Template:Story = (args) => <Button {...args} />;

export const Clear:Story = Template.bind({});
Clear.args = {
    theme: ThemeButton.CLEAR,
};

export const ClearDark:Story = Template.bind({});
ClearDark.args = {
    theme: ThemeButton.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline:Story = Template.bind({});
Outline.args = {
    theme: ThemeButton.OUTLINE,
};

export const OutlineDark:Story = Template.bind({});
OutlineDark.args = {
    theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
