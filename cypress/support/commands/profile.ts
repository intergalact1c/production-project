export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'some-token' },
    body: {
        id: '1',
        first: 'Илья',
        lastname: 'Пономарев',
        age: 34,
        currency: 'EUR',
        country: 'Russia',
        city: 'Нижний Новгород',
        login: 'super_admin',
        // eslint-disable-next-line max-len
        avatar: 'https://fs05.gcfiles.net/fileservice/file/thumbnail/h/5d6d5ef88b9f45226680eee66b1f3b4c.png/s/70x70/a/550990/sc/261',
    },
});

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
