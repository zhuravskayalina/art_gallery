describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/about');
  });

  afterEach(() => {
    cy.window().trigger('unload');
  });

  it('contains correct data', () => {
    cy.getByData('about-heading').should('exist');
  });
});
