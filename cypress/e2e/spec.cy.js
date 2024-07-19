/// <reference types="cypress" />

it('highlights the input element', () => {
  cy.visit('/')
  cy.get('input[aria-label="Search the web"]').invoke('css', {
    background: 'yellow',
    border: '3px solid red',
  })
  cy.screenshot('input-highlighted', {
    overwrite: true,
    clip: { x: 0, y: 0, width: 1200, height: 1000 },
  })
})
