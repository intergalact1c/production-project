import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Profile } from 'entities/Profile';
import userEvent from '@testing-library/user-event';
import { avatarUrl } from 'shared/assets/tests/urls';
import { $api } from 'shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    first: 'Илья',
    lastname: 'Пономарев',
    age: 99,
    city: 'Нижний Новгород',
    login: 'admin',
    avatar: avatarUrl,
    currency: Currency.RUB,
    country: Country.Russia,
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: '1', username: 'admin' },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

// npm run test:unit EditableProfileCard.test.tsx -- --watch
describe('features/EditableProfileCard', () => {
    test('disable readonly mode', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });

    test('restore state after cancel', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'firstname');
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'lastname');

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('firstname');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('lastname');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('Илья');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('Пономарев');
    });

    test('validation error', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('send to server', async () => {
        const mockPutReq = jest.spyOn($api, 'put');// мокаем put запрос
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'firstname');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(mockPutReq).toHaveBeenCalled(); // ожидаем что запрос был вызван и отправлен на сервер
    });
});
