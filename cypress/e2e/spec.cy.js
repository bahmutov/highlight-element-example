it('highlights the input element', () => {
  cy.visit('/')

  const border = '3px solid red'
  cy.get('input[aria-label="Search the web"]').then(($el) => {
    $el[0].style.border = border
  })
  cy.screenshot('input-highlighted', {
    overwrite: true,
    clip: { x: 0, y: 0, width: 1200, height: 1000 },
  })
})
