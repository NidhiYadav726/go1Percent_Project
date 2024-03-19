module.exports = {
  url: "https://nashtechglobal.qa.go1percent.com/",

  elements: {
    usernameInputField: "#username",
    passwordInputField: "#password",
    loginButton: "#kc-login",
    goLogo: ".go1up-logo",
    onePercentLogo: ".onepercenet-logo",
    carouselImages: "#myCarousel>div>div:nth-child(1)",
    carouselCaption: "#myCarousel > div > div:nth-child(1) > div > p",
    footerMessage: "div.tagsss,div.tagsss i",
    tagLine: "#myCarousel > div > div:nth-child(1) > div h3",
    carouselButton: 'li[data-target="#myCarousel"][data-slide-to="1"]',
    carouselImage2: "#myCarousel>div>div:nth-child(2)",
    headerText: "#kc-page-title",
    specificText: "#kc-social-providers h4",
    microsoftLogo: "#social-oidc",
    rememberMe: "#rememberMe",
    forgotPasswordButton: 'a[tabindex="5"]',
    forgotPasswordSubmitButton: "#kc-form-buttons > input",
    termsOfUse: '.term-privacy > a[href*="terms-of-use"]',
    privacyPolicy: '.term-privacy > a[href*="privacy-policy"]',
    loginErrorMessage: "#input-error",
    forgotPasswordMessage: ".pf-c-alert__title.kc-feedback-text",
  },

  commands: [
    {
      forgotPasswordFunctionality: function (username) {
        return this.setValue("@usernameInputField", username);
      },

      unsuccessfulLogin: function (username, password) {
        return this.setValue("@usernameInputField", username).setValue(
          "@passwordInputField",
          password
        );
      },
      successfulLogin: function (username, password) {
        return this.setValue("@usernameInputField", username).setValue(
          "@passwordInputField",
          password
        );
      },
    },
  ],
};
