import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { avatarUrl } from '@/shared/assets/tests/urls';
import { AvatarDropDown } from './AvatarDropDown';

export default {
    title: 'features/AvatarDropDown',
    component: AvatarDropDown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof AvatarDropDown>;

const Template: ComponentStory<typeof AvatarDropDown> = (args) => <AvatarDropDown {...args} />;

const initialState = {
    user: {
        authData: {
            avatar: avatarUrl,
        },
    },
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator(initialState)];
