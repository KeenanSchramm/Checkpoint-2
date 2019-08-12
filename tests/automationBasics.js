var automationBasics
module.exports = {
    beforeEach: browser => {
        automationBasics = browser.page.automationBasicsPageObjects()
        automationBasics.navigate()
    },
    //automationbasics reqs link https://devmountain-qa.github.io/Automation-Basics/
    //automationbasics app https://devmountain-qa.github.io/Automation-Basics/build/
    'Odds and Evens correct input': browser => {
        automationBasics
            .setValue('@evenOddInput', '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,100,101,102,103,104,105')
            .click('@evenOddConfBtn')
            .verify.containsText('@evenResults', "2,4,6,8,10,12,14,100,102,104")
            .verify.containsText('@oddResults', "1,3,5,7,9,11,13,15,101,103,105")
            .expect.element('@oddResults').text.not.contain("2,4,6,8,10,12,14,100,102,104")
        automationBasics
            .expect.element('@evenResults').text.not.contain("1,3,5,7,9,11,13,15,101,103,105")
    },

    'Odds and Evens incorrect input': browser => {
        automationBasics
            .setValue('@evenOddInput', 'ABCD')
            .click('@evenOddConfBtn')
            .expect.element('@evenResults').text.to.equal("Evens: []")
        automationBasics
            .expect.element('@oddResults').text.to.equal("Odds: [null]")
        automationBasics
            .clearValue('@evenOddInput')
            .pause(500)
            .setValue('@evenOddInput', '!@#$%^&*')
            .click('@evenOddConfBtn')
            .expect.element('@evenResults').text.to.equal("Evens: []")
        automationBasics
            .expect.element('@oddResults').text.to.equal("Odds: [null]")
    },
    'Filter object acceptable name input': browser => {
        automationBasics
            .setValue('@filterObjInput', 'name')
            .click('@filterObjConfBtn')
            .verify.containsText('@filterObjResults', person1.name, person1.title)
            .verify.containsText('@filterObjResults', person2.name, person2.age)
            .verify.containsText('@filterObjResults', person3.name, person3.title)
    },
    'Filter object acceptable title input': browser => {
        automationBasics
            .setValue('@filterObjInput', 'title')
            .click('@filterObjConfBtn')
            .verify.containsText('@filterObjResults', person1.title, person1.name)
            .verify.containsText('@filterObjResults', person3.title, person3.name)
    },
    'Filter object acceptable age input': browser => {
        automationBasics
            .setValue('@filterObjInput', 'age')
            .click('@filterObjConfBtn')
            .verify.containsText('@filterObjResults', person1.age)
            .verify.containsText('@filterObjResults', person2.age)
    },
    'Filter Object acceptable hair color input': browser => {
        automationBasics
            .setValue('@filterObjInput', 'hairColor')
            .click('@filterObjConfBtn')
            .verify.containsText('@filterObjResults',
                person2.hairColor,
                person2.age,
                person2.name)
    },
    'Filter Object unacceptable input': browser => {
        automationBasics
            .setValue('@filterObjInput', 'Object')
            .click('@filterObjConfBtn')
            .expect.element('@filterObjResults').text.to.not.contain(person1.name,
                person1.title,
                person1.age)
        automationBasics
            .expect.element('@filterObjResults').text.to.not.contain(person2.name,
                person2.hairColor,
                person2.age)
        automationBasics
            .expect.element('@filterObjResults').text.to.not.contain(person3.name,
                person3.title)
    },
    'Filter String input': browser => {
        automationBasics
            .setValue('@filterNamInput', 'James')
            .click('@filterNamConfBtn')
            .verify.containsText('@filterNamResults','James')
            .expect.element('@filterNamResults').text.to.not.contain("Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy")
        automationBasics
            .clearValue('@filterNamInput')
            .setValue('@filterNamInput', 'Jessica')
            .click('@filterNamConfBtn')
            .verify.containsText('@filterNamResults','Jessica')
            .expect.element('@filterNamResults').text.to.not.contain("James", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy")
        automationBasics
            .clearValue('@filterNamInput')
            .setValue('@filterNamInput', 'Melody')
            .click('@filterNamConfBtn')
            .verify.containsText('@filterNamResults','Melody')
            .expect.element('@filterNamResults').text.to.not.contain("James", "Jessica", "Tyler", "Blake", "Jennifer", "Mark", "Maddy")
        automationBasics
            .clearValue('@filterNamInput')
            .setValue('@filterNamInput', 'Tyler')
            .click('@filterNamConfBtn')
            .verify.containsText('@filterNamResults','Tyler')
            .expect.element('@filterNamResults').text.to.not.contain("James", "Jessica", "Melody", "Blake", "Jennifer", "Mark", "Maddy")
        automationBasics
            .clearValue('@filterNamInput')
            .setValue('@filterNamInput', 'Blake')
            .click('@filterNamConfBtn')
            .verify.containsText('@filterNamResults','Blake')
            .expect.element('@filterNamResults').text.to.not.contain("James", "Jessica", "Melody", "Tyler", "Mark", "Maddy")
        automationBasics
            .clearValue('@filterNamInput')
            .setValue('@filterNamInput', 'Jennifer')
            .click('@filterNamConfBtn')
            .verify.containsText('@filterNamResults','Jennifer')
            .expect.element('@filterNamResults').text.to.not.contain("James", "Jessica", "Melody", "Tyler", "Blake", "Mark", "Maddy")
        automationBasics
            .clearValue('@filterNamInput')
            .setValue('@filterNamInput', 'Mark')
            .click('@filterNamConfBtn')
            .verify.containsText('@filterNamResults','Mark')
            .expect.element('@filterNamResults').text.to.not.contain("James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Maddy")
        automationBasics
            .clearValue('@filterNamInput')
            .setValue('@filterNamInput', 'Maddy')
            .click('@filterNamConfBtn')
            .verify.containsText('@filterNamResults','Maddy')
            .expect.element('@filterNamResults').text.to.not.contain("James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark")
    },
    'Palindrome acceptable input': browser => {
        automationBasics
            .setValue('@palInput', "racecar")
            .click('@palConfBtn')
            .verify.containsText('@palResults', "true")
            .clearValue('@palInput')
            .setValue('@palInput', "madam")
            .click('@palConfBtn')
            .verify.containsText('@palResults', "true")
            .clearValue('@palInput')
            .setValue('@palInput', "kayak")
            .click('@palConfBtn')
            .verify.containsText('@palResults', "true")
            .clearValue('@palInput')
            .setValue('@palInput', "civic")
            .click('@palConfBtn')
            .verify.containsText('@palResults', "true")
            .clearValue('@palInput')
            .setValue('@palInput', "solos")
            .click('@palConfBtn')
            .verify.containsText('@palResults', "true")
            .clearValue('@palInput')
            .setValue('@palInput', "rotator")
            .click('@palConfBtn')
            .verify.containsText('@palResults', "true")
            .clearValue('@palInput')

    },
    'Palindrome unacceptable input': browser => {
        automationBasics
            .setValue('@palInput', "notapalindrome")
            .click('@palConfBtn')
            .verify.containsText('@palResults', "false")
            .clearValue('@palInput')
            .setValue('@palInput', "another")
            .click('@palConfBtn')
            .verify.containsText('@palResults', "false")
            .clearValue('@palInput')
            .setValue('@palInput', "phrase")
            .click('@palConfBtn')
            .verify.containsText('@palResults', "false")
            .clearValue('@palInput')
            .setValue('@palInput', "sword")
            .click('@palConfBtn')
            .verify.containsText('@palResults', "false")
            .clearValue('@palInput')
            .setValue('@palInput', "Saying All Sorts Of Random Things")
            .click('@palConfBtn')
            .verify.containsText('@palResults', "false")
            .clearValue('@palInput')
            .setValue('@palInput', "watermelon")
            .click('@palConfBtn')
            .verify.containsText('@palResults', "false")
            .clearValue('@palInput')
    },
    'Sum acceptable input': browser => {
        automationBasics
            .setValue('@sumInput1', '5')
            .setValue('@sumInput2', '5')
            .click('@sumConfBtn')
            .expect.element('@sumResults').text.to.equal("Sum: 10")
        automationBasics
            .clearValue('@sumInput1')
            .clearValue('@sumInput2')
            .setValue('@sumInput1', '10')
            .setValue('@sumInput2', '10')
            .click('@sumConfBtn')
            .expect.element('@sumResults').text.to.equal("Sum: 20")
        automationBasics
            .clearValue('@sumInput1')
            .clearValue('@sumInput2')
            .setValue('@sumInput1', '123456789')
            .setValue('@sumInput2', '789456123')
            .click('@sumConfBtn')
            .expect.element('@sumResults').text.to.equal("Sum: 912912912")
        automationBasics
            .clearValue('@sumInput1')
            .clearValue('@sumInput2')
            .setValue('@sumInput1', '326159487')
            .setValue('@sumInput2', '951487623')
            .click('@sumConfBtn')
            .expect.element('@sumResults').text.to.equal("Sum: 1277647110")
    },

    'Sum unacceptable input': browser => {
        automationBasics
            .clearValue('@sumInput1')
            .clearValue('@sumInput2')
            .setValue('@sumInput1', 'EEEE')
            .setValue('@sumInput2', 'eeee')
            .click('@sumConfBtn')
            .expect.element('@sumResults').text.to.equal("Sum: 0")
        automationBasics
            .clearValue('@sumInput1')
            .clearValue('@sumInput2')
            .setValue('@sumInput1', '2+2')
            .setValue('@sumInput2', '10')
            .click('@sumConfBtn')
            .expect.element('@sumResults').text.to.equal("Sum: NaN")

    },
}
