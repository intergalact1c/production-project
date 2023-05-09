import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { CommentCard } from './CommentCard';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

const args = {
    comment: {
        id: '1',
        user: {
            id: '1',
            login: 'login',
            avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
        },
        text: 'Текст комментария',
    },
};

export const Light = Template.bind({});
Light.args = args;

export const Dark = Template.bind({});
Dark.args = args;
Dark.decorators = [ThemeDecorator(Theme.DARK)];
