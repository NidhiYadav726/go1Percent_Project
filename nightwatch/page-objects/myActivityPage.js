module.exports = {
  url: "https://nashtechglobal.qa.go1percent.com/",

  elements: {
    usernameInputField: "#username",
    passwordInputField: "#password",
    loginButton: "#kc-login",
    settingsButton:
      'ul[class="navbar-nav justify-content-end"] app-dropdown-wrapper div[class="position-relative"] div[class="pt-2"] li[class="icon nav-item dropdown px-2 d-flex align-items-center justify-content-center"] a[class="nav-link text-body p-0 text-white"] div i[class="material-icons user-icon',
    profile: ".d-flex.py-1.mt-1",
    allActivities: ".set",
  },

  commands: [
    {
      successfulLogin: function (username, password) {
        return this.setValue("@usernameInputField", username).setValue(
          "@passwordInputField",
          password
        );
      },
    },
  ],
};
