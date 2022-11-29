describe('My First test suite', function() 
{

    it('My first test case', function() {
// cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

// //cy.get('h1').should('contains.text','Practice')
// // for alert accept event called window:alert
// // for alert confirm & cancel event called window:confirm
// cy.get('#alertbtn').click()
// cy.on('window:alert',(str)=>
// {

//     expect(str).to.equal('Hello , share this practice page and share your knowledge')

// })
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('div.mouse-hover-content').invoke('show')
cy.contains('Top').click()
cy.url().should('include','top')

// cy.visit('https://www.rahulshettyacademy.com/')
// cy.wait(3000)
// cy.go('back')



    })


})
