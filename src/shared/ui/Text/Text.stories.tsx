import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title loren ipsun',
    text: 'text loren ipsun text loren ipsun',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title loren ipsun',
    text: 'text loren ipsun text loren ipsun',
    theme: TextTheme.ERROR,
};

export const PrimaryOnlyTitle = Template.bind({});
PrimaryOnlyTitle.args = {
    title: 'Title loren ipsun',
};

export const PrimaryOnlyText = Template.bind({});
PrimaryOnlyText.args = {
    text: 'text loren ipsun text loren ipsun',
};

export const Dark = Template.bind({});
Dark.args = {
    title: 'Title loren ipsun',
    text: 'text loren ipsun text loren ipsun',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'Title loren ipsun',
    text: 'text loren ipsun text loren ipsun',
    theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkOnlyTitle = Template.bind({});
DarkOnlyTitle.args = {
    title: 'Title loren ipsun',
};
DarkOnlyTitle.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkOnlyText = Template.bind({});
DarkOnlyText.args = {
    text: 'text loren ipsun text loren ipsun',
};
DarkOnlyText.decorators = [ThemeDecorator(Theme.DARK)];
