module.exports = {
    url: 'https://nashtechglobal.qa.go1percent.com/',

    elements:{
        usernameInputField : {
            selector: '#username',
            locatorStrategy: 'css selector',
        },
        passwordInputField  :{
            selector: '#password',
            locatorStrategy:'css selector',
        },
        loginButton: {
            selector: '#kc-login',
            locatorStrategy:'css selector',
        },
        goLogo: {
            selector: '.go1up-logo',
            locatorStrategy:'css selector',
        },
        onePercentLogo :{
            selector: '.onepercenet-logo',
            locatorStrategy: 'css selector',
        },
        carouselImages :{
            selector: '#myCarousel>div>div:nth-child(1)',
            locatorStrategy: 'css selector',
        },
        carouselCaption: {
            selector: '#myCarousel > div > div:nth-child(1) > div > p',
            locatorStrategy: 'css selector',
        },
        footerMessage: {
            selector: 'div.tagsss,div.tagsss i',
            locatorStrategy: 'css selector',
        },
        tagLine: {
            selector: '#myCarousel > div > div:nth-child(1) > div h3',
            locatorStrategy: 'css selector,'
        },
        carouselButton:{
            selector: 'li[data-target="#myCarousel"][data-slide-to="1"]',
            locatorStrategy:'css selector',
        },
        carouselImage2:{
            selector: '#myCarousel>div>div:nth-child(2)',
            locatorStrategy :'css selector',
        },
        headerText: {
            selector: '#kc-page-title',
            locatorStrategy: 'css selector',
        },
        specificText :{
            selector: '#kc-social-providers h4',
            locatorStrategy: 'css selector',
        },
        microsoftLogo: {
            selector: '#social-oidc',
            locatorStrategy:'css selector',
        },
        rememberMe:{
            selector: '.checkmark',
            locatorStrategy: 'css selector',
        },
        forgotPasswordButton:{
            selector: '.forget-pass',
            locatorStrategy: 'css selector',
        },
        forgotPasswordSubmitButton:{
            selector: '#kc-form-buttons > input',
            locatorStrategy:'css selector',
        },
        termsOfUse:{
            selector: '.term-privacy > a[href*="terms-of-use"]',
            locatorStrategy:'css selector',
        },
        privacyPolicy:{
            selector: '.term-privacy > a[href*="privacy-policy"]',
            locatorStrategy:'css selector',
        },
        loginErrorMessage:{
            selector:'#input-error',
            locatorStrategy:'css selector',
        },
        forgotPasswordMessage:{
            selector: '.pf-c-alert__title.kc-feedback-text',
            locatorStrategy:'css selector',
        },
    },


    commands: [
        
        {

            carouselImagesVariation: async function(){
                browser
                    .click('@carouselButton')  
                    
            },

            microsoftIcon : function() {
                browser
                   
                    .click('@microsoftLogo')
            },
            rememberMeCheckBox: function(){
                browser
                    .click('@rememberMe') 
            },

            forgotPasswordFunctionality : function(username){
                browser
                    .click('@forgotPasswordButton')  
                    .setValue('@usernameInputField', username)
                    .click('@forgotPasswordSubmitButton')  
                    

            },
            termsOfUseFunctionality: function() {
                browser
                   .click('@termsOfUse') 
                   
            },

            privacyPolicyFunctionality : function(){
                browser
                    .click('@privacyPolicy') 

            },
            unsuccessfulLogin : function(username,password) {
                return this
                    .setValue('@usernameInputField', username)  
                    .setValue('@passwordInputField ',password)  
                    .click('@loginButton')              
                     
            },
            successfulLogin : function(username,password) {
                return this
                    .setValue('@usernameInputField', username)  
                    .setValue('@passwordInputField ',password)    
                    .click('@loginButton')               
                }
            
            },
        ],
    };