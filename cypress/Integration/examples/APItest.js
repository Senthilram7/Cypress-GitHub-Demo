describe('My First Test Suite', function() 
{
 
it('My FirstTest case',function(){

cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {


    
        "name":"Learn API Automation",
        "isnn": "hvhvj",
        "jhjhhj": "2367",
        "author" : "test data"
        
        
}).then(function(response)

{

expect(response.body).to.have.property("Msg","successfully added")
expect(response.status).to.eq(200)
})
})

})