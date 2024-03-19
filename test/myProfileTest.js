const loginPage = browser.page.loginPage();
const myProfilePage = browser.page.myProfilePage();
const global = browser.globals;

describe("My Profile", function () {
  before(function () {
    browser.url(global.url);
    browser.maximizeWindow();
  });
  after(function (browser) {
    browser.end();
  });
});
it("Verify that User should be able to see the profile picture along with the monthly rank ", async () => {
  loginPage.successfulLogin(global.user, global.pass);
  await browser.execute('document.querySelector("#kc-login").click();');
  await browser.execute('document.querySelector("#img").click();');
  myProfilePage.assert.visible("@profilePic").assert.visible("@employeeRank");
});
it('Verify that user should be able to change their profile picture by clicking on update profile page', async() =>{
  await browser.execute('document.querySelector(".edit-detail-button:nth-child(1)").click();')
  await browser.execute('document.querySelector(".edit-detail-button:nth-child(1)").click();')
  myProfilePage
      .waitForElementVisible('@alertBox', 5000)
      .assert.visible('@alertBox')
});
it("Verify user should be able to see his/her name and competency name on the profile page ", function () {
  myProfilePage.assert.visible("@userName").assert.visible("@competencyName");
});
it("Verify user should be able to see their points, overall rank and monthly score on the profile page", function () {
  myProfilePage.assert
    .visible("@points")
    .assert.textContains("@points", "Points")
    .assert.visible("@overallRank")
    .assert.textContains("@overallRank", "Overall Rank")
    .assert.visible("@monthlyScore")
    .assert.textContains("@monthlyScore", "Monthly Score");
});
it("Verify that user should be able to view the badges and the count in the badges section", function () {
  myProfilePage.assert
    .visible("@badge1")
    .assert.visible("@badgeCount1")
    .assert.visible("@badge2")
    .assert.visible("@badgeCount2");
 
});
it("Verify that user should be able to see month and score and rank by clicking on the badges", async () => {
  await browser.execute(
    'document.querySelector(".d-flex.justify-content-start.align-items-center.no-scroll-badges > div:nth-child(1) > div > div").click();'
  );
  myProfilePage.assert
    .visible("@rank")
    .assert.visible("@month")
    .assert.visible("@score");
  await browser.execute(
    'document.querySelector(".d-flex.justify-content-between.align-items-center > div:nth-child(2) > span").click();'
  );
});
it('Verify that user should be able to view the reward if redeemed', function(){
    myProfilePage
       .assert.visible('@redeemedReward')
});
