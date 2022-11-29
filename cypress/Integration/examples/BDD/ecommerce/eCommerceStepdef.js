import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

import HomePage from '../../../../support/Pageobjectpattern'
const homepage =new HomePage()

Given('I open demo QA Page',function()
{
    cy.visit("http://demoqa.com/")

      //Navigating to the page

      
homepage.getURL().visit(this.data.url)

//validating URL
cy.url().should('include', 'https://demoqa.com/')

})

When('Click on CTA Button to redirect the landing page',()=>
{
    cy.get('.home-banner a').invoke('removeAttr','target').click()

})

And('Text and form validation',function(dataNames)
{

//Text Validation on the page
cy.get('.enroll__heading').should('contains.text','Selenium')

//Click on Registration button
homepage.clickonButton().click()
 
//Values Entering into input fields
homepage.getName().type(dataNames.rawTable[1][0])
homepage.getLastName().type(dataNames.rawTable[1][1])
homepage.getemail().type(dataNames.rawTable[1][2])
homepage.getmobile().type(this.data.mobile)
homepage.getcountry().select(this.data.country)
homepage.getcity().type(this.data.city)
cy.wait(3000)
cy.get('button.modal__close').click()  
homepage.getmessage().type(this.data.message)

})

Then('Submit the form',()=>
{
    homepage.submit().click()
})



