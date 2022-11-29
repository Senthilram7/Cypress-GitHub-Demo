describe('My First test suite', function() 
{

    it('My first test case', function() {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)  
cy.get('.product:visible').should('have.length',4)
//parent child chaining
cy.get('.products').as('ProductLocator')
cy.get('@ProductLocator').find('.product').should('have.length',4)

//Eliminate Invisible part and find selecting product using eq method:

//then() method waits until the promise is resolved and goes to the next step.
cy.get('@ProductLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
{
    console.log('sf')
})


//Validate with grabbing text and click on required product
//Iterate over an array
cy.get('@ProductLocator').find('.product').each(($el, index, $list) => {

const textveg=$el.find('h4.product-name').text()
if(textveg.includes('Cashews'))

{
$el.find('button').click()
}
})
//assert if logo text is correctly displayed
cy.get('.brand').should('have.text','GREENKART')

//This is to print in logs
cy.get('.brand').then(function(logoelement)
{
    cy.log(logoelement.text())

})

cy.get('.cart-icon img').click()
cy.get('div.cart-preview div.action-block button:nth-child(1)').click()

cy.get('button:nth-child(14)').click()
//cy.get('.products div button').eq(2).contains('Place Order').click()
//const logo=cy.get('.brand')
//cy.log(cy.get('.brand').text())



})

    })



