describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
        cy.visit('https://losestudiantes.co')
        cy.screenshot()
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("wrongemail@example.com")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("1234")
        cy.get('.cajaLogIn').contains('Ingresar').click()
        cy.screenshot()
        cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
    })
})
describe('Los estudiantes creacion de cuenta', function(){
	it('Creates a new account and succeds at login', function() {
		cy.visit('https://losestudiantes.co')
        cy.screenshot()
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Pepito")
        cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Perez")
        cy.get('.cajaSignUp').find('input[name="correo"]').click().type("pruebaPepito6@prueba.com")
        cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('Administración')
        cy.get('.cajaSignUp').find('input[name="password"]').click().type("12345678")
        cy.get('.cajaSignUp').find('input[name="acepta"]').click()
        cy.get('.cajaSignUp').contains('Registrarse').click()
        cy.screenshot()
        cy.contains('Verifica tu correo y activa tu cuenta')
	}) 
})
describe('Los estudiantes buscar profesor', function() {
    it('Correctly searchs a teacher on the search bar', function() {
        cy.visit('https://losestudiantes.co')
        cy.screenshot()
        cy.contains('Cerrar').click()
        cy.get('.Select-input').find('input[aria-activedescendant="react-select-required_error_checksum--value"]').click({force: true}).type("Mauricio",{force: true})
        cy.screenshot()
        cy.contains('Mauricio Ariel')
    })
})
describe('Los estudiantes ir a la pagina del profesor', function() {
    it('It searchs a professor and goes to his webpage', function() {
        cy.visit('https://losestudiantes.co')
        cy.screenshot()
        cy.contains('Cerrar').click()
        cy.get('.Select-input').find('input[aria-activedescendant="react-select-required_error_checksum--value"]').click({force: true}).type("Mauricio",{force: true})
        cy.contains('Mauricio Ariel').click()
        cy.screenshot()
        cy.contains('Califica a este profesor')
    })
})
describe('Los estudiantes filtro por materias', function() {
    it('It checks that the subjects filter is working', function() {
        cy.visit('https://losestudiantes.co')
        cy.screenshot()
        cy.contains('Cerrar').click()
        cy.get('.Select-input').find('input[aria-activedescendant="react-select-required_error_checksum--value"]').click({force: true}).type("Mauricio",{force: true})
        cy.contains('Mauricio Ariel').click()
        cy.contains('Califica a este profesor')
        cy.get('.materias').find('input[name="id:DERE3707"]').click()
        cy.screenshot()
        cy.get('.columnMiddle').should('not.contain', 'Teoria juridica')
    })
})




