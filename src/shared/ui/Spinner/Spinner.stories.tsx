import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Spinner } from './Spinner';

const meta = {
    title: 'shared/Spinner',
    component: Spinner,
    args: {
    },

} satisfies ComponentMeta<typeof Spinner>;

export default meta;

type Story = ComponentStory<typeof Spinner>
const Template:Story = (args) => <Spinner {...args} />;

export const SpinnerLight:Story = Template.bind({});

export const SpinnerDark:Story = Template.bind({});
SpinnerDark.decorators = [ThemeDecorator(Theme.DARK)];
