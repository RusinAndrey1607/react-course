import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

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
    theme: ButtonTheme.CLEAR,
};

export const ClearDark:Story = Template.bind({});
ClearDark.args = {
    theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline:Story = Template.bind({});
Outline.args = {
    theme: ButtonTheme.OUTLINE,
};

export const OutlineDark:Story = Template.bind({});
OutlineDark.args = {
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInverted:Story = Template.bind({});
BackgroundInverted.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const BackgroundInvertedDark:Story = Template.bind({});
BackgroundInvertedDark.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background:Story = Template.bind({});
Background.args = {
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundDark:Story = Template.bind({});
BackgroundDark.args = {
    theme: ButtonTheme.BACKGROUND,
};
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Square:Story = Template.bind({});
Square.args = {
    theme: ButtonTheme.CLEAR,
    square: true,
    children: '',

};

export const SquareDark:Story = Template.bind({});
SquareDark.args = {
    theme: ButtonTheme.CLEAR,
    square: true,
    children: '',
};
SquareDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeM:Story = Template.bind({});
SizeM.args = {
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.M,
};

export const SizeL:Story = Template.bind({});
SizeL.args = {
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.L,
};
export const SizeXL:Story = Template.bind({});
SizeXL.args = {
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.XL,
};
export const Disabled:Story = Template.bind({});
Disabled.args = {
    theme: ButtonTheme.OUTLINE,
    disabled: true,
    size: ButtonSize.M,
};
