import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { avatarUrl as AvatarImg } from '@/shared/assets/tests/urls';
import { ProfileCard } from './ProfileCard';
// import AvatarImg from '../../assets/tests/avatar.png';

export default {
    title: 'entities/Profile/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: 'Имя',
        lastname: 'Фамилия',
        age: 19,
        city: 'Город',
        login: 'Логин',
        avatar: AvatarImg,
        currency: Currency.RUB,
        country: Country.Russia,
    },
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
