@digital-skola @productpage
Feature: Swag Labs - Product

@addtocart
  Scenario: As a standard_user, I want to log in successfully and add to cart
    Given Umi is on the login page
    When Umi login with "standard_user" credential
    And Umi click product name
    And Umi click icon cart
    And Umi click button checkout
    And Umi fill information
    And Umi click continue
    Then Umi should see thank you page
