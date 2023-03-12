class TaskPage {
    openPage() {
        cy
            .visit('/task.html')
        return this
    }
    selectElementChooseValue(selectedValue) {
        cy
            .get('select').select(selectedValue)
        return this
    }
    clickButton(buttonClass){
        cy
            .get(buttonClass).click()
        return this
    }
    enterNameAtInput(name) {
         cy
             .get('#name').type(name)
        return this
    }
    uploadFile() {
        cy
            .get('input[type=file]').selectFile('cypress/fixtures/test.jpeg')
        return this
    }
    hoverButton() {
        cy
            .get('.hover-container').trigger('mouseover')
        return this
    }
    // Check
    checkPageHeader(){
        cy
            // Header
            .get('header').should('be.visible')
            .get('header').should('have.css', 'background-color', 'rgb(54, 62, 78)')
            .get('a > .btn').should('have.attr', 'style', 'background: linear-gradient(90deg,#2cbd9a 0%,#65c86d); color: white; border: none; width: 150px; padding: 5px; outline: none; border-radius: 20px')
        return this
    }
    checkPageFooter(){
        cy
            // Footer
            .get('#gf-BIG').should('be.visible')
            .get('#gf-BIG').should('have.css', 'background-color', 'rgb(54, 62, 78)')
            .should(($textx) => {expect($textx).to.contain('Social Media')})
            // FooterLinks
            .fixture('taskPage').then(data => {
            cy
                .get('ul > li > a').eq(0)
                .should(($textx) => {
                    expect($textx).to.contain('Facebook')
                })
                .should('have.attr', 'href', data.FacebookLink)
                .get('ul > li > a').eq(1)
                .should(($textx) => {
                    expect($textx).to.contain('Twitter')
                })
                .should('have.attr', 'href', data.TwitterLink)
                .get('ul > li > a').eq(2)
                .should(($textx) => {
                    expect($textx).to.contain('Youtube')
                })
                .should('have.attr', 'href', data.YoutubeLink)
            })
        return this
    }
    checkTitle(classTitle, titleText) {
        cy
            .get(classTitle)
            .should(($textx) => {expect($textx).to.contain(titleText)})
        return this
    }
    checkSelectedElementValue(selectedValue) {
        cy
            .get('select').should('have.value', selectedValue)
        return this
    }
    checkUploadFileName() {
        cy
            .get('img').should('be.visible')
        return this
    }
    checkAlert(name, text) {
        cy.on('window:alert', function(alertMessage) {
            expect(alertMessage).to.contains('Hello ' + name + ', ' + text);
        })
        return this
    }
    checkAlertConfirm(name, text) {
        cy.on('window:confirm', function(alertMessage) {
            expect(alertMessage).to.contains('Hello ' + name + ', ' + text);
        })
        return this
    }
    checkDisplayText() {
        cy
            .get('#displayed-text').should('be.visible')
        return this
    }
    checkDisplayTextNotShow() {
        cy
            .get('#displayed-text').should('not.be.visible')
        return this
    }
    checkIFrame() {
        cy
            .get('iframe').should('be.visible')
        return this
    }
    checkHover() {
        cy
            .get('.hover-content').should('be.visible')
        return this
    }
    checkFileContent(fileNameAndPath, content) {
            cy.readFile(fileNameAndPath).should(($textx) => {expect($textx).to.contain(content)})
        return this
    }
    checkFileContentByNode(fileNameAndPath, content) {
        cy.task('readFile', fileNameAndPath).then((text) => {
            expect(text).to.contain(content)
        })
        return this
    }
}

export const taskPage = new TaskPage()
