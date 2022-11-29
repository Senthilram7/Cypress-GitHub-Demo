


// To Check request & response object properties => https://docs.cypress.io/api/commands/request#Syntax
Given('Navigate to respective url & Validate API Calls',function()
{

    cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

   cy.intercept({
method : 'GET',
url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'

}, 

{


    //mocking the response 
    statuscode: 200,
    body: [{
        "book_name": "RobotFramework",
        "isbn": "984353",
        "aisle": "982053"  }]
   
// to resolve promises

}).as('bookretrievals')
cy.get("button[class='btn btn-primary']").click()
cy.wait('@bookretrievals').should(({request, response})=>
{
cy.get('tr').should('have.length', response.body.length+1)

})
cy.get('p').should('have.text','Oops only 1 Book available')


//length of the response array=rows of the table


})



