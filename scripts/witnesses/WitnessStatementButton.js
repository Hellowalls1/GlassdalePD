const contentTarget = document.querySelector(".witness_button")
const eventHub = document.querySelector(".container")


contentTarget.addEventListener("click", clickEvent => { //this is the event that yells that a click event has happened so witness List can send shit back
    if (clickEvent.target.id === "showStatements") { //if the button id === showStatements
        // Create a custom event to tell any interested component that the user wants to see notes
        const customEvent = new CustomEvent("witnessButtonClicked")

        // Dispatch it to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

export const WitnessStatementButton = () => { //the button that is on the DOM
    contentTarget.innerHTML = "<button id='showStatements'>Witness Statements</button>"
}