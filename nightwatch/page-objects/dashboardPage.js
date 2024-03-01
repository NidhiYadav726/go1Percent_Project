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
        activitiesBlock: {
            selector: '.timeline.w-100.mx-1',
            locatorStrategy: 'css selector',
        },
        
    },


    commands:[
    {
        successfulLogin : function(username,password) {
            return this
                .setValue('@usernameInputField', username)  
                .setValue('@passwordInputField',password)    
                .click('@loginButton')               
            },
        },
    ],
}; 