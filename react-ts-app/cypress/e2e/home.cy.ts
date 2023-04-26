describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('contains header', () => {
    cy.getByData('header');
  });

  it('the heading contains the correct text', () => {
    cy.getByData('home-heading').contains('Featured Paintings');
  });

  it('contains footer', () => {
    cy.getByData('footer');
  });
});
