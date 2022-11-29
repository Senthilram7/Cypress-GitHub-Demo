class HomePage
{
    getURL()

    {
 
        return cy.visit("http://demoqa.com/")
    }

    getName()
    {
        return cy.get('#first-name')

    }
    getLastName()
    {
        return cy.get('#last-name')
    }

    getemail()
    {

        return cy.get('#email')
    }
    getmobile()

    {
        return cy.get('#mobile')

    }
    getcountry()

    {

        return cy.get('select')

    }
    getcity()

    {

        return cy.get('#city')
    }

    getmessage()

    {

        return cy.get('#message')

    }

    clickonButton()
    {

        return cy.get('div.col-12.col-lg-6 .btn.btn-primary-shadow.btn-block')
    }
    submit()
    {

        return cy.get('button.btn.btn-block.btn-primary')
    }
    getDemoURL()
    {
return cy.visit('https://www.toolsqa.com/selenium-training/')

    }
}

export default HomePage;