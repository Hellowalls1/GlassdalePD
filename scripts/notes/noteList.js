import { getNotes, useNotes, deleteNote } from "./NoteDataProvider.js"
import { Note } from "./Note.js"
import { useCriminals } from "../criminals/CriminalProvider.js"

const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", customEvent => {
    render()
})

eventHub.addEventListener("allNotesClicked", customEvent => { //notes be clicked
    render() // as soon as the button is clicked this function will be invoked which does what is happening in 16-26
})


//for the function of the delete button
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) { //
        const [prefix, id] = clickEvent.target.id.split("--") //split the id off of  the clickEvent of the selected note
        deleteNote(id).then( //render all the notes again with the one deleted
          (render)
           
       )
    }
})

//whenever you do something to the note list you must re render the new version of the notes

const render = () => { 

    //has the note provider get the notes from the api / then when they all come back (pulled into application state) //will import the notes array into this
    //whenever you select a note on the dropdown matches with criminalId of the chosen criminal and renders in the DOM
    getNotes().then(() => { 

        const criminalCollection = useCriminals() //bringing in all of the criminals
        const allTheNotes = useNotes() //stores all the notes in a new variable called allTheNotes that you pulled in from the data provider//

         contentTarget.innerHTML = allTheNotes.map(note => { //iterate array with a map to convert objects into HTML
         
            const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminal) //if the criminal id and the note id match based on the criminalChose on the dropdown
             return Note(note, relatedCriminal)
            }
         ).join("") // joins all the objects as strings and puts all that shit at the end into the html
    })
}
export const NoteList = () => {
    render()
  }



//for each when you want to itterate the array but you dont want to convert into anything just list instructions
//.map for when you want to convert while itterating