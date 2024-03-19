// const loginPage = require("../nightwatch/page-objects/loginPage");

const loginPage = browser.page.loginPage();
const global = browser.globals;

describe("Login Page", function () {
  before(function (browser) {
    browser.url(global.url);
    loginPage.maximizeWindow();
  });

  after(function (browser) {
    browser.end();
  });
});
it("Verify Go1Percent logo, carousel images, carousel caption and the footer message", function () {
  loginPage.assert
    .visible("@goLogo", "Go logo present")
    .assert.containsText("@goLogo", "GO")
    .assert.visible("@onePercentLogo", "1% logo present")
    .assert.containsText("@onePercentLogo", "1%")
    .assert.visible("@carouselImages", "Caousel images are visible")
    .assert.visible(
      "@carouselCaption",
      "Get 1% Better Everyday The Nashtech leaderboard tries to give engineers cue to keep improving on a daily basis."
    )
    .assert.visible("@footerMessage", "Footer message is visible")
    .assert.containsText("@footerMessage", "Made with at Nashtech");
});
it('Verify that tag line with text "Get 1% Better Everyday" is displayed', function () {
  loginPage.assert.textContains("@tagLine", "Get 1% Better Everyday");
  loginPage.assert.visible("@tagLine", "Get 1% Better Everyday");
});

it("Verify that carousel image changes while clicking on carousel button", async () => {
  await browser.execute(
    'document.querySelector("li[data-target="#myCarousel"][data-slide-to="1").click();'
  );
  loginPage.assert.elementPresent("@carouselImage2");
});

it('Verify that login page heading contains text "Sign in to Go 1%" is displayed', function () {
  loginPage.assert.textContains("@headerText", "Sign in to Go 1%");
  loginPage.assert.visible("@headerText", "Sign in to Go 1%");
});

it("Verify that specific text between login options is present on the web page ", function () {
  loginPage.assert
    .visible("@specificText", "Specific text between login options is visible")
    .assert.containsText("@specificText", "or do it via E-mail");
});

it("Verify that clicking on the Microsoft logo redirects to the Microsoft login page", async (browser) => {
  loginPage.waitForElementPresent(
    "@microsoftLogo",
    5000,
    "Microsoft icon present"
  );
  await browser.execute('document.querySelector("#social-oidc").click();');
  browser.assert.urlContains("login.microsoftonline.com/");
  browser.back();
});

it("Verify remember me checkbox is selected during login", async (browser) => {
  await browser.execute('document.querySelector(".checkmark").click();');
  loginPage.expect.element("@rememberMe").to.be.selected.before(100);
});

it("Verify the forgot Password functionality", async (browser) => {
  await browser.execute(function(){
    document.querySelector('a[tabindex="5"]').click();
  })
  loginPage.forgotPasswordFunctionality("abcd@gmail.com");
  await browser.execute(
    'document.querySelector("#kc-form-buttons > input").click();'
  )
  loginPage.assert.textContains(
    "@forgotPasswordMessage",
    "You should receive an email shortly with further instructions."
  );
});
it(" Verify clicking on the Terms of Use link opens a new page with the terms of use", async (browser) => {
  await browser.execute(
    'document.querySelector(".term-privacy>a:nth-child(1)").click();'
  );
  browser.windowHandles(function (result) {
    const originalWindowDisplayed = result.value[0];
    const handle = result.value[1];
    this.switchWindow(handle).assert.urlContains("terms-of-use");
    this.switchWindow(originalWindowDisplayed);
  });
});
it("Verify clicking on the Privacy policy link opens a new page with the privacy policy ", async (browser) => {
  await browser.execute(
    'document.querySelector(".term-privacy>a:nth-child(2)").click();'
  );
  browser.windowHandles(function (result) {
    const originalWindowDisplayed = result.value[0];
    const handle = result.value[2];
    this.switchWindow(handle).assert.urlContains("/privacy-policy");
    this.switchWindow(originalWindowDisplayed);
  });
});

it(" Verify that login fails with invalid credentials and an alert message is displayed", async () => {
  loginPage.unsuccessfulLogin("sdfg", "dfer");
  await browser.execute('document.querySelector("#kc-login").click();');
  loginPage.assert.textContains(
    "@loginErrorMessage",
    "Invalid username or password"
  );
});

it("Verify successful login with valid credentials", async (browser) => {
  loginPage.successfulLogin(global.user, global.pass);
  await browser.execute('document.querySelector("#kc-login").click();');
  browser.assert.urlEquals(
    "https://nashtechglobal.qa.go1percent.com/my-dashboard"
  );
});
