class CheckboxPO {

    elements = {
         buttonElements: () => cy.get("h5").contains('Elements'),
         buttonCheckbox: () => cy.get("item-1").should("be.visible"),
         buttonTogol: () => cy.get("rct-icon rct-icon-expand-open").should("be.visible"),
         home: () => cy.get("")
    }
}