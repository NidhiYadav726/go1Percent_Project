module.exports = {
  elements: {
    welcomeText: ".ml-1.mt-4.text-div",
    usernameInputField: "#username",
    passwordInputField: "#password",
    loginButton: "#kc-login",
    settingsButton:
      'ul[class="navbar-nav justify-content-end"] app-dropdown-wrapper div[class="position-relative"] div[class="pt-2"] li[class="icon nav-item dropdown px-2 d-flex align-items-center justify-content-center"] a[class="nav-link text-body p-0 text-white"] div i[class="material-icons user-icon',
    profile: ".d-flex.py-1.mt-1",
    fields: "#sidenav-collapse-main",
    profilePicture: "#img",
    searchBar: "#Search",
    nasher: ".search-names",
    frenchDropdown: ".dropdown-container:nth-child(2)",
    englishDropdown: ".dropdown-container:nth-child(1)",
    themeButton: ".material-icons.user-icon.cursor-pointer",
    lastContribution: ".card.col-lg-5.overall-card-height-new:nth-child(2)",
    motivationTileButton: ".btn.px-3.py-1.all-btn.border-button",
    noFeed: ".col-lg-4",
    contributionsInTile: ".feeds.col-lg-12.col-12:nth-child(1)",
    likeButton:
      ".my-dashboard.mt-n4 div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(1) span:nth-child(1)",
    dislikeButton:
      ".my-dashboard.mt-n4 div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(2) span:nth-child(1)",
    commentButton:
      ".my-dashboard.mt-n4 div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(3) span:nth-child(1)",
    commentPlaceholder:
      'input[placeholder="Add your comment here... Press ENTER to submit"]',
    commentCountText:
      ".my-dashboard.mt-n4  div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(3) span:nth-child(2)",
    counterValue:
      'div[class="my-dashboard mt-n4"] div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(1) span:nth-child(2)',
    shareButton: ".btn-group.open.show",
    redeemButton: ".my-1.reedeem-btn.font-weight-bold",
    points:
      "div:nth-child(2) > div.mb-3.d-flex.justify-content-center.align-items-center",
    overallRank:
      "div:nth-child(3) > div.mb-3.d-flex.justify-content-center.align-items-center",
    overallScore:
      "div:nth-child(4) > div.mb-3.d-flex.justify-content-center.align-items-center",
    logout: 'div[class="d-flex py-1',
  },
  commands: [
    {
      successfulLogin: function (username, password) {
        return this.setValue("@usernameInputField", username).setValue(
          "@passwordInputField",
          password
        );
      },
      searchNasher: function () {
        return this.setValue("@searchBar", "rahul kumar");
      },
    },
  ],
};
