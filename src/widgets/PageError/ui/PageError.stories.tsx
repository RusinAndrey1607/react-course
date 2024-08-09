import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { PageError } from './PageError';

const meta = {
    title: 'widget/PageError',
    component: PageError,
    args: {
    },

} satisfies ComponentMeta<typeof PageError>;

export default meta;

type Story = ComponentStory<typeof PageError>
const Template:Story = (args) => <PageError {...args} />;

export const PageErrorLight:Story = Template.bind({});

export const PageErrorDark:Story = Template.bind({});
PageErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
