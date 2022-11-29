
describe('My First test suite', function() 
{

    it('My first test case', function() {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get("input#checkBoxOption1").check().should('be.checked').and('have.value','option1')
cy.get("input#checkBoxOption1").uncheck().should('not.be.checked')
//cy.get('input[type="checkbox"]').check()
cy.get('input[type="checkbox"]').check(['option2','option3'])
cy.get('select').select('option1').should('have.value','option1')

cy.get('#autocomplete').type('ind')
cy.get('.ui-menu-item div').each(($el, index, $list) => {

if($el.text()==="India")
{

$el.click()

}

})})

})