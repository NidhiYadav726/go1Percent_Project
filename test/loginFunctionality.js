const loginPage = browser.page.loginPage();

describe("Login Page", function () {
  before(function (browser) {
    const loginPage = browser.page.loginPage();
    loginPage.navigate();
    loginPage.maximizeWindow();
  });

  after(function (browser) {
    browser.end();
  });
});
it("Verify Go1Percent logo, carousel images, carousel caption and the footer message",function() {
  loginPage
    .assert.visible('@goLogo', "Go logo present")   
    .assert.containsText('@goLogo', 'GO')     
    .assert.visible('@onePercentLogo',"1% logo present")  
    .assert.containsText('@onePercentLogo','1%')    
    .assert.visible('@carouselImages','Caousel images are visible')    
    .assert.visible('@carouselCaption',"Get 1% Better Everyday The Nashtech leaderboard tries to give engineers cue to keep improving on a daily basis.")      
    .assert.visible('@footerMessage',"Footer message is visible")  
    .assert.containsText('@footerMessage','Made with at Nashtech')
  
});
it('Verify that tag line with text "Get 1% Better Everyday" is displayed', function () {
  loginPage.expect.element('@tagLine').text.to.contain('Get 1% Better Everyday'); 
 
});

it("Verify that carousel image changes while clicking on carousel button", function() {
  localStorageloginPage.carouselImagesVariation();
  loginPage.assert.elementPresent('@carouselImage2');
});

it('Verify that login page heading contains text "Sign in to Go 1%" is displayed', function () {
  loginPage.expect.element('@headerText').text.to.equal('Sign in to Go 1%'); 
  
});

it("Verify that specific text between login options is present on the web page ", function () {
  loginPage
    .assert.visible('@specificText',"Specific text between login options is visible") 
    .assert.containsText('@specificText',"or do it via E-mail")

});

it("Verify that clicking on the Microsoft logo redirects to the Microsoft login page", function(browser){
  loginPage.waitForElementPresent('@microsoftLogo', 5000, 'Microsoft icon present') 
  loginPage.microsoftIcon();
  browser.assert.urlContains('login.microsoftonline.com/');
  browser.back();
});

it("Verify remember me checkbox is selected during login", function (browser){
  loginPage.rememberMeCheckBox();
  browser.expect.element('#rememberMe').to.be.selected.before(100)
  browser.expect.element('span.checkmark').to.be.selected;
});

it("Verify the forgot Password functionality", function () {
  loginPage.forgotPasswordFunctionality("abcd");
  loginPage.expect.element("@forgotPasswordMessage").text.to.contains( "You should receive an email shortly with further instructions."); //forgotPasswordMessage
});
it(" Verify clicking on the Terms of Use link opens a new page with the terms of use", function (browser){
  loginPage.termsOfUseFunctionality();
  browser.windowHandles(function (result) {
    const originalWindowDisplayed = result.value[0];
    const handle = result.value[1];
    this.switchWindow(handle).assert.urlContains("/terms-of-use");
    this.switchWindow(originalWindowDisplayed);
  });
});
it("Verify clicking on the Privacy policy link opens a new page with the privacy policy Verify Privacy Policy Page", function(browser) {
  loginPage.privacyPolicyFunctionality();
  browser.windowHandles(function (result) {
    const originalWindowDisplayed = result.value[0];
    const handle = result.value[2];
    this.switchWindow(handle).assert.urlContains("/privacy-policy");
    this.switchWindow(originalWindowDisplayed);
  });
});

it(" Verify that login fails with invalid credentials and an alert message is displayed", function () {
  loginPage.unsuccessfulLogin("sdfg", "dfer");
  loginPage.expect.element("@loginErrorMessage").text.to.contains("Invalid username or password");
});

it("Verify successful login with valid credentials", function (browser) {
  loginPage.successfulLogin("testemployee", "testemployee");
  browser.assert.urlEquals("https://nashtechglobal.qa.go1percent.com/my-dashboard");
});
