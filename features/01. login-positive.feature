@digital-skola @login
Feature: Swag Labs - Login - Positive

  @positive
  Scenario: As a standard_user, I want to log in successfully
    Given Umi is on the login page
    When Umi login with "standard_user" credential
    Then Umi should see home page
  
 