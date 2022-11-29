context('Window',()=>{

it('Database interaction',()=>{
cy.sqlServer("select * from Persons").then(function(result)
{

console.log(result[0][1])

})
})

})