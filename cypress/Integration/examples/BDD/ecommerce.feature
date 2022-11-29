Feature: End to end demo site validation

    application regression
@Regression
    Scenario: Demo site validate
    Given I open demo QA Page
    When Click on CTA Button to redirect the landing page
    And Text and form validation
    |url |name | lastname | email |
    |http://demoqa.com/ |SenthilRam | QA | testdata@test.com |
    Then Submit the form 

@Smoke
    Scenario: Demo reference two
    Given I open demo QA Page

@APITest
    Scenario: Test a request & response 
    Given Navigate to respective url & Validate API Calls



