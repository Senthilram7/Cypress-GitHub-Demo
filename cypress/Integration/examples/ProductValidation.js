describe('Validation test suite', function() 
{
  before(function() {

  cy.fixture('DataDrive').then(function(data)
  {
  this.data=data
  })
    })
    it('Select Product', function() {

cy.visit('https://rahulshettyacademy.com/angularpractice/shop')

this.data.productName.forEach(function(element) {
    cy.selectProduct(element)

});
// cy.selectProduct('iphone X')
// cy.selectProduct('Nokia Edge')
    })
})