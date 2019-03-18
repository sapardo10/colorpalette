describe('Generar una nueva paleta de colores', function() {
	it('Generates a new color palette', function() {
		cy.visit('nasty-food.surge.sh')
		cy.screenshot('new-palette-before')
		cy.contains('Generar nueva paleta').click()
		cy.screenshot('new-palette-after')
	})
})

describe('Volver al estado original de la aplicacion', function(){
	it('Return everything to white', function() {
		cy.visit('nasty-food.surge.sh')
		cy.screenshot()
		cy.contains('Generar nueva paleta').click()
		cy.contains('Limpiar paleta').click()
		cy.screenshot()
	})
})