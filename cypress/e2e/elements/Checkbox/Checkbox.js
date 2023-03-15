class CheckPage{
    
    HomeToggle = "button[title=Toggle]"
    HomeCheck = "#tree-node-home"
    Toggles= ".rct-collapse-btn"
    DesktopCheck= "#tree-node-desktop"
    DocumentsCheck = "#tree-node-documents"
    DownloadsCheck= "#tree-node-downloads"
    NotesCheck = "#tree-node-notes"
    CommandsCheck = "#tree-node-commands"  
    Result = "#result"
    Check= '#item-1'     

    clickCheck() {
        cy.get(this.Check).click({force:true})
    }

    clickHomeToggle() {
        cy.get(this.HomeToggle).click({force:true})
    }

    clickDesktopToggle() {
        cy.get(this.Toggles).eq(1).click()
    }

    clickDocumentsToggle() {
        cy.get(this.Toggles).eq(2).click({force:true})
    }

    clickDownloadsToggle() {
        cy.get(this.Toggles).eq(3).click({force:true})
    }

    clickHomeCheck() {
        cy.get(this.HomeCheck).click({force:true})
    }

    clickDesktopCheck() {
        cy.get(this.DesktopCheck).should('contain','Desktop').click({force:true})
    }

    clickDocumentsCheck() {
        cy.get(this.DocumentsCheck).should("contain",'Documents').click({force:true})
    }

    clickDownloadsCheck() {
        cy.get(this.DownloadsCheck).should("contain",'Downloads').click({force:true})
    }

    clickNotesCheck() {
        cy.get(this.NotesCheck).click({force:true})
    }

    clickCommandsCheck() {
        cy.get(this.CommandsCheck).should("contain",'Commands').click({force:true})
    }

    verifyResult() {
        cy.get(this.Result).contains("home", "desktop" , "notes" ,"commands","documents","workspace","react","angular","veu","office","public","private","classified","general","downloads","wordFile","excelFile")

    }

}

export default CheckPage