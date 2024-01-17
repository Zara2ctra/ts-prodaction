import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Select } from 'shared/ui/Select/Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Укажите значение',
    options: [
        { value: '123', content: 'Stro4ka' },
        { value: '321', content: 'Stroka' },
        { value: '154', content: 'Strokuwka' },
        { value: '321', content: 'Stro4e4ka' },
    ],
};

export const Dark = Template.bind({});
Dark.args = {
    label: 'Выборы',
    options: [
        { value: '123', content: 'Stro4ka' },
        { value: '321', content: 'Stroka' },
        { value: '154', content: 'Strokuwka' },
        { value: '321', content: 'Stro4e4ka' },
    ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
