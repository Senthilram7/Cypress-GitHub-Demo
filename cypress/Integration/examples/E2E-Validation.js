import HomePage from '../../support/Pageobjectpattern'

describe('Validation test suite', function() 
{
  before(function() {

  cy.fixture('DataDrive').then(function(data)
  {
  this.data=data
  })
    })

    it('Form validation ', function() {
const homepage =new HomePage()
  //Navigating to the page
homepage.getURL().visit(this.data.url)

  //validating URL
  cy.url().should('include', 'https://demoqa.com/')

  //Method 1- Opening new tab we have handled to remove attr
  cy.get('.home-banner a').invoke('removeAttr','target').click()

 //2nd method- prop jquerymethod used to get the value of href property for child tab or window
 /* cy.get('.home-banner a').then(function(el)
  {
const url=el.prop('href')
cy.log(url)
cy.visit(url)

  }) */

  //Text Validation on the page
  cy.get('.enroll__heading').should('contains.text','Selenium')

  //Click on Registration button
homepage.clickonButton().click()
 
 //Values Entering into input fields
homepage.getName().type(this.data.name)
homepage.getLastName().type(this.data.lastname)
homepage.getemail().type(this.data.email)
homepage.getmobile().type(this.data.mobile)
homepage.getcountry().select(this.data.country)
homepage.getcity().type(this.data.city)
cy.wait(3000)
//cy.get('button.modal__close').click()  
homepage.getmessage().type(this.data.message)
//Submit the form
homepage.submit().click()

/* cy.get('input:invalid').should('have.length', 1)
cy.get('[type="text"]').then(($input) => {
  expect($input[0].validationMessage).to.eq('Please fill out this field.') 
})

  })
//cy.get('[button.btn.btn-block.btn-primary]:invalid').invoke('prop', 'validationMessage').should('contain', 'Please fill out this field.')
  //Success Message validation
  //cy.get('div.alert-success').should('contains.text','We have received your message. We will soon get in touch.')
*/
})

})
      
  

