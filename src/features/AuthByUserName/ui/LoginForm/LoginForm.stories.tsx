import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd212' },
})];

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd212', error: 'ERROR' },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd212', isLoading: true },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd212' },
}), ThemeDecorator(Theme.DARK)];

export const withErrorDark = Template.bind({});
withErrorDark.args = {};
withErrorDark.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd212', error: 'ERROR' },
}), ThemeDecorator(Theme.DARK)];

export const LoadingDark = Template.bind({});
LoadingDark.args = {};
LoadingDark.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd212', isLoading: true },
}), ThemeDecorator(Theme.DARK)];
