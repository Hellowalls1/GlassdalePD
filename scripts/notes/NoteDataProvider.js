let notes = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

/*
    Allow other modules to get a copy of the application state
*/
export const useNotes = () => notes.slice()

/*
    Get the state of the notes from the API into the application
*/

export const getNotes = () => { 
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })

}

export const deleteNote = noteId => {
    return fetch(`http://localhost:8088/notes/${noteId}`, {  //route to the exact note you want to delte based on the noteId
        method: "DELETE" //method wanted on request is delete
    })
        .then(getNotes) //once that is performed go get new notes because the API state has changed 
        .then(dispatchStateChangeEvent) //since the application state has changed we need to let it know by informing with this event  
    }


// method that creates/sends to api/(POSTS) cohorts
export const saveNote = note => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}

