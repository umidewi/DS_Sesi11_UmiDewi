@digital-skola @login
Feature: Swag Labs - Login - Negative

 @negative
  Scenario: As a locked_out, I want to log in successfully
    Given Umi is on the login page
    When Umi login with "locked_out_user" credential
    Then Umi should see error "Epic sadface: Sorry, this user has been locked out"
