let profileId = '';

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    it('И профиль успешно загружается', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'Илья');
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('И редактирует его', () => {
        const newName = 'Илья';
        const newLastname = 'Пономарев';
        cy.updateProfile(newName, newLastname);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
        cy.getByTestId('ProfileCard.lastname').should(
            'have.value',
            newLastname,
        );
    });
});
