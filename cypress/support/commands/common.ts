import { USER_LS_KEY } from '../../../src/shared/const/localStorage';
import { User } from '../../../src/entities/User';
import { selectByTestId } from '../../helpers/selectByTestId';

export const login = (login: string = 'admin', password: string = '1234') => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            login,
            password,
        },
    }).then(({ body }) => {
        window.localStorage.setItem(USER_LS_KEY, JSON.stringify(body));
        // Возвращенные сервером данные (id пользователя)
        return body;
    });
};

export const getByTestId = (testId: string) => cy.get(selectByTestId(testId));

declare global {
    namespace Cypress {
        interface Chainable {
            login(login?: string, password?: string): Chainable<User>;
            getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}
