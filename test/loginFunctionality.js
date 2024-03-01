const loginPage = browser.page.loginPage();

describe("website main elements", function () {
  before(function (browser) {
    const login = browser.page.loginPage();
    loginPage.navigate();
    loginPage.maximizeWindow();
  });

  after(function (browser) {
    browser.end();
  });
});
it("Verify Go1Percent logo, carousel images, carousel captions and footer message", function (browser) {
  const login = browser.page.loginPage();
  login.pageElements();
});
it('Verify carousel tag line with text"Get 1% Better Everyday "is displayed', function (browser) {
  const login = browser.page.loginPage();
  login.carouselTagLine();
});

it("Verify that carousel image changes while clicking on carousel button", function (browser) {
  const login = browser.page.loginPage();
  login.carouselImagesVariation();
  browser.assert.elementPresent("#myCarousel>div>div:nth-child(2)");
});

it('Verify login page heading contains text "Sign in to Go 1%"', function (browser) {
  const login = browser.page.loginPage();
  login.loginHeaderText();
});

it("Verify specific text between login options is present", function (browser) {
  const login = browser.page.loginPage();
  login.loginSpecificText();
});

it("Verify microsoft logo redirects to microsoft login page", function (browser) {
  const login = browser.page.loginPage();
  login.microsoftIcon();
  browser.assert.urlContains("login.microsoftonline.com/");
  browser.back();
});

it("Verify Remember Me checkbox is selected during login", function (browser) {
  const login = browser.page.loginPage();
  login.rememberMeCheckBox();
  //browser.waitForElementVisible('span.checkmark', 5000, 'Remember Me checkbox is visible');
  // browser.expect.element('span.checkmark').to.be.selected;
});

it("Verify the forgot password functionality", function (browser) {
  const login = browser.page.loginPage();
  login.forgotPasswordFunctionality("abcd");
  browser.expect
    .element(".pf-c-alert__title.kc-feedback-text")
    .text.to.contains(
      "You should receive an email shortly with further instructions.",
    ); //forgotPasswordMessage
});
it("Verify Terms of Use Page", function (browser) {
  const login = browser.page.loginPage();
  login.termsOfUseFunctionality();
  browser.windowHandles(function (result) {
    const originalWindowDisplayed = result.value[0];
    const handle = result.value[1];
    this.switchWindow(handle).assert.urlContains("/terms-of-use");
    this.switchWindow(originalWindowDisplayed);
  });
});

it("Verify Privacy Policy Page", function (browser) {
  const login = browser.page.loginPage();
  login.privacyPolicyFunctionality();
  browser.windowHandles(function (result) {
    const originalWindowDisplayed = result.value[0];
    const handle = result.value[2];
    this.switchWindow(handle).assert.urlContains("/privacy-policy");
    this.switchWindow(originalWindowDisplayed);
  });
});

it("Verify login with invalid credentials with an alert message", function (browser) {
  const login = browser.page.loginPage();
  login.unsuccessfulLogin("sdfg", "dfer");
  browser.expect
    .element("#input-error")
    .text.to.contains("Invalid username or password"); //invalidLoginErrorMessage
});

it("Verify successful login with valid credentials", function (browser) {
  const login = browser.page.loginPage();
  login.successfulLogin("testadmin", "testadmin");
  browser.assert.urlEquals(
    "https://nashtechglobal.qa.go1percent.com/my-dashboard",
  );
});
