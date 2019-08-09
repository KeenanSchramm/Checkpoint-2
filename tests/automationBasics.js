var automationBasics
module.exports = {
    beforeEach: browser => {
        automationBasics = browser.page.automationBasicsPageObjects()
        automationBasics.navigate()
    },
    'Odds and Evens correct input': browser => {
        automationBasics
            .setValue('@evenOddInput','1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,100,101,102,103,104,105')
            .click('@evenOddConfBtn')
            .verify.containsText('@evenResults', "2,4,6,8,10,12,14,100,102,104")
            .verify.containsText('@oddResults',"1,3,5,7,9,11,13,15,101,103,105")
            .expect.element('@oddResults').text.not.contain("2,4,6,8,10,12,14,100,102,104")
        automationBasics
            .expect.element('@evenResults').text.not.contain("1,3,5,7,9,11,13,15,101,103,105")
    },

    // //'Odds and Evens incorrect input': browser => {
    //     automationBasics
                //input letters
                //click sort
                //check even output
                //check odd output
    //         .click('selector')
    //         .pause(500)
    //         .waitForElementVisible('selector')
    //         .verify.containsText('selector', "text")
    // },

    // //'test1': browser => {
    //     automationBasics
    //         .click('selector')
    //         .pause(500)
    //         .waitForElementVisible('selector')
    //         .verify.containsText('selector', "text")
    // },

    // //'Filter Object': browser => {
    //     automationBasics
    //         .click('selector')
    //         .pause(500)
    //         .waitForElementVisible('selector')
    //         .verify.containsText('selector', "text")
    // },

    // //'Filter String': browser => {
    //     automationBasics
    //         .click('selector')
    //         .pause(500)
    //         .waitForElementVisible('selector')
    //         .verify.containsText('selector', "text")
    // },

    // //'Palindrome': browser => {
    //     automationBasics
    //         .click('selector')
    //         .pause(500)
    //         .waitForElementVisible('selector')
    //         .verify.containsText('selector', "text")
    // },

    // //'Sum': browser => {
    //     automationBasics
    //         .click('selector')
    //         .pause(500)
    //         .waitForElementVisible('selector')
    //         .verify.containsText('selector', "text")
    // },









    //test layout example
    // //'test1': browser => {
    //     automationBasics
    //         .click('selector')
    //         .pause(500)
    //         .waitForElementVisible('selector')
    //         .verify.containsText('selector', "text")
    // },

}