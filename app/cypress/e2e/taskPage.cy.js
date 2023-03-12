import {taskPage} from "../support/pageObject/taskPageObject";

describe('Test task', () => {
    beforeEach(() => {
        taskPage
            .openPage()
    })

    it('Check the page in common', () => {
        taskPage
            .checkPageHeader()
            .checkPageFooter()
            .checkTitle('h1', 'Practice Page')
            .checkIFrame()
    })

    it('Check drop-down', () => {
        taskPage
            .checkTitle('legend', 'Dropdown')
            .selectElementChooseValue('option2')
            .checkSelectedElementValue('option2')
    })

    it('Check upload file', () => {
        taskPage
            .uploadFile()
            .checkUploadFileName()
    })

    it('Open tab', () => {
        // Cypress has problems with iFrame and different urls and new tabs
        // I think it is possible to implement it only with check links or check the request that comes with the event
    })

    it('Check first alert', () => {
        cy.fixture('taskPage').then(function(data){
        taskPage
            .checkTitle('h3', 'Upload your image here')
            .enterNameAtInput(data.Name)
            .clickButton('#alertbtn')
            .checkAlert(data.Name, data.TextForFirstAlert)
        })
    })

    it('Check second alert', () => {
        cy.fixture('taskPage').then(function(data){
        taskPage
            .enterNameAtInput(data.Name)
            .clickButton('#confirmbtn')
            .checkAlertConfirm(data.Name, data.TextForSecondAlert)
        })
    })

    it('Check show and hide element', () => {
        taskPage
            .clickButton('#hide-textbox')
            .checkDisplayTextNotShow()
            .clickButton('#show-textbox')
            .checkDisplayText()
    })

    it('Check hover', () => {
        // Cypress doesn't have hover method
        // Can be use cypress-real-events/support
        // But I did it with Cypress methods
        taskPage
            .hoverButton()
            .checkHover()
    })

    it('Check data from file by Cypress readfile', () => {
        cy.fixture('taskPage').then(function(data) {
            taskPage
                .checkFileContent('cypress/fixtures/alert-text.txt', data.TextFromFile)
        })
    })

    it('Check data from file by NodeJS', () => {
        cy.fixture('taskPage').then(function(data) {
            taskPage
                .checkFileContentByNode('cypress/fixtures/alert-text.txt', data.TextFromFile)
        })
    })

})
