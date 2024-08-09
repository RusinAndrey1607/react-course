import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { NotFoundPage } from './NotFoundPage';

const meta = {
    title: 'page/NotFoundPage',
    component: NotFoundPage,
    args: {
    },

} satisfies ComponentMeta<typeof NotFoundPage>;

export default meta;

type Story = ComponentStory<typeof NotFoundPage>
const Template:Story = (args) => <NotFoundPage {...args} />;

export const NotFoundPageLight:Story = Template.bind({});

export const NotFoundPageDark:Story = Template.bind({});
NotFoundPageDark.decorators = [ThemeDecorator(Theme.DARK)];
