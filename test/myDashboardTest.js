const myDashboardPage = browser.page.myDashboardPage();
const global = browser.globals;
const loginPage = browser.page.loginPage();

describe("My Dashboard", function () {
  before(function () {
    browser.url(global.url);
    browser.maximizeWindow();
  });
  after(function (browser) {
    browser.end();
  });
});
it("Verify successful login with valid credentials", async (browser) => {
  loginPage.successfulLogin(global.user, global.pass);
  await browser.execute('document.querySelector("#kc-login").click();');
  browser.assert.urlEquals(
    "https://nashtechglobal.qa.go1percent.com/my-dashboard"
  );
});
it("Verify user should be able to see Welcome text", function () {
  myDashboardPage.assert
    .visible("@welcomeText")
    .assert.containsText("@welcomeText", "Welcome, Test Employee");
});
it("Verify user should be able to see all fields in dashboard page", function () {
  myDashboardPage.assert.elementPresent("@fields");
});
it("Verify user should be able to navigate profile page through Profile picture", async (browser) => {
  myDashboardPage.waitForElementVisible("@profilePicture", 1000);
  await browser.execute('document.querySelector("#img").click();');
  browser.assert.urlContains("/my-profile");
  browser.back();
});
it("Verify user should be able Search a Nasher", async (browser) => {
  myDashboardPage.searchNasher();
  await browser.execute('document.querySelector(".search-names").click();');
  browser.assert.urlContains("my-profile?id=374");
  browser.back();
});
it("Verify user should be able to Change to French Language from dropdown", async (browser) => {
  await browser.execute(
    'document.querySelector(".fa.fa-caret-down.icon").click();'
  );
  await browser.execute(
    'document.querySelector(".dropdown-list__item:nth-child(2)").click();'
  );
  myDashboardPage.assert.textContains("@welcomeText", "Salut, Test Employee");
});
it("Verify user should be able to Change to English Language from dropdown ", async (browser) => {
  await browser.execute(
    'document.querySelector(".fa.fa-caret-down.icon").click();'
  );
  await browser.execute(
    'document.querySelector(".dropdown-list__item:nth-child(1)").click();'
  );
  myDashboardPage.assert.textContains("@welcomeText", "Welcome, Test Employee");
});
it("Verify user should be able to Change Application view to Light Mode", async (browser) => {
  await browser.execute(
    'document.querySelector(".material-icons.user-icon.cursor-pointer").click();'
  );
  browser.assert.not.hasClass(".user-icon", "dark_mode");
});

it("Verify user should be able to Change Application view to Dark Mode", async (browser) => {
  await browser.execute(
    'document.querySelector(".material-icons.user-icon.cursor-pointer").click();'
  );
  browser.assert.not.hasClass(".user-icon", "light_mode");
});
it("Verify user should be able to see Last Contribution", function () {
  myDashboardPage.assert.visible("@lastContribution");
});
it("Verify user should be able to see Contribution on Motivation tile", async (browser) => {
  myDashboardPage.assert
    .visible("@noFeed")
    .assert.containsText("@noFeed", "There are no Feeds for Today");
});
it("Verify user should be able to click see all button for Daily motivation tile", async (browser) => {
  await browser.execute(
    'document.querySelector(".btn.px-3.py-1.all-btn.border-button").click();'
  );
  myDashboardPage.assert.elementPresent("@contributionsInTile");
});
it("Verify user should be able to Like specific Contribution", async (browser) => {
  await browser.execute(
    'document.querySelector(".my-dashboard.mt-n4 div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(1) span:nth-child(1)").click();'
  );
  myDashboardPage.assert.textContains("@counterValue", "1");
});
it("Verify user should be able to Dislike specific Contribution ", async (browser) => {
  await browser.execute(
    'document.querySelector(".my-dashboard.mt-n4 div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(2) span:nth-child(1)").click();'
  );
  myDashboardPage.assert.textContains("@counterValue", "1");
});
it("Verify user should be able to send a Comment on specific Contribution ", async (browser) => {
  await browser.execute(
    'document.querySelector(".my-dashboard.mt-n4 div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(3) span:nth-child(1)").click();'
  );
  myDashboardPage.setValue("@commentPlaceholder", [
    "demo comment2",
    browser.Keys.ENTER,
  ]);
  myDashboardPage.assert.textContains(
    ".show-comment.px-3.pb-2.mb-2",
    "demo comment2"
  );
});

it("Verify user should be able to Share specific Contribution on social media", async (browser) => {
  await browser.execute('document.querySelector("#button-basic").click();');
  await browser.execute(
    'document.querySelector(".sb-wrapper.sb-show-icon.sb-linkedin").click();'
  );
  browser.windowHandles(function (result) {
    const originalWindowDisplayed = result.value[0];
    const handle = result.value[1];
    this.switchWindow(handle).assert.urlContains("/www.linkedin.com/");
    this.switchWindow(originalWindowDisplayed);
  });
});
it("Verify user should be able to navigate Profile page through Settings button", async (browser) => {
  await browser.execute(
    'document.querySelector(\'ul[class="navbar-nav justify-content-end"] app-dropdown-wrapper div[class="position-relative"] div[class="pt-2"] li[class="icon nav-item dropdown px-2 d-flex align-items-center justify-content-center"] a[class="nav-link text-body p-0 text-white"] div i[class="material-icons user-icon"]\').click();'
  );
  await browser.execute('document.querySelector(".d-flex.py-1.mt-1").click();');
  browser.assert.urlContains("/my-profile");
  browser.back();
});
it("Verify user should be able to click on points and redirect to profile page", async (browser) => {
  await browser.execute(
    'document.querySelector("div:nth-child(2) > div.mb-3.d-flex.justify-content-center.align-items-center").click();'
  );
  browser.assert.urlContains("/my-profile");
  browser.back();
});
it("Verify user should be able to click on Overall ranks and redirect to profile page", async (browser) => {
  await browser.execute(
    'document.querySelector("div:nth-child(3)>div.mb-3.d-flex.justify-content-center.align-items-center").click();'
  );
  browser.assert.urlContains("/my-profile");
  browser.back();
});
it("Verify user should be able to click on Overall score and redirect to profile page", async (browser) => {
  await browser.execute(
    'document.querySelector("div:nth-child(4)>div.mb-3.d-flex.justify-content-center.align-items-center").click();'
  );
  browser.assert.urlContains("/my-profile");
  browser.back();
});
it("Verify user should be able to Logout through Settings button ", async (browser) => {
  await browser.execute(
    'document.querySelector(\'ul[class="navbar-nav justify-content-end"] app-dropdown-wrapper div[class="position-relative"] div[class="pt-2"] li[class="icon nav-item dropdown px-2 d-flex align-items-center justify-content-center"] a[class="nav-link text-body p-0 text-white"] div i[class="material-icons user-icon"]\').click();'
  );
  browser.execute(
    "document.querySelector(\"div[class='d-flex py-1'] span\").click();"
  );
  browser.assert.urlContains("https://auth.go1percent.com/");
});
