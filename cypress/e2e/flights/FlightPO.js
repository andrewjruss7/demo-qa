class FlightPO {
    elements = {
        radioOneway : () =>cy.get("#one-way"),
        radioRoundTrip : () => y.get("#round-trip"),
        inputFlightType : () => cy.get("#flight_type"),
        inputFlyingFrom : () => cy.get("#autocomplete"),
        inputToDestination : () => cy.get("#autocomplete2"),
        inputDeparture : () => cy.get("#departure"),
        inputReturn : () => cy.get("#return"),
        buttonTravellers : () => a,
        buttonSearch : () => cy.get("#flights-search")
    }

    radioOnewayMtd(){
        return this.elements.radioOneway();
    }

    radioRoundTripMtd(){
        return this.elements.radioRoundTrip();
    }
    
    inputFlightTypeMtd(){
        return this.elements.inputFlightType();
    }
    
    inputFlyingFromMtd(){
        return this.elements.inputFlyingFrom();
    }
    
    inputToDestinationMtd(){
        return this.elements.inputToDestination();
    }
    
    inputDepartureMtd(){
        return this.elements.inputDeparture();
    }
    
    inputReturnMtd(){
        return this.elements.inputReturn();
    }
    
    buttonTravellersMtd(){
        return this.elements.buttonTravellers();
    }
    
    buttonSearchMtd(){
        return this.elements.buttonSearch();
    }

}