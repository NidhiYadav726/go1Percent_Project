                                               END TO END FRONTENED AUTOMATION - GO 1% PLATFORM

OBJECTIVE: this Readme file describes the end to end automation performed on the GO 1% Platform using Nightwatch. Nightwatch.js is an integrated framework for performing automated end-to-end testing on web applications and websites, across all major browsers. It is written in Node.js and uses the W3C WebDriver API to interact with various browsers. 

LOGIN FUNCTIONALITY

DESCRIPTION: This file defines a Nightwatch.js page object and test file for the login page of the application under test. It includes commands and assertions related to the verification of various elements and functionalities on the login page.

PAGE: 
loginPage.js: contains all the elements and commands required to verify the login functionality of the website.

TEST FILE: 
loginTest.js: contains test cases and assertions to verify the login page functionality.

RUN TEST FILE: npx nightwatch test/loginFunctionality.js

DASHBOARD FUNCTIIONALITY

1) MY ACTIVITY: this file defines a Nightwatch.js page object and test file for the dashboard activity page of the application under test.

PAGE: 
myActivityPage.js : contains all elements required for the test file usage.

TEST FILE:
myActivityTest.js : contains the assertions and test cases to verify the activity page.

RUN TEST FILE: npx nightwatch test/myActivityTest.js

2) MY DASHBOARD:  this file defines a Nightwatch.js page object and test file for the my dashboard page of the application under test.

PAGE: 
myDashboardPage.js : contains all elements required for the test file usage.

TEST FILE:
myDashboardTest.js : contains the assertions and test cases to verify the my dashboard functionalities.

RUN TEST FILE: npx nightwatch test/myDashboardTest.js

3) MY PROFILE:  this file defines a Nightwatch.js page object and test file for the profile page of the application under test.

PAGE: 
myProfilePage.js : contains all elements required for the test file usage.

TEST FILE:
myProfileTest.js : contains the assertions and test cases to verify the profile functionalities.

RUN TEST FILE: npx nightwatch test/myProfileTest.js