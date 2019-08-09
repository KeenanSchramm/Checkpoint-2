module.exports = {
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    elements: {
        evenOddInput: {
            selector: '//input[@name="evenOddInput"]',
            locateStrategy: 'xpath'
        },
        evenOddConfBtn: {
            selector: '//button[@name="evenOddButton"]',
            locateStrategy: 'xpath'
        },
        evenResults: {
            selector: '//span[@name="evenResults"]',
            locateStrategy: 'xpath'
        },
        oddResults: {
            selector: '//span[@name="oddResults"]',
            locateStrategy: 'xpath'
        }
        //element: 'element selector',
        //if using xpath exampleVV
        // rVSeeAll: {
        //     selector: '(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[1]',
        //     locateStrategy: 'xpath'
        // },
    }
}