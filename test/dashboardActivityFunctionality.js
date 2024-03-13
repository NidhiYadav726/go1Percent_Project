const dashboardPage = browser.page.dashboardPage();

describe('My Activity', function() {
    before(function(browser) {
    const dashboardPage = browser.page.dashboardPage();
    dashboardPage.navigate();
    dashboardPage.maximizeWindow();
    });
    after(function (browser) {
        browser.end();
      });
});

it('Verify successful login with valid credentials', function(browser){
    dashboardPage.successfulLogin('testemployee','testemployee');
    browser.assert.urlEquals('https://nashtechglobal.qa.go1percent.com/my-dashboard')
});
it('Verify user should be able to see the all the activities on the My activity', function(browser)  {
    dashboardPage.goToProfile();
    dashboardPage
      .waitForElementVisible('@allActivities', 60000)
      .assert.visible('@allActivitiees',1000)
     browser.verifyActivitiesVisible();
  });
  
it('Verify appropriate points should be added according to the contribution',async(browser)=>{
    dashboardPage.goToProfile();
    dashboardPage
        .waitForElementVisible('@allActivities', 60000)
        .assert.visible('@allActivities',1000)
    browser.verifyPointsVisible();
});
    
it('Verify that the user can able to see the time the activity was done on all Activity',function(browser){
    const activitySelector = '.container.right';
    browser.elements('css selector' , activitySelector , function(result){
        const totalActivities = result.value.length;
        for(let i=1 ; i<=totalActivities ; i++){
            const activityTimeSelector = '.display-time';
            browser.assert.visible(activityTimeSelector);
        }
    });
});
it('Verify user should see Add a contribution button when no contribution has been added by the user',function(){
    dashboardPage.addContribution();
    dashboardPage.assert.visible('@addContributionButton', "Add to Contribution")
});

