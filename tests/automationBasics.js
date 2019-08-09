var automationBasics
module.exports = {
    beforeEach: browser => {
        automationBasics = browser.page.automationBasicsPageObjects()
        automationBasics.navigate()
    },
    //test layout example
    // //'test1': browser => {
    //     automationBasics
    //         .click('selector')
    //         .pause(500)
    //         .waitForElementVisible('selector')
    //         .verify.containsText('selector', "text")
    // },

}