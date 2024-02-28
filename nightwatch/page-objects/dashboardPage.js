module.exports = {
    url: 'https://nashtechglobal.qa.go1percent.com/',

    elements: {
        activitiesBlock: {
            selector: 'div.card-gap app-my-activity div.card.tab-card',
            locatorStrategy: 'css selector',
    },
},


    commands:[
    {
        successfulLogin : function(username,password) {
            return this
                .setValue('#username', username)   //usernameInputField
                .setValue('#password',password)    //passwordInputFIeld
                .click('#kc-login')                //loginButton
        },


    
        myActivity: function(){
               browser.navigateTo('https://knoldus.qa.go1percent.com/my-profile')
               
 
               
                
            },
        },

    ],
}; 