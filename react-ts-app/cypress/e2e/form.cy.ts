describe('Form', () => {
  it('does not allow to save feedback with empty fields', () => {
    cy.visit('http://localhost:5173/feedback');
    cy.getByData('feedback-form').should('exist');
    cy.getByData('form-controls-buttons').find('button').eq(1).click();
    cy.getByData('submit-modal').should('not.exist');
  });

  it.only(`shows success message and created feedback card when all fields is filled correctly`, () => {
    cy.visit('http://localhost:5173/feedback');
    cy.getByData('form-input-userName').type('Lola');
    cy.getByData('form-input-userEmail').type('lola@gmail.com');
    cy.getByData('form-textarea').type(`Hi! Great gallery and really cool artworks there!`);
    cy.get('#selectArt').select('Innocence');
    cy.getByData('form-date-input').type('1999-12-31');
    cy.getByData('form-file-input').selectFile('./src/assets/images/gallery1.jpeg');
    cy.getByData('form-checkboxes').find('input').eq(1).click();
    cy.getByData('form-switch-box').find('label').eq(0).click();
    cy.getByData('form-controls-buttons').find('button').eq(1).click();
    cy.getByData('submit-modal').should('exist');
    cy.getByData('feedback-cards')
      .should('exist')
      .find('[data-test="feedback-card"]')
      .eq(0)
      .contains('Feedback from Lola');
  });
});
