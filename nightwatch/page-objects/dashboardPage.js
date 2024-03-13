module.exports = {
    url: 'https://nashtechglobal.qa.go1percent.com/',

    elements: {
        usernameInputField: {
            selector: '#username',
            locatorStrategy: 'css selector',
        },

        passwordInputField: {
            selector: '#password',
            locatorStrategy: 'css selector',
        },
        loginButton: {
            selector: '#kc-login',
            locatorStrategy: 'css selector',
        },
        settingsButton: {
            selector:'ul[class="navbar-nav justify-content-end"] app-dropdown-wrapper div[class="position-relative"] div[class="pt-2"] li[class="icon nav-item dropdown px-2 d-flex align-items-center justify-content-center"] a[class="nav-link text-body p-0 text-white"] div i[class="material-icons user-icon',
            locatorStrategy:'css selector',
        },
        profile:{
            selector: '.d-flex.py-1.mt-1',
            locatorStrategy: 'css selector',
        },
        allActivities: {
            selector: '.set',
            locatorStrategy: 'css selector',
        },
        addContributionButton:{
            selector:'.addRewardBtn.px-2.mt-n1',
            locatorStrategy:'css selector',
        },
    },


    commands:[
    {
        successfulLogin : function(username,password) {
            return this
                .setValue('@usernameInputField', username)  
                .setValue('@passwordInputField',password)    
                            
            },
        goToProfile: function(){
            return this
                .click('@settings button')
                .click('@profile')
        },
        addContribution: function(){
            return this
               .click('@addContributionButton')
        },
        
        },
    ],
}; 