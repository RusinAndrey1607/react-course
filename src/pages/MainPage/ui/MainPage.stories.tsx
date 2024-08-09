import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';

const meta = {
    title: 'page/MainPage',
    component: MainPage,
    args: {
    },

} satisfies ComponentMeta<typeof MainPage>;

export default meta;

type Story = ComponentStory<typeof MainPage>
const Template:Story = (args) => <MainPage {...args} />;

export const MainPageLight:Story = Template.bind({});

export const MainPageDark:Story = Template.bind({});
MainPageDark.decorators = [ThemeDecorator(Theme.DARK)];
