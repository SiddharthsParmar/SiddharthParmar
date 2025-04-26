describe('fundatmental2.cy.tsx', () => {
  it('playground', () => {
    cy.mount("")
  })

  it('loads the homepage and checks for content', () => {
    cy.visit('/')
    cy.contains('Welcome').should('be.visible') // Adjust based on actual content
  })

})