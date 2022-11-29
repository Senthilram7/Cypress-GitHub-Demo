import HomePage from '../../support/Pageobjectpattern'
describe('Validation test suite', function() 
{
  before(function() {
    cy.fixture('DataDrive').then(function(data)
    {
    this.data=data
    })
      })
it('Test Data1', function() {
const newdata= new HomePage()
newdata.getDemoURL()
cy.searchkeyword(this.data.name)

})
  })
