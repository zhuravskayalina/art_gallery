describe('User Journey', () => {
  context('Navigation', () => {
    it('a user can navigate through application pages', () => {
      cy.visit('http://localhost:5173');
      cy.getByData('nav-home').should('exist').click();
      cy.location('pathname').should('eq', '/');
      cy.getByData('nav-exhibitions').should('exist').click();
      cy.location('pathname').should('eq', '/exhibitions');
      cy.getByData('nav-about').should('exist').click();
      cy.location('pathname').should('eq', '/about');
      cy.getByData('nav-feedback').should('exist').click();
      cy.location('pathname').should('eq', '/feedback');
    });

    it('shows 404 page when bad location', () => {
      cy.visit('http://localhost:5173/bad-url');
      cy.getByData('not-found').should('exist');
    });
  });

  context('API Cards', () => {
    it('a user can go to exhibitions page and open then close a card', () => {
      cy.visit('http://localhost:5173/exhibitions');
      cy.getByData('rm-cards').should('exist').find('button').eq(0).click();
      cy.getByData('rm-big-card').should('exist').contains('Species');
      cy.getByData('modal-close').click();
      cy.getByData('modal').should('not.have.class', 'modal_open');
    });

    it('a user can search through cards', () => {
      cy.visit('http://localhost:5173/exhibitions');
      cy.getByData('searchbar').should('exist').type('summer{enter}');
      cy.getByData('rm-cards').should('exist').find('button').eq(0).click();
      cy.getByData('rm-big-card').contains('Summer Smith');
    });
  });
});
