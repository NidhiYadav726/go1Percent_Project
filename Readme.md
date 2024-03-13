                                               END TO END FRONTENED AUTOMATION - GO 1% PLATFORM

OBJECTIVE: this Readme file describes the end to end automation performed on the GO 1% Platform using Nightwatch. Nightwatch.js is an integrated framework for performing automated end-to-end testing on web applications and websites, across all major browsers. It is written in Node.js and uses the W3C WebDriver API to interact with various browsers. 

LOGIN PAGE =>

DESCRIPTION: This file defines a Nightwatch.js page object and test file for the login page of the application under test. It includes commands and assertions related to the verification of various elements and functionalities on the login page.

PAGE: 
loginPage.js: contains all the elements and commands required to verify the login functionality of the website.

COMMANDS:
1) pageElements: verifies the visibility and content of various elements on the page like carosel images ,go1% logo, footer message, carousel caption.
2) carouselTagLIne: verifies the visibility of the carousel tag line with text "Get 1% Better Everyday"  on the page.
3) carouselImagesVariation: verifies the carousel images visibility by clicking on the carousel button.
4) loginHeaderText: verifies the visibility of login header with text  "Sign in to Go 1%" .
5) loginSpecificText: verifies the visibility of specific text between various login options.
6) microsoftIcon: verifies that the click on microsoft icon redirects to microsoft login page 
7) rememberMeCheckBox: verifies that remember me checkbox is checked during login.
8) forgotPasswordFunctionality: verifies the functionality of forgor password on the site .
9) termsOfUseFunctionality: verifies that user is directed to the terms of use page after clicking on "terms of use" link.
10) privacyPolicyFunctionality: verifies that user is directed to the privacy policy page after clicking on "privacy policy" link.
11) unsuccessfulLogin: verifies that user is not able to login with invalid credentials and an alert message is shown.
12) successfulLogin: verifies successful login with valid credentials.

TEST FILE: 
loginFunctionality.js: contains test cases and assertions to verify the login page functionality.

RUN TEST FILE: npx nightwatch test/loginFunctionality.js

DASHBOARD => MY ACTIVITY

DESCRIPTION: this file defines a Nightwatch.js page object and test file for the dashboard activity page of the application under test.

PAGE: 
dashboardPage.js : contains all elements required for the test file usage.

ELEMENTS: 
1) usernameInputField: locates the username input field 
2) passwordInputField: locates the password input field 
3) loginButton: locates the login button

COMMANDS: 
1) successfulLogin: verify successful login with valid credentials and directs to the dashboard page.

TEST FILE:
dashboardActivityFunctionality.js : contains the assertions and test cases to verify the activity page.

TEST CASES :
1) Verify Login Functionality : perform succesful login and redirect to dashbard page
2) Verify visibility of all the activities: verifies that all the activities are visible when user is on the activities page.
3) Verify appropriate points should be added according to the contribution: verifies points for the activity 1 is visible.
4) Verify that the user can able to see the time the activity was done on all Activity: verifes that the timeline for all activities are visible.
5) Verify user should see Add a contribution button when no contribution has been added by the user: verifyies that add a contribution button is visible.

RUN TEST FILE: npx nightwatch test/dashboardActivityFunctionality.js
