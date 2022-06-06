describe('My First Test', () => {
    it('should open', () => {
        cy.visit('/');
        cy.contains('body', 'Hello World!');
    });
});
