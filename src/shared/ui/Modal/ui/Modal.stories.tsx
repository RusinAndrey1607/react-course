import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    args: {
        children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quia modi ullam repellendus impedit adipisci, saepe doloribus nihil vero vel repellat natus enim itaque sint corrupti culpa sit non et.',
        isOpen: true,
    },

} satisfies ComponentMeta<typeof Modal>;

export default meta;

type Story = ComponentStory<typeof Modal>
const Template:Story = (args) => <Modal {...args} />;

export const Ligth:Story = Template.bind({});
Ligth.args = {
};

export const Dark:Story = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
