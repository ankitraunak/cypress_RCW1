describe('sauce demo spec', () => {
  it('logs in', () => {
    cy.visit('https:rcwtest.rcwilley.com/');
    cy.get('.title').should('have.text','Sale');  
  })
})
