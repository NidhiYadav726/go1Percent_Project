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
});

it('Verify visibility of all the activities', async(browser)=>{
    const dashboard = browser.page.dashboardPage()
    await browser.execute('document.querySelector(".material-symbols-outlined.hex").click();');
    browser.waitForElementVisible('@activitiesBlock',500,'wait for visibility')
    browser.assert.visible('@activitiesBlock'," my activities are visible")
});
          



