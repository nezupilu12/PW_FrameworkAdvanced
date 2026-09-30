Feature: Login Functionality

  Scenario: Successful Login
    Given User is on the login page
    When User enters valid Username and Password
    And User clicks on login Button
    Then User should be logged in successfuly

  Scenario: Unsuccessful Login with Valid Username and Invalid Password
    Given User is on the login page
    When User enters valid Username and Invalid Password
    And User clicks on login Button
    Then User should not be logged in successfuly for invalid password

    Scenario: Unsuccessful Login with Invalid Username
    Given User is on the login page
    When User enters Invalid Username and Invalid Password
    And User clicks on login Button
    Then User should not be logged in successfuly for invalid email

    Scenario: Unsuccessful Login with Blank Username and Blank Password
    Given User is on the login page
    When User enters Blank Username and Blank Password
    And User clicks on login Button
    Then User should not be logged in successfuly for blank email and blank password


