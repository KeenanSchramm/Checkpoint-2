module.exports = {
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    var: person1 = {
        name: "Jimmy Joe",
        title: "Hack0r",
        age: "12"
    },
    var: person2 = {
        name: "Jeremy Schrader",
        hairColor: "brown",
        age: "24"
    },
    var: person3 = {
        name: "Carly Armstrong",
        title: "CEO"
    },
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
        },
        filterObjInput: {
            selector: '//input[@name="objectFilterInput"]',
            locateStrategy: 'xpath'
        },
        filterObjConfBtn: {
            selector: '//button[@name="objectFilterButton"]',
            locateStrategy: 'xpath'
        },
        filterObjResults: {
            selector: '//span[@name="objectFilterResults"]',
            locateStrategy: 'xpath'
        },
        filterNamInput: {
            selector: '//input[@id="nameFilterInput"]',
            locateStrategy: 'xpath'
        },
        filterNamConfBtn: {
            selector: '//button[@id="nameFilterButton"]',
            locateStrategy: 'xpath'
        },
        filterNamResults: {
            selector:'//span[@name="nameFilterResults"]',
            locateStrategy: 'xpath'
        },
        palInput: {
            selector: '//input[@name="palindromeInput"]',
            locateStrategy: 'xpath'
        },
        palConfBtn: {
            selector: '//button[@name="palindromeButton"]',
            locateStrategy: 'xpath'
        },
        palResults: {
            selector:'//span[@name="palindromeResults"]',
            locateStrategy: 'xpath'
        },
        sumInput1: {
            selector: '//input[@name="sumInput1"]',
            locateStrategy: 'xpath'
        },
        sumInput2: {
            selector: '//input[@name="sumInput2"]',
            locateStrategy: 'xpath'
        },
        sumConfBtn: {
            selector: '//button[@name="sumButton"]',
            locateStrategy: 'xpath'
        },
        sumResults: {
            selector:'//span[@name="sumResults"]',
            locateStrategy: 'xpath'
        },
        

        //element: 'element selector',
        //if using xpath exampleVV
        // rVSeeAll: {
        //     selector: '(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[1]',
        //     locateStrategy: 'xpath'
        // },
    }
}