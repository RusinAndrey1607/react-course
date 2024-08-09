import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { PageLoader } from './PageLoader';

const meta = {
    title: 'widget/PageLoader',
    component: PageLoader,
    args: {
    },

} satisfies ComponentMeta<typeof PageLoader>;

export default meta;

type Story = ComponentStory<typeof PageLoader>
const Template:Story = (args) => <PageLoader {...args} />;

export const PageLoaderLight:Story = Template.bind({});

export const PageLoaderDark:Story = Template.bind({});
PageLoaderDark.decorators = [ThemeDecorator(Theme.DARK)];
