import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AboutPage from './AboutPage';

const meta = {
    title: 'page/AboutPage',
    component: AboutPage,
    args: {
    },

} satisfies ComponentMeta<typeof AboutPage>;

export default meta;

type Story = ComponentStory<typeof AboutPage>
const Template:Story = (args) => <AboutPage {...args} />;

export const AboutPageLight:Story = Template.bind({});

export const AboutPageDark:Story = Template.bind({});
AboutPageDark.decorators = [ThemeDecorator(Theme.DARK)];
