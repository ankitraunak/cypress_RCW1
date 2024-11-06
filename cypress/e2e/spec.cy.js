describe('sauce demo spec', () => {
  it('logs in', () => {
    cy.visit('https://rcwtest.rcwilley.com/');
    cy.wait(3000)
    cy.get('body').then($body => {
        if ($body.find('.modal-header').length === 1) {
            cy.get('.btn-close').click();
            cy.log("modal header appeared");
        }
      })
    cy.wait(3000);
        cy.get('.tile-container').should('be.visible')
        cy.get('.tile-container').find('.tag-tile').contains("Refrigerators").click();
        cy.url().should('include', text);  
  })
})