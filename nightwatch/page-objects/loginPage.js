module.exports = {
    url: 'https://nashtechglobal.qa.go1percent.com/',

    elements:{
         carouselButton1: 'li[data-target="#myCarousel"][data-slide-to="1"]',
     },

    commands: [
        {
            pageElements: function(){
                browser
                    .assert.visible('div.go1up-logo', "Go logo present")    //goLogo
                    .assert.containsText('div.go1up-logo', 'GO')     
                    .assert.visible('.onepercenet-logo',"1% logo present")  //1%Logo
                    .assert.containsText('.onepercenet-logo','1%')    
                    .assert.visible('#myCarousel>div>div:nth-child(1)','Caousel images are visible')    //carouselImages
                    .assert.visible('#myCarousel > div > div:nth-child(1) > div > p',"Get 1% Better Everyday The Nashtech leaderboard tries to give engineers cue to keep improving on a daily basis.")      //Carouselcaption
                    .assert.visible('div.tagsss,div.tagsss i',"Footer message is visible")   //footerMessage
                    .assert.containsText('div.tagsss,div.tagsss i','Made with at Nashtech')
            },

            carouselTagLine: function() {
                browser
                    .expect.element('#myCarousel > div > div:nth-child(1) > div h3').text.to.contain('Get 1% Better Everyday'); //TagLine 
                   
             },
            carouselImagesVariation: function(){
                browser
                    .click('li[data-target="#myCarousel"][data-slide-to="1"]')  //carouselButton1
                    
            },

            loginHeaderText: function() {
                browser
                    .expect.element('#kc-page-title').text.to.equal('Sign in to Go 1%'); //headerText

            },

            loginSpecificText: function(){
                browser
                    .assert.visible('#kc-social-providers h4',"Specific text between login options is visible") //specificText
                    .assert.containsText('#kc-social-providers h4',"or do it via E-mail")

            },

            microsoftIcon : function() {
                browser
                    .waitForElementPresent('#social-oidc', 5000, 'Microsoft icon present') //microsoftLogo
                    .click('#social-oidc')
            },
            rememberMeCheckBox: function(){
                browser
                    .click('span.checkmark')  //rememberMeCheckbox
            },

            forgotPasswordFunctionality : function(username){
                browser
                    .click('.forget-pass')   //forgotPasswordButton
                    .setValue('#username', username)
                    .click('#kc-form-buttons > input')  //forgotPasswordSubmitButton
                    

            },
            termsOfUseFunctionality: function() {
                browser
                   .click('.term-privacy > a[href*="terms-of-use"]') //termsOfUse 
                   
            },

            privacyPolicyFunctionality : function(){
                browser
                    .click('.term-privacy > a[href*="privacy-policy"]') //privacyPolicy 

            },
            unsuccessfulLogin : function(username,password) {
                return this
                    .setValue('#username', username)  //usernameInputField
                    .setValue('#password',password)   //passwordInputFIeld
                    .click('#kc-login')               //loginButton
                     
            },
            successfulLogin : function(username,password) {
                return this
                    .setValue('#username', username)   //usernameInputField
                    .setValue('#password',password)    //passwordInputFIeld
                    .click('#kc-login')                //loginButton
            },
        },
    ],
};