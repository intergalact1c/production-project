import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'TESTING ARTICLE',
    subtitle: 'БиологиЯ',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/512px-Kotlin_Icon.svg.png',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: ['SCIENCE'],
    blocks: [],
};

export const createArticle = (article?: Article) =>
    cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: { Authorization: 'some-token' },
            body: article ?? defaultArticle,
        })
        .then((resp) => resp.body);

export const removeArticle = (articleId: string) =>
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'some-token' },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
