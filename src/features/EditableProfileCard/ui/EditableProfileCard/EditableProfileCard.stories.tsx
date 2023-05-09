import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { avatarUrl as AvatarImg } from '@/shared/assets/tests/urls';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { EditableProfileCard } from './EditableProfileCard';

export default {
    title: 'features/EditableProfileCard/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

const initialState = {
    profile: {
        form: {
            first: 'Имя',
            lastname: 'Фамилия',
            age: 19,
            city: 'Город',
            login: 'Логин',
            avatar: AvatarImg,
            currency: Currency.RUB,
            country: Country.Russia,
        },
        readonly: true,
    },
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator(initialState)];
