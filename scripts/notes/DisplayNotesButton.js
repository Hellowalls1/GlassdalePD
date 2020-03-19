const contentTarget = document.querySelector(".notes__button")
const eventHub = document.querySelector(".container")


contentTarget.addEventListener("click", clickEvent => { //listen for the click
    if (clickEvent.target.id === "showAllNotes") { //make sure you are only listening for the specific show all notes button click . The clickevent.target.id is coming from the id of the show all notes button
        // Create a custom event to tell any interested component that the user wants to see notes
        const allNotesEvent = new CustomEvent("allNotesClicked") //new custom event that is showing there is a new event that allNotes button was clicked
            //just letting the system know that the button was clicked
        // Dispatch it to event hub
        eventHub.dispatchEvent(allNotesEvent)
    }
})

export const DisplayNotesButton = () => { //the HTML representation of the notes button that will be displayed in the DOM
    contentTarget.innerHTML = "<button id='showAllNotes'>Show All Notes</button>"
}