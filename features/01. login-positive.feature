@digital-skola @login
Feature: Swag Labs - Login - Positive

  @positive
  Scenario: As a standart_user, I want to log in successfully
    Given Umi is on the login page
    When Umi login with "standart_user" credential
    Then Umi should see home page
  
 