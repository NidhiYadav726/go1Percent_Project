const dashboardPage = browser.page.dashboardPage();

describe('website main elements', function() {
    before(function(browser) {
        const dashboard = browser.page.dashboardPage();
       const login = browser.page.loginPage();
        dashboardPage.navigate();
        dashboardPage.maximizeWindow();
    });
});

it('Verify successful login with valid credentials', function(browser) {
    const login = browser.page.loginPage()
    login.successfulLogin('testadmin','testadmin');
    browser.assert.urlEquals('https://nashtechglobal.qa.go1percent.com/my-dashboard')
    browser.navigateTo('https://knoldus.qa.go1percent.com/my-profile')
     
   
});

it('my activity', function(browser){
    const dashboard = browser.page.dashboardPage()
    dashboard.myActivity();
    browser.assert.urlEquals('https://knoldus.qa.go1percent.com/my-profile')
   
});