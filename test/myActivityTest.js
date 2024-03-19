const myActivityPage = browser.page.myActivityPage();
const loginPage = browser.page.loginPage();
const global = browser.globals;

describe("My Activity", function () {
  before(function (browser) {
    browser.url(global.url);
    myActivityPage.maximizeWindow();
  });

  after(function (browser) {
    browser.end();
  });
});

it("Verify successful login with valid credentials", async (browser) => {
  await loginPage.successfulLogin(global.user, global.pass);
  await browser.execute('document.querySelector("#kc-login").click();');
  browser.assert.urlEquals(
    "https://nashtechglobal.qa.go1percent.com/my-dashboard"
  );
});
it("Verify user should be able to see the all the activities on the My activity", async (browser) => {
  await browser.execute(
    'document.querySelector(\'ul[class="navbar-nav justify-content-end"] app-dropdown-wrapper div[class="position-relative"] div[class="pt-2"] li[class="icon nav-item dropdown px-2 d-flex align-items-center justify-content-center"] a[class="nav-link text-body p-0 text-white"] div i[class="material-icons user-icon"]\').click();'
  );
  await browser.execute('document.querySelector(".d-flex.py-1.mt-1").click();');
  myActivityPage
    .waitForElementVisible("@allActivities", 60000)
    .assert.visible("@allActivities");
  browser.verifyActivitiesVisible();
});

it("Verify appropriate points should be added according to the contribution", async (browser) => {
  await browser.execute(
    'document.querySelector("ul[class="navbar-nav justify-content-end"] app-dropdown-wrapper div[class="position-relative"] div[class="pt-2"] li[class="icon nav-item dropdown px-2 d-flex align-items-center justify-content-center"] a[class="nav-link text-body p-0 text-white"] div i[class="material-icons user-icon").click();'
  );
  await browser.execute('document.querySelector(".d-flex.py-1.mt-1").click();');
  myActivityPage.waitForElementVisible("@allActivities", 60000);
  browser.verifyPointsVisible();
});

it("Verify that the user can able to see the time the activity was done on all Activity", function (browser) {
  const activitySelector = ".container.right";
  browser.elements("css selector", activitySelector, function (result) {
    const totalActivities = result.value.length;
    for (let i = 1; i <= totalActivities; i++) {
      const activityTimeSelector = ".display-time";
      browser.assert.visible(activityTimeSelector);
    }
  });
});
