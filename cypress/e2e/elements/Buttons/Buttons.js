class Button 
{   
    Buttons= '#item-4'
    Button2Click= "#doubleClickBtn"
    Answer2click= "#doubleClickMessage"
    ButtonRClick= "#rightClickBtn"
    AnswerRclick= "#rightClickMessage"
    Button1Click= "button.btn-primary"
    Answer1click= "#dynamicClickMessage"

clickButtons(){
    cy.get(this.Buttons).click({force:true})
    }
clickButton2Click(){
    cy.get(this.Button2Click).dblclick({force:true})
    cy.get(this.Answer2click).contains('You have done a double click')
}
clickButtonRClick(){
    cy.get(this.ButtonRClick).trigger('contextmenu', {force:true})
    cy.get(this.AnswerRclick).contains('You have done a right click')
}
clickButton(){
    cy.get(this.Button1Click).contains(/^Click Me$/).click({force:true})
    cy.get(this.Answer1click).contains('You have done a dynamic click')
}
}
export default Button;

